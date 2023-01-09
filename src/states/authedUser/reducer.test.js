/**
 * test scenario for authedUserReducer
 *
 * - authedUserReducer function
 *  - should return initial state when given unknown action
 *  - should return the authed user when given SET_AUTHED_USER action
 *  - should return null when given UNSET_AUTHED_USER action
 */

import authedUserReducer from './reducer'

const anyUser = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg'
}

describe('usersReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = authedUserReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the authed user when given SET_AUTHED_USER action', () => {
    const initialState = []
    const action = {
      type: 'SET_AUTHED_USER',
      payload: {
        user: anyUser
      }
    }

    const nextState = authedUserReducer(initialState, action)

    expect(nextState).toEqual(action.payload.user)
  })

  it('should return null when given UNSET_AUTHED_USER action', () => {
    const initialState = []
    const action = {
      type: 'UNSET_AUTHED_USER'
    }

    const nextState = authedUserReducer(initialState, action)

    expect(nextState).toBeNull()
  })
})
