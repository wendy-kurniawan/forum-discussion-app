/**
 * tests scenario
 *
 * - getUsersAndThreads thunk
 *  - should dispatch actions correctly when fetching users and threads successfully
 *  - should dispatch action and show alert when fetching users and threads failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { getThreadsActionCreator } from '../threads/action'
import { getUsersActionCreator } from '../users/action'
import { getUsersAndThreads } from './action'

const fakeThreads = [
  {
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
]

const fakeUsers = [
  {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg'
  }
]

const fakeError = new Error('Ups, something went wrong')

describe('getUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers
    api._getAllThreads = api.getAllThreads
  })

  afterEach(() => {
    api.getAllUsers = api._getAllUsers
    api.getAllThreads = api._getAllThreads

    delete api._getAllUsers
    delete api._getAllThreads
  })

  it('should dispatch actions correctly when fetching users and threads successfully', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsers)
    api.getAllThreads = () => Promise.resolve(fakeThreads)
    const dispatch = jest.fn()

    await getUsersAndThreads()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(getUsersActionCreator(fakeUsers))
    expect(dispatch).toHaveBeenCalledWith(getThreadsActionCreator(fakeThreads))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and show alert when fetching users and threads failed', async () => {
    api.getAllUsers = () => Promise.reject(fakeError)
    api.getAllThreads = () => Promise.reject(fakeError)
    const dispatch = jest.fn()
    window.alert = jest.fn()

    await getUsersAndThreads()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeError.message)
  })
})
