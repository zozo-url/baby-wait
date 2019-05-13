import { combineReducers } from 'redux'
import ECC from '../reducers/ecc'
import eccWaitlist from '../reducers/eccWaitlist'

const reducers = combineReducers({

ECC,
eccWaitlist

})

export default reducers