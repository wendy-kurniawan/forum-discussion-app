import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const Avatar = ({ children }) => {
  return <div className={classes.Avatar}>{children}</div>
}

Avatar.propTypes = {
  children: PropTypes.element.isRequired
}

export default Avatar
