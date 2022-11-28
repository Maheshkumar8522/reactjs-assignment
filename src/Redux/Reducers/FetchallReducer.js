import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchall=createAsyncThunk("/",async()=>{
    const response= await axios.get(`https://pixabay.com/api/?key=31415463-1723b40e6d6d70e5d131a8146&q=all&image_type=photo&per_page=200`)
    console.log(response.data.hits)
    return response.data.hits
    })
   
const initialState={
        data:[]
}    
const fetchdata=createSlice({
    name:"fetchall",
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchall.fulfilled,(state,action)=>{
             state.data.splice(0,state.data.length)
            state.data.push(action.payload)
        })
        
}})
export default fetchdata.reducer