/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *  - should return initial state when given unknown action
 *  - should return the leaderboards when given GET_LEADERBOARDS action
 */

import leaderboardsReducer from './reducer'

const anyLeaderboards = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 10
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 5
  }
]

describe('leaderboardsReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = leaderboardsReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the leaderboards when given GET_LEADERBOARDS action', () => {
    const initialState = []
    const action = {
      type: 'GET_LEADERBOARDS',
      payload: {
        leaderboards: anyLeaderboards
      }
    }

    const nextState = leaderboardsReducer(initialState, action)

    expect(nextState).toEqual(action.payload.leaderboards)
  })
})
