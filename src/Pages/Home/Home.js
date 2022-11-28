import React from 'react'
import { useSelector} from "react-redux"
import Images from "../../Components/Image/Image"


import "./Home.css"


const Home = () => {
  
  
  
    let data=useSelector((state)=>state.Fetch.data)
    console.log(data)

       
      
   
  return (   
<div className='home-image-container'>
{data.map((each)=>(
<Images data={each}/>
  )) 
}
    </div>


  )
}

export default Home