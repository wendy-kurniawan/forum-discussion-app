import api from '../../utils/api'

const ActionType = {
  GET_THREADS: 'GET_THREADS',
  CREATE_THREAD: 'CREATE_THREAD'
}

const getThreadsActionCreator = (threads) => {
  return {
    type: ActionType.GET_THREADS,
    payload: {
      threads
    }
  }
}

const createThreadActionCreator = (thread) => {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread
    }
  }
}

const createThread = ({ title, body, category }) => {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(createThreadActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  getThreadsActionCreator,
  createThreadActionCreator,
  createThread
}
