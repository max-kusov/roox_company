import { filterUsers } from './actions/actionCreator';
import { FILTERS_USERS } from "./constants"

export type Filter = string

interface filterUsers {
  type: typeof FILTERS_USERS,
  payload: {
    activeFilter: Filter,
  }
}

export type FilterActionType = filterUsers