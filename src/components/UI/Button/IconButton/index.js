import React from 'react'
import PropTypes from 'prop-types'

import Button from '..'
import classes from './index.module.css'

const IconButton = (props) => {
  return (
    <Button className={classes.IconButton} {...props}>
      {props.children}
    </Button>
  )
}

IconButton.propTypes = {
  props: PropTypes.shape({
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
  }),
  children: PropTypes.element.isRequired
}

export default IconButton
