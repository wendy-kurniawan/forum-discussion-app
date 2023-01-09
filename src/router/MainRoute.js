import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddThreadPage from '../pages/AddThreadPage'

import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import DetailPage from '../pages/DetailPage'
import LeaderboardPage from '../pages/LeaderboardPage'
import ThreadsPage from '../pages/ThreadsPage'

const MainRoute = () => {
  const authedUser = useSelector((states) => states.authedUser)

  return (
    <Routes>
      {authedUser === null && (
        <>
          <Route path='*' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </>
      )}
      {authedUser && (
        <>
          <Route path='*' element={<Navigate to='threads' replace />} />
          <Route path='threads/:id' element={<DetailPage />} />
          <Route path='threads' element={<ThreadsPage />} />
          <Route path='threads/new' element={<AddThreadPage />} />
          <Route path='leaderboard' element={<LeaderboardPage />} />
        </>
      )}
    </Routes>
  )
}

export default MainRoute
