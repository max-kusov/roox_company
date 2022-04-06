import { SET_PROFILE } from '../constants'

const initialState = {
  userProfile: {},
  // readOnly: true,
}

const profile = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        userProfile: payload,
      }
    default:
      return state
  }
}

export default profile