import React from 'react'
import PropTypes from 'prop-types'

import Button from '..'
import classes from './index.module.css'

const PrimaryButtonColors = {
  NORMAL: classes.PrimaryButton,
  DANGER: classes.PrimaryButtonDanger,
  WARNING: classes.PrimaryButtonWarning
}

const PrimaryButton = (props) => {
  const { color = 'NORMAL' } = props

  return (
    <Button className={PrimaryButtonColors[color]} {...props}>
      {props.children}
    </Button>
  )
}

PrimaryButton.propTypes = {
  /** The properties of the button */
  props: PropTypes.shape({
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  }),
  /** The color of the button */
  color: PropTypes.oneOf(['NORMAL', 'DANGER', 'WARNING']),
  /** The content of the button */
  children: PropTypes.string.isRequired
}

export default PrimaryButton
