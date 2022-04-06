import { filterUsers, setLoaded } from './actions/actionCreator';
import { FILTERS_USERS, SET_LOADED, } from './constants'

// import { FILTERSUSERS } from "./constants"

export type Filter = string

// export interface Users {
//   id: boolean
// }

interface setLoadedAction {
  type: typeof SET_LOADED,
  payload: boolean
}

// interface setUsersAction {
//   type: typeof SET_USERS,
//   payload: Users
// }

interface filterUsers {
  type: typeof FILTERS_USERS,
  payload: {
    activeFilter: Filter,
  }
}

// interface setProfileAction {
//   type: typeof SET_PROFILE,
//   payload: boolean
// }

export type FilterActionType = filterUsers
export type SetLoadedActionType = setLoadedAction
// export type SetProfileActionType = setProfileAction