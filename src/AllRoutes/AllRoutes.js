import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'
import Search from '../Pages/Search/Search'
import Category from '../Pages/Category/Category'
import Home from '../Pages/Home/Home'
const AllRoutes = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/category/:category" element={<Category/>}/>
             <Route path="/:query" element={<Search/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default AllRoutes
