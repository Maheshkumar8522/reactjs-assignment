import React from 'react'
import { useSelector } from 'react-redux'
import Image from "../../Components/Image/Image"

import "./Search.css"

const Search = () => { 

  
 
    var data=useSelector(state=>state.Search.data)
    console.log(data)
  
   
 
   
 
  return (
    <div className='search-container'>
    {   
    data.map((each)=>( 
         <Image data={each}/>      
     ))}
        </div>
  )
}

export default Search