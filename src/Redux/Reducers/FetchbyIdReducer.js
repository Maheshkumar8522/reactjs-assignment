import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchbyId=createAsyncThunk("/",async(id)=>{
    const response=await axios.get(`https://pixabay.com/api/?key=31415463-1723b40e6d6d70e5d131a8146&id=${id}&image_type=photo`)
    console.log(response.data.hits)
    return response.data.hits
    })
const initialState={
        data:[]
}    
const fetchId=createSlice({
    name:"fetchId",
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchbyId.fulfilled,(state,action)=>{
            state.data.splice(0,state.data.length)
         state.data.push(action.payload)
        })}
})
export default fetchId.reducer