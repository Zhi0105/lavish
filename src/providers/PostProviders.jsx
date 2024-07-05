import { useCallback, useEffect } from "react"
import { PostContext } from "src/contexts/PostContext"
import {  useMutation, useQueryClient  } from "@tanstack/react-query";
import { GetPosts, CreatePosts, RemovePost, UpdatePosts } from "src/services/post";
import { UsePostStore } from "src/store/posts"
import { toast } from "react-toastify"

export const PostProviders = ({ children }) => {
  const queryClient = useQueryClient();
  const {data: postData, isLoading: postLoading } = GetPosts();
  const { setPosts, posts } = UsePostStore((state) => ({ setPosts: state.setPosts, posts: state.posts }));

  const handlePosts = useCallback(() => {
    if(!postLoading && postData?.length && !posts.length) {
      setPosts(postData)
    }
  }, [postData, postLoading, setPosts, posts.length])

  // const handleCreatePost = (payload) => {
  //   console.log(payload)
  // }
  const { mutate: handleCreatePost, isLoading: createPostLoading } = useMutation({
    mutationFn: CreatePosts,
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ['posts'] });
        setPosts([...posts, data])
        toast("new post created!", { type: "success" })
      }, 
    onError: (err) => {  
      console.log("@CP:", err)
    },
  });


  const { mutate: handleUpdatePost, isLoading: updatePostLoading } = useMutation({
    mutationFn: UpdatePosts,
    onSuccess: (data, variables) => {
        queryClient.invalidateQueries({ queryKey: ['posts'] });
        const itemIndex = posts.findIndex(item => item.id === variables.id)
        if(itemIndex !== -1) {
          posts[itemIndex].userId = data.userId
          posts[itemIndex].title = data.title
          posts[itemIndex].body = data.body
          setPosts(posts)
          toast("post updated!", { type: "success" })
        } else {
          console.log(`Item with id ${variables.id} not found.`);
        }
      }, 
    onError: (err) => {  
      console.log("@CP:", err)
    },
  });

  const { mutate: handleRemovePost } = useMutation({
    mutationFn: RemovePost,
    onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ['posts'] });
        const newData = posts.filter(post => post.id !== variables.id)
        setPosts(newData)
        toast("post deteled!", { type: "success" })
      }, 
    onError: (err) => {
      toast(err.response.data.message, { type: "warning" })
    },
  });

  useEffect(() => {
    handlePosts()
  // }, [handlePosts])
    // eslint-disable-next-line
  }, [handlePosts])

  return (
    <PostContext.Provider
      value={{
        createPost: (payload) => { handleCreatePost(payload) },
        updatePost: (payload) => { handleUpdatePost(payload) },
        removePost: (payload) => { handleRemovePost(payload) },
        createPostLoading: createPostLoading,
        updatePostLoading: updatePostLoading
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
