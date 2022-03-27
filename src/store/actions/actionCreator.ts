import { FILTERS_USERS, SET_USERS, SET_LOADED } from '../constants'
import { FilterActionType, Filter } from '../types'
import axios from 'axios'

export const setLoaded = (payload: any) => ({
  type: SET_LOADED,
  payload
})

export const filterUsers = (activeFilter: Filter): FilterActionType => ({
  type: FILTERS_USERS,
  payload: {
    activeFilter
  }
})

export const setUsers = (payload: any) => ({
  type: SET_USERS,
  payload,
})

export const fetchUsers = (activeFilter: any) => (dispatch: any) => {
  console.log(activeFilter)
  dispatch(setLoaded(false))
  axios.get(`https://jsonplaceholder.typicode.com/users?_sort=${activeFilter}&_order=asc`).then(({ data }) => {
    dispatch(setUsers(data))
  })
}
