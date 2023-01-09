import { ActionType } from './action'

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionType.GET_THREADS:
      return action.payload.threads
    case ActionType.CREATE_THREAD:
      return [action.payload.thread, ...threads]
    default:
      return threads
  }
}

export default threadsReducer
