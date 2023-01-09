import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  GET_USERS: 'GET_USERS'
}

const getUsersActionCreator = (users) => {
  return {
    type: ActionType.GET_USERS,
    payload: {
      users
    }
  }
}

const registerUser = ({ name, email, password }) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await api.register({ name, email, password })
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export { ActionType, getUsersActionCreator, registerUser }
