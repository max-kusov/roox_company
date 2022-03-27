import { SET_USERS, SET_LOADED } from "../constants"
import { Filter, FilterActionType } from "../types"


const initialState = {
  users: [],
  isLoaded: false,
}


const users = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload,
        isLoaded: true
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: payload
      }
    default:
      return state
  }
}

export default users