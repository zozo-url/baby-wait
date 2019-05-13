import { combineReducers } from 'redux'
import ECC from '../reducers/ecc'
import eccWaitlist from '../reducers/eccWaitlist'
import Child from '../reducers/child'


const reducers = combineReducers({


ECC,
eccWaitlist,
Child,


})



export default reducers