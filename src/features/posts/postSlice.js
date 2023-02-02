import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        content:"The Journey of Backend Engineer",
        title:"Ansible Development in writing System Configurations"
    },
    {
        id:2,
        content:"The Journey of Backend Engineer",
        title:"Jenkins Pipeline configuration"
    }
]

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
       
    }
})

export const selectAllPosts = (state) => state.posts

export const {
    postAdded
} = postSlice.actions

 

export default postSlice.reducer