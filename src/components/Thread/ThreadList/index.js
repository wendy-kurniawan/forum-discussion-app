import React from 'react'
import PropTypes from 'prop-types'
import ThreadItem, { threadItemShape } from '../ThreadItem'

import classes from './index.module.css'

const ThreadList = ({ threads }) => {
  return (
    <ul className={classes.ThreadList}>
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </ul>
  )
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired
}

export default ThreadList
