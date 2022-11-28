import {configureStore} from "@reduxjs/toolkit"
import  Fetchall from "../Reducers/FetchallReducer"
import FetchbyCategoryReducer from "../Reducers/FetchbyCategoryReducer"
import  fetchbyId from "../Reducers/FetchbyIdReducer"
import  Fetchbysearch from "../Reducers/FetchbysearchReducer"


const Store=configureStore({
    reducer:{
        Fetch:Fetchall,
        Search:Fetchbysearch,
        Category:FetchbyCategoryReducer,
        Id:fetchbyId,
        
        
    }
})
export default Store