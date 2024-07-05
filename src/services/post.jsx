import { apiClient } from "src/http-commons";
import { useQuery } from "@tanstack/react-query";

export const GetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      try{
        const response = await apiClient.get('/posts')
        return response.data
      } catch (error) {
        throw error
      }
    }
  })
}

export const CreatePosts = (payload) => {
  let params = {
    title: payload.title,
    body: payload.body,
    userId: payload.userId
  }

  const result = apiClient.post('/posts', params).then(res => {
    return res.data
  })
  return result
}

export const UpdatePosts = (payload) => {
  let params = {
    id: payload.id,
    title: payload.title,
    body: payload.body,
    userId: payload.userId
  }

  const result = apiClient.put(`/posts/${payload.id}`, params).then(res => {
    return res.data
  })

  return result
}

export const RemovePost = (payload) => {

  const result = apiClient.delete(`/posts/${payload.id}`).then(res => {
    return res.data
  })

  return result
}