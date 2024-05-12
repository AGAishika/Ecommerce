import {
    ALL_CATEGORY_REQUEST, 
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL
} from '../Constants/CategoryConstant'
import axios from 'axios'  // use to call api

// now making an action 
export const getCategories = ()=> async(dispatch) =>{
    try{
        // dispatch yha update ka work kar rha hai `
        dispatch({ type: ALL_CATEGORY_REQUEST})
        let link = '/api/categorydisplay'
        const {data} = await axios.get(link);
        // console.log( data );
        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(dispatch){
        dispatch({
            type:ALL_CATEGORY_FAIL,
            payload: error.response.data.message
        })
    }
}