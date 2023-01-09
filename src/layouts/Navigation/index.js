import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import {
  FiBarChart,
  FiLogOut,
  FiMessageSquare,
  FiPlusSquare
} from 'react-icons/fi'

import classes from './index.module.css'

const Navigation = ({ onLogOut }) => {
  const notesNavigation = (
    <>
      <li>
        <Link className={classes.Link} to='/threads'>
          <FiMessageSquare />
          <span>Threads</span>
        </Link>
      </li>
      <li>
        <Link className={classes.Link} to='/leaderboard'>
          <FiBarChart />
          <span>Leaderboard</span>
        </Link>
      </li>
      <li>
        <Link className={classes.Link} to='/threads/new'>
          <FiPlusSquare />
          <span>Create</span>
        </Link>
      </li>
      <li>
        <button
          onClick={() => onLogOut()}
          className={classes.Link}
          to='/threads'
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </li>
    </>
  )

  return (
    <nav className={classes.Navigation}>
      <ul>{notesNavigation}</ul>
    </nav>
  )
}

Navigation.propTypes = {
  onLogOut: PropTypes.func.isRequired
}

export default Navigation
