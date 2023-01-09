import React, { useEffect } from 'react'

import Header from './layouts/Header'
import Navigation from './layouts/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setPreload } from './states/preload/action'
import { unsetAuthedUser } from './states/authedUser/action'
import Loading from './components/UI/Loading'
import MainRoute from './router/MainRoute'

const App = () => {
  const { authedUser = null, isPreload = false } = useSelector(
    (states) => states
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPreload())
  }, [dispatch])

  const handleLogout = () => {
    dispatch(unsetAuthedUser())
  }

  if (isPreload) return null

  return (
    <>
      <Loading />
      <Header>
        <h1>Discussy</h1>
        {authedUser && (
          <Navigation authedUser={authedUser} onLogOut={handleLogout} />
        )}
      </Header>
      <main>
        <MainRoute />
      </main>
    </>
  )
}

export default App
