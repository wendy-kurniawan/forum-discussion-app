import { ActionType } from './action'

const authedUserReducer = (authedUser = null, action = {}) => {
  switch (action.type) {
    case ActionType.SET_AUTHED_USER:
      return action.payload.user
    case ActionType.UNSET_AUTHED_USER:
      return null
    default:
      return authedUser
  }
}

export default authedUserReducer
