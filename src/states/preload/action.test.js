/**
 * tests scenario
 *
 * - setPreload thunk
 *  - should dispatch actions and set authed user profile correctly when get own profile successfully
 *  - should dispatch actions and set authed user to null when get own profile failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { setAuthedUserActionCreator } from '../authedUser/action'
import { setPreload, setPreloadActionCreator } from './action'

const fakeUser = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg'
}

const fakeError = new Error('Ups, something went wrong')

describe('setPreload thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile
  })

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile

    delete api._getOwnProfile
  })

  it('should dispatch actions and set authed user profile correctly when get own profile successfully', async () => {
    api.getOwnProfile = () => Promise.resolve(fakeUser)
    const dispatch = jest.fn()

    await setPreload()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthedUserActionCreator(fakeUser))
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions and set authed user to null when get own profile failed', async () => {
    api.getOwnProfile = () => Promise.reject(fakeError)
    const dispatch = jest.fn()

    await setPreload()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthedUserActionCreator(null))
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
