import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const LeaderboardHeader = ({ icon, heading }) => {
  return (
    <div className={classes.LeaderboardHeader}>
      {icon}
      <h2>{heading}</h2>
    </div>
  )
}

LeaderboardHeader.propTypes = {
  icon: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired
}

export default LeaderboardHeader
