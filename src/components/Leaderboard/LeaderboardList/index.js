import React from 'react'
import PropTypes from 'prop-types'

import LeaderboardItem, { leaderboardItemShape } from '../LeaderboardItem'

import classes from './index.module.css'

const LeaderboardList = ({ leaderboards }) => {
  return (
    <ul className={classes.LeaderboardList}>
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem
          key={leaderboard.user.id}
          user={leaderboard.user}
          score={leaderboard.score}
        />
      ))}
    </ul>
  )
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape))
    .isRequired
}

export default LeaderboardList
