import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { fetchbyCategory } from '../../Redux/Reducers/FetchbyCategoryReducer';

import "./Dropdown.css"
const Dropdown = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [Category,setCategory]=useState("")
    const handleChange = (event:SelectChangeEvent) => {
        setCategory(event.target.value);
        console.log(Category)
        dispatch(fetchbyCategory(event.target.value))
        navigate(`category/${event.target.value}`)       
    }; 
  return (
    <div className="label-conatiner">
    <FormControl sx={{ m:1, minWidth: 120 }} size="small">
    <InputLabel id="demo-select-small">Category</InputLabel>
    <Select labelId="demo-select-small" id="demo-select-small" value={Category} label="Age" onChange={handleChange}>
    <MenuItem value="" defaultValue=""></MenuItem>
    <MenuItem value="backgrounds">backgrounds</MenuItem>
    <MenuItem value="fashion">fashion</MenuItem>
    <MenuItem value="education">education</MenuItem>
    <MenuItem value="science">science</MenuItem>
    <MenuItem value="feelings">feelings</MenuItem>
    <MenuItem value="health">health</MenuItem>
    <MenuItem value="people">people</MenuItem>
    <MenuItem value="religion">religion</MenuItem>
    <MenuItem value="places">places</MenuItem>
    <MenuItem value="animals">animals</MenuItem>
    <MenuItem value="computer"> computer</MenuItem>
    <MenuItem value="food"> food</MenuItem>
    <MenuItem value="sports"> sports</MenuItem>
    <MenuItem value="industry">industry</MenuItem>
    <MenuItem value="transportation">transportation</MenuItem>
    <MenuItem value="travel"> travel</MenuItem>
    <MenuItem value="buildings"> buildings</MenuItem>
    <MenuItem value="business">  business</MenuItem>
    <MenuItem value="music"> music</MenuItem>
  </Select>
  </FormControl>
</div>)
}

export default Dropdown
