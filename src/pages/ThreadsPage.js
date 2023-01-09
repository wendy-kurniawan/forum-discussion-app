import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoryChooser from '../components/Category/CategoryChooser'
import ThreadList from '../components/Thread/ThreadList'
import HeadingPrimary from '../components/UI/Typography/HeadingPrimary'
import { getUsersAndThreads } from '../states/shared/action'

const ThreadsPage = () => {
  const { threads, users, authedUser } = useSelector((states) => states)
  const dispatch = useDispatch()

  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    dispatch(getUsersAndThreads())
  }, [dispatch])

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authedUser
  }))

  const filteredThreadList =
    selectedCategory.length === 0
      ? threadList
      : threadList.filter((thread) => thread.category === selectedCategory)

  const categories = [...new Set(threads.map((thread) => thread.category))]

  const handleChoose = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory('')
      return
    }
    setSelectedCategory(category)
  }

  return (
    <>
      <section style={{ padding: '8rem 12rem' }}>
        <CategoryChooser
          categories={categories}
          onChoose={handleChoose}
          selectedCategory={selectedCategory}
        />
        <section style={{ padding: '6rem 0' }}>
          <HeadingPrimary type='NORMAL'>Diskusi Tersedia</HeadingPrimary>
          <ThreadList threads={filteredThreadList} />
        </section>
      </section>
    </>
  )
}

export default ThreadsPage
