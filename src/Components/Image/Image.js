
import React,{useEffect, useState } from 'react'
import { createContext } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchbyId} from "../../Redux/Reducers/FetchbyIdReducer"
import "./Image.css"
import ImageDetails from '../ImageDetails/ImageDetails'

export const StateOfImage=createContext()

const Images = ({data}) => {
    console.log(data)
   const dispatch=useDispatch()
   const [display,setDisplay]=useState(false)
   const dataId=useSelector((state)=>state.Id.data)
   console.log(dataId)
   const [id,setid]=useState()
   console.log(id)
   console.log(display)
   const onDetailImage=(id)=>{
      setDisplay(true)
      setid(id)
      dispatch(fetchbyId(id))
   }
  
    
  return (
   <StateOfImage.Provider value={[display,setDisplay]}>


   

  
   <div className='image-conatiner'>
      {data.length<1?(<h1>not found</h1>):(data.map((each)=>(
     <button type="button" key={each.id}  className="image-button" onClick={()=>onDetailImage(each.id)}>
         <img className='image' src={each.largeImageURL} alt={each.title} />
     </button>
  )))}
   </div>

  {display && <div className="details-card">{dataId.map((each)=>(
       <ImageDetails data={each} key={each.id}/>
   ))}
    </div>
}
   
  
    </StateOfImage.Provider>
  )
}

export default Images