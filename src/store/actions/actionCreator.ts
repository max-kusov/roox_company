import { FILTERS_USERS, SET_USERS, SET_LOADED, SET_PROFILE } from '../constants'
import { FilterActionType, SetLoadedActionType, Filter } from '../types'
import axios from 'axios'

export const setLoaded = (payload: boolean): SetLoadedActionType => ({
  type: SET_LOADED,
  payload
})

export const filterUsers = (activeFilter: Filter): FilterActionType => ({
  type: FILTERS_USERS,
  payload: {
    activeFilter
  }
})

// ???
export const setUsers = (payload: any) => ({
  type: SET_USERS,
  payload,
})

export const fetchUsers = (activeFilter: Filter) => (dispatch: any) => {
  dispatch(setLoaded(false))
  axios.get(`https://jsonplaceholder.typicode.com/users?_sort=${activeFilter}&_order=asc`).then(({ data }) => {
    dispatch(setUsers(data))
  })
}

// test var
export const setUserProfile = (payload: any) => ({
  type: SET_PROFILE,
  payload,
})
