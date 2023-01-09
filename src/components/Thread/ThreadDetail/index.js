import React from 'react'
import parser from 'html-react-parser'
import PropTypes from 'prop-types'

import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown
} from 'react-icons/fa'

import { showFormattedDate } from '../../../utils/date'
import Avatar from '../../UI/Avatar'
import IconButton from '../../UI/Button/IconButton'
import IconTotal from '../../UI/IconTotal'
import Tag from '../../UI/Tag'

import classes from './index.module.css'

const ThreadDetail = ({
  id,
  title,
  date,
  body,
  category,
  owner,
  authedUser,
  upVotes,
  downVotes,
  onUpVote,
  onDownVote,
  onNeutralizeVote
}) => {
  const isUpVoted = upVotes.includes(authedUser)
  const isDownVoted = downVotes.includes(authedUser)

  return (
    <article className={classes.ThreadDetail}>
      <header className={classes.Header}>
        <div style={{ textAlign: 'center' }}>
          <Tag>{category}</Tag>
        </div>
        <h1 className={classes.Heading}>{title}</h1>
        <div className={classes.Profile}>
          <Avatar>
            <img src={owner.avatar} alt={owner.name} />
          </Avatar>
          <div className={classes.Detail}>
            <p className={classes.Name}>{owner.name}</p>
            <p className={classes.Date}>{showFormattedDate(date)}</p>
          </div>
        </div>
      </header>
      <main>
        <div className={classes.Body}>{parser(body)}</div>
      </main>
      <section className={classes.Actions}>
        <IconTotal
          component={
            <IconButton
              onClick={() => (isUpVoted ? onNeutralizeVote(id) : onUpVote(id))}
            >
              {isUpVoted ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </IconButton>
          }
          label={upVotes.length}
        />
        <IconTotal
          component={
            <IconButton
              onClick={() =>
                isDownVoted ? onNeutralizeVote(id) : onDownVote(id)
              }
            >
              {isDownVoted ? <FaThumbsDown /> : <FaRegThumbsDown />}
            </IconButton>
          }
          label={downVotes.length}
        />
      </section>
    </article>
  )
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
  upVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralizeVote: PropTypes.func.isRequired
}

export default ThreadDetail
