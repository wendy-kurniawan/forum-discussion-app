import parser from 'html-react-parser'
import React from 'react'
import PropTypes from 'prop-types'

import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp
} from 'react-icons/fa'
import { showFormattedDate } from '../../../utils/date'
import Avatar from '../../UI/Avatar'
import IconButton from '../../UI/Button/IconButton'
import IconTotal from '../../UI/IconTotal'

import classes from './index.module.css'

const CommentItem = ({
  threadId,
  id: commentId,
  content,
  owner,
  createdAt: date,
  upVotes,
  downVotes,
  authedUser,
  onUpVote,
  onDownVote,
  onNeutralizeVote
}) => {
  const isUpVoted = upVotes.includes(authedUser)
  const isDownVoted = downVotes.includes(authedUser)

  return (
    <li className={classes.CommentItem}>
      <article className={classes.Article}>
        <div className={classes.Profile}>
          <Avatar>
            <img src={owner.avatar} alt={owner.name} />
          </Avatar>
          <section className={classes.Detail}>
            <p className={classes.Name}>{owner.name}</p>
            <p className={classes.Date}>{showFormattedDate(date)}</p>
            <section className={classes.Content}>
              <div className={classes.Body}>{parser(content)}</div>
            </section>
          </section>
        </div>
        <section className={classes.Actions}>
          <IconTotal
            component={
              <IconButton
                onClick={() =>
                  isUpVoted
                    ? onNeutralizeVote({ threadId, commentId })
                    : onUpVote({ threadId, commentId })
                }
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
                  isDownVoted
                    ? onNeutralizeVote({ threadId, commentId })
                    : onDownVote({ threadId, commentId })
                }
              >
                {isDownVoted ? <FaThumbsDown /> : <FaRegThumbsDown />}
              </IconButton>
            }
            label={downVotes.length}
          />
        </section>
      </article>
    </li>
  )
}

CommentItem.propTypes = {
  threadId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  authedUser: PropTypes.string.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralizeVote: PropTypes.func.isRequired
}

export default CommentItem
