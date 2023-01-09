/**
 * tests scenario
 *
 * - createThread thunk
 *  - should dispatch action correctly when creating new thread successfully
 *  - should dispatch actions and show alert when creating new thread failed
 */

import api from '../../utils/api'
import { createThread, createThreadActionCreator } from '../threads/action'

const dummyThread = {
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General'
}

const fakeThread = {
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

const fakeError = new Error('Ups, something went wrong')

describe('createThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread
  })

  afterEach(() => {
    api.createThread = api._createThread

    delete api._createThread
  })

  it('should dispatch action correctly when creating new thread successfully', async () => {
    api.createThread = () => Promise.resolve(fakeThread)
    const dispatch = jest.fn()

    await createThread(dummyThread)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(createThreadActionCreator(fakeThread))
  })

  it('should dispatch action and show alert when creating new thread failed', async () => {
    api.createThread = () => Promise.reject(fakeError)
    const dispatch = jest.fn()
    window.alert = jest.fn()

    await createThread(dummyThread)(dispatch)

    expect(window.alert).toHaveBeenCalledWith(fakeError.message)
  })
})
