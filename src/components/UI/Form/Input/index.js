import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const Input = ({ name, id, type, placeholder, children, onChange, onBlur }) => {
  return (
    <>
      <input
        className={classes.FormInput}
        type={type || 'text'}
        name={name}
        id={id}
        placeholder={placeholder}
        value={children}
        onChange={onChange}
        onBlur={onBlur}
      />
      <small className={classes.Error}></small>
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'tel', 'number', 'email']),
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default Input
