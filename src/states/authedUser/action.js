import api from '../../utils/api'

const ActionType = {
  SET_AUTHED_USER: 'SET_AUTHED_USER',
  UNSET_AUTHED_USER: 'UNSET_AUTHED_USER'
}

const setAuthedUserActionCreator = (user) => {
  return {
    type: ActionType.SET_AUTHED_USER,
    payload: {
      user
    }
  }
}

const unsetAuthedUserActionCreator = () => {
  return {
    type: ActionType.UNSET_AUTHED_USER
  }
}

const _getAuthedUserAndSetAccessToken = async ({ email, password }) => {
  const token = await api.login({ email, password })
  api.setAccessToken(token)
  return await api.getOwnProfile()
}

const setAuthedUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const authedUser = await _getAuthedUserAndSetAccessToken({
        email,
        password
      })
      dispatch(setAuthedUserActionCreator(authedUser))
    } catch (error) {
      alert(error.message)
    }
  }
}

const unsetAuthedUser = () => {
  return (dispatch) => {
    dispatch(unsetAuthedUserActionCreator())
    api.setAccessToken(null)
  }
}

export {
  ActionType,
  setAuthedUserActionCreator,
  setAuthedUser,
  unsetAuthedUser
}
