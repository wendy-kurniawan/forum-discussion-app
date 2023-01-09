import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const FormTextArea = ({ id, placeholder, onChange, onBlur }) => {
  return (
    <div
      id={id}
      data-testid={id}
      className={classes.FormTextArea}
      data-placeholder={placeholder}
      contentEditable
      role='textbox'
      suppressContentEditableWarning={true}
      onInput={onChange}
      onBlur={onBlur}
    />
  )
}

FormTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default FormTextArea
