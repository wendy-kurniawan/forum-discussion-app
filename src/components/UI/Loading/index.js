import React from 'react'
import LoadingBar from 'react-redux-loading-bar'

import classes from './index.module.css'

const Loading = () => {
  return (
    <div className={classes.Loading}>
      <LoadingBar />
    </div>
  )
}

export default Loading
