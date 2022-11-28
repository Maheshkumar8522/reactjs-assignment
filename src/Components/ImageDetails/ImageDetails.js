import React, { useEffect, useState } from 'react'
import "./ImageDetails.css"
import close from "../../assets/x.svg"
import like from "../../assets/hand-thumbs-up.svg"
import views from "../../assets/eye.svg"


import { useContext } from 'react'

import {StateOfImage} from "../Image/Image.js"

const ImageDetails = ({data}) => {
  const user = useContext(StateOfImage)
  console.log({user})
  
    const [closeIcons,setcloseIcons]=useState(true)
    const [display, setDisplay] = useContext(StateOfImage);
    console.log(data)
    const onCloseDetailImage =()=>{
      console.log("triggered")
      setcloseIcons(false)
      console.log(closeIcons)
      setDisplay(false)
      
     
    }
    // useEffect(()=>{

    // },[display])
  return (<>
     <StateOfImage.Consumer> 
{(value)=>{
  console.log(value)
  return(
    <div>
        {
           {value} && data.map((each)=>(
           <div className='image-detail-total-container'>
                <div>
                <img className='details-image' src={each.largeImageURL} alt={each.title} width="350" height="350"/>
                <button type="button" onClick={onCloseDetailImage} className='close-button'>
                <img className='icons-close' src={close} alt="close"/>
                </button>
             
                </div>
                <div className='display-user'>
                <img style={{borderRadius:"50%" ,marginTop:"10px"}} src={each.userImageURL} alt={each.user} width="60"/>
                
                <div className='image-conatiner-details'>
                <h5>{each.user}</h5>
                <div style={{display:"flex",flexDirection:"row" ,marginLeft:"20px"}}>
                  <div style={{display:"flex",flexDirection:"row"}}>
                <img style={{marginRight:"5px"}} src={like} alt="like"/>
                <h6 style={{marginRight:"10px"}}>{each.likes}</h6>
                <div style={{display:"flex",flexDirection:"row"}}>
                <img style={{marginRight:"5px"}} src={views} alt="view"/>
                <h6 style={{marginRight:"5px"}}>{each.views}</h6>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>            ))
        }
    </div>
)}}
    </StateOfImage.Consumer>
      </>  )
}

export default ImageDetails