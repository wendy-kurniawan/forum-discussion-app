import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const HeadingPrimaryTypes = {
  NORMAL: classes.HeadingPrimary,
  BORDER: classes.HeadingPrimaryBorder,
  BORDER_ALL: classes.HeadingPrimaryBorderAll
}

const HeadingPrimary = ({ children, type = 'NORMAL' }) => {
  return <h1 className={HeadingPrimaryTypes[type]}>{children}</h1>
}

HeadingPrimary.propTypes = {
  /** The content of the heading */
  children: PropTypes.string.isRequired,
  /** The types of the heading (border / normal) */
  type: PropTypes.oneOf(['NORMAL', 'BORDER', 'BORDER_ALL'])
}

export { HeadingPrimaryTypes }
export default HeadingPrimary
