import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { getThreadsActionCreator } from '../threads/action'
import { getUsersActionCreator } from '../users/action'

const getUsersAndThreadsFromRemote = async () => {
  const [users, threads] = await Promise.all([
    api.getAllUsers(),
    api.getAllThreads()
  ])

  return { users, threads }
}

const getUsersAndThreads = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const { users, threads } = await getUsersAndThreadsFromRemote()
      dispatch(getUsersActionCreator(users))
      dispatch(getThreadsActionCreator(threads))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export { getUsersAndThreads }
