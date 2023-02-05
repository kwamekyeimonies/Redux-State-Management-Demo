import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectAllusers } from '../users/usersSlice'
import { selectPostById } from './postSlice'

const EditPostForm = () => {

    const {postId} = useParams
    const navigate = useNavigate()
    const post = useSelector((state)=> selectPostById(state,Number(postId)))
    const users = useSelector(selectAllusers)

    const [title,setTitle] = useState(post?.title)
    const [content,setContent] = useState(post?.body)
    const [userId,setUserId] = useState(post?.userId)
    const [requestStatus,setRequestStatus] = useState('idle')

    const dispatch = useDispatch()
    if(!post){
        return(
            <section>
                <h2>Post Not Found.....</h2>
            </section>
        )
    }

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e=> setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = [title,content, userId].every(Boolean) && requestStatus === 'idle'

    const onSavePostClicked = ()=>{
        if(canSave){
            try{
                setRequestStatus('pending')
                dispatch(updatePost({
                    id:post.id,
                    title,
                    body:content,
                    userId,
                    reactions:post.reactions
                })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/post/${postId}`)
            }
            catch(err){
                console.log('Faled to Save to post',err)
            }
            finally{
                setRequestStatus('idle')
            }
        }
    }

    const userOptions = users.map(user=>(
        <option
        key={user.id}
        value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Edit Post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title:</label>
            <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            />
            <label htmlFor='postAuthor'>Author: </label>
            <select id='postAuthor' defaultValue={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOptions}
            </select>
            <label htmlFor='postContent'>Content: </label>
            <textarea
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
            />
            <button
            type='button'
            onClick={onSavePostClicked}
            disabled={!canSave}
            >
                Save Post
            </button>
        </form>
    </section>
  )
}

export default EditPostForm
