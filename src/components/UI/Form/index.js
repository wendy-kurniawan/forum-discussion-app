import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={classes.Form}>
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Form
