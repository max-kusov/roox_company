import { FILTERS_USERS } from "../constants"
import { Filter, FilterActionType } from "../types"


const BASE_FILTER: Filter = 'city'


const filters = (state = BASE_FILTER, { type, payload }: FilterActionType): Filter => {
  switch (type) {
    case FILTERS_USERS:
      return payload.activeFilter
    default:
      return state
  }
}

export default filters