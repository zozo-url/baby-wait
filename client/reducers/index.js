import { combineReducers } from 'redux'
import ecc from '../reducers/ecc'
import eccWaitlist from '../reducers/eccWaitlist'
import Child from '../reducers/child'
import user from '../reducers/user'


const reducers = combineReducers({
ecc,
eccWaitlist,
Child,
user
})



export default reducers