import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import ReactButton from './ReactButton'
import TimeAgo from './TimeAgo'


const PostsExcerpt = ({post}) => {
  return (
    <article key={post.id}>
    <h3>{post.title} </h3>
    <p>{post.body.substring(0.100)} </p>

    <p className='postCredit'>
      <Link to={`post/${post.id}`}>
          View Post
      </Link>
      <PostAuthor userId={post.userId}  />
      <TimeAgo  timestamp={post.date} />
    </p>
    <ReactButton post={post}  />  
  </article>
  )
}

export default PostsExcerpt
