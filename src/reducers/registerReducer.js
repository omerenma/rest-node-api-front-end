import {
REQUEST_LOADING,
REQUEST_SUCCESS,
REQUEST_ERROR
} from '../actions/type';



const initialState = {
    isLoading:false,
    success:false,
    error:false,
    successData:{},
    errorData:{}

}


export const register = (state = initialState, action) => {
    switch(action.type){
        case REQUEST_LOADING:
            return{
                isLoading:true,
                success:false,
                error:false,
                successData:{},
                errorData:{}

            }
        case REQUEST_SUCCESS:
            return{
                isLoading:false,
                success:true,
                error:false,
                successData:{...state, ...action.payload},
                errorData:{}

            }
        case REQUEST_ERROR:
            return{
                isLoading:false,
                success:false,
                successData:{},
                error:true,
                errorData:{...state, ...action.payload}

            }
        
        default:
        return state;
    }

}