import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllusers } from '../users/usersSlice';
import { postAdded } from './postSlice';


const AddPostForm = () => {

    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId,setUserId] = useState('')
    const users = useSelector(selectAllusers)

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e)=> setUserId(e.target.value)

    const dispatch = useDispatch()

    const onSavePostClicked = () =>{
        if(title && content){
            dispatch(
                postAdded(title,content,userId)
            )

            setTitle('')
            setContent('')
        }
    }

    const userOptions = users.map(
        user=>(
            <option key={user.id} value={user.id}  >
                {user.name}
            </option>
        )
    )

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <section>
        <h2>Add New Post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title:  </label>
            <input
            type="text"
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
            />
            <label htmlFor='postAuthor'>Author: </label>
            <select 
            id="postAuthor" 
            value={userId}
            onChange={onAuthorChanged}
            >
                <option value=""></option>
                {
                    userOptions
                }
            </select>
            <label htmlFor='postContent'>Content: </label>
            <textarea
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
            />
            <button 
            onClick={onSavePostClicked} 
            disabled={!canSave}
            type='button'>Save Post
            </button>
        </form>
    </section>
  )
}

export default AddPostForm
