import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThreadForm from '../components/Thread/ThreadForm'
import { getUsersAndThreads } from '../states/shared/action'
import { createThread } from '../states/threads/action'

const AddThreadPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUsersAndThreads())
  }, [dispatch])

  const handleCreate = (thread) => {
    dispatch(createThread(thread))
    navigate('/')
  }

  return <ThreadForm onCreate={handleCreate} />
}

export default AddThreadPage
