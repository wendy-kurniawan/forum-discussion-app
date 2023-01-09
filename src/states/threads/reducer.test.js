/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *  - should return initial state when given unknown action
 *  - should return the threads when given GET_THREADS action
 *  - should return new thread with previous threads when given CREATE_THREAD action
 */

import threadsReducer from './reducer'

const firstThread = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0
}

const secondThread = {
  id: 'thread-2',
  title: 'Thread Kedua',
  body: 'Ini adalah thread kedua',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-2',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0
}

const allThreads = [firstThread, secondThread]

describe('threadsReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = threadsReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the threads when given GET_THREADS action', () => {
    const initialState = []
    const action = {
      type: 'GET_THREADS',
      payload: {
        threads: allThreads
      }
    }

    const nextState = threadsReducer(initialState, action)

    expect(nextState).toEqual(action.payload.threads)
  })

  it('should return new thread with previous threads when given CREATE_THREAD action', () => {
    const initialState = [firstThread]
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: secondThread
      }
    }

    const nextState = threadsReducer(initialState, action)

    expect(nextState).toEqual([action.payload.thread, firstThread])
  })
})
