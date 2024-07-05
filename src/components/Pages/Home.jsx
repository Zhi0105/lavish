import { useContext } from "react";
import { PostContext } from "src/contexts/PostContext";
import { UsePostStore } from "src/store/posts"
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';

export const Home = () => {
  const { createPost, removePost, updatePost } = useContext(PostContext)
  const { posts } = UsePostStore((state) => ({ posts: state.posts }));
  const defaultMaterialTheme = createTheme();


  return (
    <div className="home_main min-h-screen flex justify-center items-center py-5">
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable 
        style={{
          padding: '1rem'
        }}
        columns={[
        // { title: 'ID', field: 'id' },
        // { title: 'userID', field: 'userId' },
        { title: 'Title', field: 'title' },
        { title: 'Body', field: 'body' },
        ]}
        title={'Posts List'}
        data={posts}
        options={{
          actionsColumnIndex: -1, addRowPosition: 'first'
        }}
        editable={{
          onRowAdd:(newRow) => new Promise((resolve, reject) => {
            createPost(newRow)
            resolve()
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            removePost(selectedRow)
            resolve()
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            updatePost(newData)
            resolve()
          })
        }}
      />
      </ThemeProvider>
  
    </div>
  )
}
