import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'
import { selectAllPosts } from './postSlice'
import ReactButton from './ReactButton'
import TimeAgo from './TimeAgo'

const Posts = () => {

  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
//   const orderedPosts = posts.slice().sort((a, b) => {
//   return new Date(b.date) - new Date(a.date);
// });


  const renderedPosts = orderedPosts.map(
    post=>(
      <article key={post.id}>
        <h3>{post.title} </h3>
        <p>{post.content.substring(0.100)} </p>

        <p className='postCredit'>
          <PostAuthor userId={post.userId}  />
          <TimeAgo  timestamp={post.date} />
        </p>
        <ReactButton post={post}  />  
      </article>
    )
  )

  return (
    <section>
      <h2>
        Posts
      </h2>
      {
        renderedPosts
      }
    </section>
  )
}

export default Posts