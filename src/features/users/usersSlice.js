import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users"

const initialState=[]

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async()=>{
        try{
            const response = await axios.get(USER_URL)
            return [...response.data]
        }
        catch(err){
            return err.message
        }
    }
)

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            // .addCase(fetchUsers.pending, (state,actions)=>{
            //     state.status = 'loading'
            // })
            .addCase(fetchUsers.fulfilled, (state,action)=>{
                return action.payload
            })
            // .addCase(fetchUsers.rejected, (state, action)=>{
            //     state.status = "failed"
            //     state.error = action.error.message
            // })
    }
})

export const selectAllusers = (state) => state.users

export default userSlice.reducer