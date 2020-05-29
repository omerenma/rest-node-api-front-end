import {REQUEST_LOADING, REQUEST_SUCCESS, REQUEST_ERROR} from './type'
import axios from 'axios'

export const registerAction = (formData) => dispatch =>{
    dispatch(setLoading())
    axios.post('http://localhost:5000/products', formData)
    .then(res => {
        dispatch({
            type:REQUEST_SUCCESS,
            payload:res.data
        })
    })
    // fetch('http://localhost:5000/products',{
    //     method:'POST',
    //     body:JSON.stringify(formData),
    // })
    // .then(res =>  dispatch({
    //     type:REQUEST_SUCCESS,
    //     payload:res.data
    // }))
    
       
 

}

export const setLoading = () => {
    return{ type:REQUEST_LOADING}
}