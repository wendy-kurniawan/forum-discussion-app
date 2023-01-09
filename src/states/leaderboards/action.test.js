/**
 * tests scenario
 *
 * - getLeaderboards thunk
 *  - should dispatch actions correctly when get leaderboards success
 *  - should dispatch action and show alert when get leaderboards failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { getLeaderboards, getLeaderboardsActionCreator } from './action'

const fakeLeaderboards = []

const fakeError = new Error('Ups, something went wrong')

describe('getLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards
  })

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards

    delete api._getLeaderboards
  })

  it('should dispatch actions correctly when get leaderboards success', async () => {
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboards)
    const dispatch = jest.fn()

    await getLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(
      getLeaderboardsActionCreator(fakeLeaderboards)
    )
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and show alert when get leaderboards failed', async () => {
    api.getLeaderboards = () => Promise.reject(fakeError)
    const dispatch = jest.fn()
    window.alert = jest.fn()

    await getLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeError.message)
  })
})
