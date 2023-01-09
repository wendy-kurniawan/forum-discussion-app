import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.css'

const Header = ({ children }) => {
  return <header className={classes.Header}>{children}</header>
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Header
