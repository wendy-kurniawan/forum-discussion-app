import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../../UI/Avatar'

import classes from './index.module.css'

const LeaderboardItem = ({ user, score }) => {
  return (
    <li className={classes.LeaderboardItem}>
      <article>
        <div className={classes.Profile}>
          <Avatar>
            <img src={user.avatar} alt={user.name} />
          </Avatar>
          <p className={classes.Name}>{user.name}</p>
        </div>
        <p className={classes.Score}>{score}</p>
      </article>
    </li>
  )
}

const leaderboardItemShape = {
  user: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
}

LeaderboardItem.propTypes = { ...leaderboardItemShape }

export { leaderboardItemShape }
export default LeaderboardItem
