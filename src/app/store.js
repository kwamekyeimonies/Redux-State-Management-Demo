import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../app/features/counter/counterSlice"
import postReducer from "../features/posts/postSlice"


export const store = configureStore({
    reducer:{
        // counter:counterReducer,
        posts:postReducer

    }
})