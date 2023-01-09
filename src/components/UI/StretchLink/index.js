import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import classes from './index.module.css'

const StretchLink = ({ to }) => {
  return (
    <Link className={classes.StretchLink} to={to} relative='path'>
      &nbsp;
    </Link>
  )
}

StretchLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default StretchLink
