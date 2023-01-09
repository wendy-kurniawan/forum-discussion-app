import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const FormLabel = ({ forField, children }) => {
  return (
    <label className={classes.FormLabel} htmlFor={forField}>
      {children}
    </label>
  )
}

FormLabel.propTypes = {
  forField: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default FormLabel
