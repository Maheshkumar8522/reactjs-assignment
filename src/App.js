import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import { useEffect } from 'react';
import { fetchall } from './Redux/Reducers/FetchallReducer';
import {useDispatch} from "react-redux"


function App() {
const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchall())
  })
  return (
<AllRoutes/>
  )
}

export default App;
