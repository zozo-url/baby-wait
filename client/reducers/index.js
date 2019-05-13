import { combineReducers } from 'redux'
import ecc from '../reducers/ecc'
import eccWaitlist from '../reducers/eccWaitlist'
import Child from '../reducers/child'


const reducers = combineReducers({


ecc,
eccWaitlist,
Child,


})



export default reducers