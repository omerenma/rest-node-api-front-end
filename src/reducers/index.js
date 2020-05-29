import {combineReducers} from 'redux';
import {register} from './registerReducer'

const rootReducers = combineReducers({
register:register
})

export default rootReducers