import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import Search from '../Search/Search'
import threeDots from "../../assets/three-dots-vertical.svg"
import "./Navbar.css"
const Navbar = () => {
  return (<>
    <nav className='navbar-container'>
        <div>
            <Link to="/" style={{textDecoration:"none"}}>
            <h5 style={{color:'black'}}>MAHESH KUMAR</h5>
            </Link>
        </div>
         <Search/>
         <Dropdown/>
         <div>
           <img className='threedots' src={threeDots} alt="threedots" width="25"/>
        </div>
    </nav>
    </>
  )
}

export default Navbar