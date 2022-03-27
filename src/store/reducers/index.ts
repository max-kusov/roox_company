import { combineReducers } from "redux";

import filters from './filters'
import users from './users'

const rootReducer = combineReducers({ filters, users })

export default rootReducer