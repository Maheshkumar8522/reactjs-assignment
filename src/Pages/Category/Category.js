import React from 'react'
import { useSelector } from 'react-redux'
import Image from "../../Components/Image/Image.js"
import "./Category.css"
const Category = () => {
    const data=useSelector((state)=>state.Category.data)
  return (
    <div className='image-container-1'>
    {data.map(each=>(
    <Image data={each}/>
      )) 
    }
    </div>
  )
}

export default Category