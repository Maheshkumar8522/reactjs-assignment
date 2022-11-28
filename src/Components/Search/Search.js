import React,{useState} from 'react'
import { fetchbySearch } from '../../Redux/Reducers/FetchbysearchReducer'
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import "./Search.css"
import mic from "../../assets/mic.svg"
import camera from "../../assets/camera.svg"
import close from "../../assets/x.svg"
import search from "../../assets/search.svg"
const Search = () => {
    const[query,setquery]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const onSubmitSearchinput=(e)=>{
        e.preventDefault()
        console.log(query)
        navigate(`/${query}`)
        dispatch(fetchbySearch(query))
    }
    const onsetToInput=()=>{
        setquery("")

    }
  return (

    <form className='form-container' onSubmit={onSubmitSearchinput}>
            <button className="close-button" onClick={onsetToInput}>
            <img className="icon-4" src={close} alt="close" width="18" height="35"/>
            </button>  
                <img className='icon-1' src={search}  alt="search" width="18"/>
                <img  className='icon-2'  src={mic} alt="search" width="18"/>
                <img  className='icon-3' src={camera} alt="search" width="18"/>
               
                <input type="text" id="text" value={query} onChange={(e)=>(setquery(e.target.value))} className="input-container" placeholder='Search for an image' />
                <button className='button-search' type="submit">search</button>
                </form>
  )
}

export default Search
