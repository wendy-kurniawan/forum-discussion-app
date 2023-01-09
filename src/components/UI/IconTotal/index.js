import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const IconTotal = ({ component, label }) => {
  return (
    <p className={classes.IconTotal}>
      {component}
      <span className={classes.Label}>{label}</span>
    </p>
  )
}

IconTotal.propTypes = {
  component: PropTypes.element.isRequired,
  label: PropTypes.number.isRequired
}

export default IconTotal
