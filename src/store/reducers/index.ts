import { combineReducers } from "redux";

import filters from './filters'
import users from './users'
import userProfile from './profile'



const rootReducer = combineReducers({ filters, users, userProfile })

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>