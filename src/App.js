import React from 'react'
import Counter from './features/counter/Counter'
import AddPostForm from './features/posts/AddPostForm'
import Posts from './features/posts/Posts'

const App = () => {
  return (
    <main className='App'>
      {/* <Counter  /> */}
      <AddPostForm  />
      <Posts  />
    </main>
  )
}

export default App