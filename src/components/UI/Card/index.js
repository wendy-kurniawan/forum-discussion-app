import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const Card = ({ className, children }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Card
