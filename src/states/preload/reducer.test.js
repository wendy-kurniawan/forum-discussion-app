/**
 * test scenario for preloadsReducer
 *
 * - preloadsReducer function
 *  - should return initial state when given unknown action
 *  - should change isPreload when given SET_PRELOAD action
 */

import preloadReducer from './reducer'

describe('preloadsReducer function', () => {
  it('should return initial state when given unknown action', () => {
    const initialState = true
    const action = { type: 'UNKNOWN' }

    const nextState = preloadReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should change isPreload when given SET_PRELOAD action', () => {
    const initialState = true
    const action = {
      type: 'SET_PRELOAD',
      payload: {
        isPreload: false
      }
    }

    const nextState = preloadReducer(initialState, action)

    expect(nextState).toEqual(action.payload.isPreload)
  })
})
