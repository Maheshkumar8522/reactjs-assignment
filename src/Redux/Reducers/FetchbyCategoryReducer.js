import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchbyCategory=createAsyncThunk("category/:category",async(category)=>{
    const response=await axios.get(`https://pixabay.com/api/?key=31415463-1723b40e6d6d70e5d131a8146&q=${category}&image_type=photo&per_page=200`)
    console.log(response.data.hits)
    return response.data.hits
    })
const initialState={
        data:[]
}    
const fetchcategory=createSlice({
    name:"fetchcategory",
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchbyCategory.fulfilled,(state,action)=>{
            state.data.splice(0,state.data.length)
         state.data.push(action.payload)
        })}
})
export default fetchcategory.reducer