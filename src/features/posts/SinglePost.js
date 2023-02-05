import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { selectPostById } from './postSlice'
import ReactButton from './ReactButton'
import TimeAgo from './TimeAgo'

const SinglePost = () => {

    const {postId} = useParams()
    const post = useSelector((state)=> selectPostById(state.postId))

    if (!post){
        return (
            <section>
                <h2>
                    Post not found.....
                </h2>
            </section>
        )
    }

  return (
    <article>
        <h2>
            {post.title}
        </h2>
        <p>
            {post.body}
        </p>
        <p className='postCredit'>
            <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
            <PostAuthor userId={post.userId}    />
            <TimeAgo timestamp={post.date}  />
        </p>
        <ReactButton    post={post} />
    </article>
  )
}

export default SinglePost
