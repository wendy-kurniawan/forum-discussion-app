import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiStar, FiUser } from 'react-icons/fi'

import LeaderboardHeader from '../components/Leaderboard/LeaderboardHeader'
import LeaderboardList from '../components/Leaderboard/LeaderboardList'
import HeadingPrimary from '../components/UI/Typography/HeadingPrimary'
import { getLeaderboards } from '../states/leaderboards/action'

const LeaderboardPage = () => {
  const leaderboards = useSelector((states) => states.leaderboards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLeaderboards())
  }, [dispatch])

  return (
    <section
      style={{
        width: '80%',
        maxWidth: '120rem',
        margin: '0 auto',
        padding: '8rem 0'
      }}
    >
      <HeadingPrimary type='BORDER'>Top Ranking</HeadingPrimary>
      <header
        style={{
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <LeaderboardHeader icon={<FiUser />} heading='Pengguna' />
        <LeaderboardHeader icon={<FiStar />} heading='Poin' />
      </header>
      <LeaderboardList leaderboards={leaderboards} />
    </section>
  )
}

export default LeaderboardPage
