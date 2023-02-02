import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:'0',
        name:"Tenkorang Daniel"
    },
    {
        id:"1",
        name:"Kwame Kyei Daniel"
    },
    {
        id:"2",
        name:"Akyaa Agnes"
    }
]


const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const selectAllusers = (state) => state.users

export default userSlice.reducer