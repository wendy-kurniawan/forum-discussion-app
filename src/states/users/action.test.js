/**
 * tests scenario
 *
 * - registerUser thunk
 *  - should dispatch register actions correctly when register successfully
 *  - should dispatch register action and show alert when register failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { registerUser } from './action'

const dummyUserInserted = {
  name: 'John Doe',
  email: 'john@example.com',
  password: '12345678'
}

const fakeUserRegistered = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg'
}

const fakeError = new Error('Ups, something went wrong')

describe('registerUser thunk', () => {
  beforeEach(() => {
    api._register = api.register
  })

  afterEach(() => {
    api.register = api._register

    delete api._register
  })

  it('should dispatch register actions correctly when register successfully', async () => {
    api.register = () => Promise.resolve(fakeUserRegistered)
    const dispatch = jest.fn()

    await registerUser(dummyUserInserted)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch register action and show alert when register failed', async () => {
    api.register = () => Promise.reject(fakeError)
    const dispatch = jest.fn()
    window.alert = jest.fn()

    await registerUser(dummyUserInserted)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeError.message)
  })
})
