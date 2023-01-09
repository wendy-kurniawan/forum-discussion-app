import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const FormError = ({ error, children }) => {
  return error && <small className={classes.FormError}>{children}</small>
}

FormError.propTypes = {
  error: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
}

export default FormError
