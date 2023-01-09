import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { setAuthedUserActionCreator } from '../authedUser/action'

const ActionType = {
  SET_PRELOAD: 'SET_PRELOAD'
}

const setPreloadActionCreator = (isPreload) => {
  return {
    type: ActionType.SET_PRELOAD,
    payload: {
      isPreload
    }
  }
}

const setPreload = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const authedUser = await api.getOwnProfile()
      dispatch(setAuthedUserActionCreator(authedUser))
    } catch (error) {
      dispatch(setAuthedUserActionCreator(null))
    } finally {
      dispatch(setPreloadActionCreator(false))
    }
    dispatch(hideLoading())
  }
}

export { ActionType, setPreloadActionCreator, setPreload }
