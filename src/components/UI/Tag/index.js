import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const Tag = ({ children }) => {
  return <div className={classes.Tag}>{children}</div>
}

Tag.propTypes = {
  children: PropTypes.string.isRequired
}

export default Tag
