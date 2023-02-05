import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
// import Counter from './features/counter/Counter'
import AddPostForm from './features/posts/AddPostForm'
import Posts from './features/posts/Posts'
import SinglePost from './features/posts/SinglePost'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout  />} >
        <Route index element={<Posts  />} />
        <Route path="post">
          <Route index element={<AddPostForm  />} />
          <Route path=':postId' element={<SinglePost  />} />
        </Route>
      </Route>      
    </Routes>
  )
}

export default App