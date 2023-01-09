/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return initial state when given unknown action
 *  - should return the users when given GET_USERS action
 */

import usersReducer from './reducer'

const fakeUsers = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg'
  },
  {
    id: 'jane_doe',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: 'https://generated-image-url.jpg'
  },
  {
    id: 'fulan',
    name: 'Si Fulan',
    email: 'fulan@example.com',
    avatar: 'https://generated-image-url.jpg'
  }
]

describe('usersReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = usersReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the users when given GET_USERS action', () => {
    const initialState = []
    const action = {
      type: 'GET_USERS',
      payload: {
        users: fakeUsers
      }
    }

    const nextState = usersReducer(initialState, action)

    expect(nextState).toEqual(action.payload.users)
  })
})
