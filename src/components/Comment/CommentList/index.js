import React from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../CommentItem'

import classes from './index.module.css'

const CommentList = ({
  threadId,
  comments,
  authedUser,
  onUpVote,
  onDownVote,
  onNeutralizeVote
}) => {
  return (
    <div className={classes.CommentList}>
      <h2 className={classes.CommentHeading}>Komentar ({comments.length})</h2>
      <ul>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
            threadId={threadId}
            authedUser={authedUser}
            upVotes={comment.upVotesBy}
            downVotes={comment.downVotesBy}
            onUpVote={onUpVote}
            onDownVote={onDownVote}
            onNeutralizeVote={onNeutralizeVote}
          />
        ))}
      </ul>
    </div>
  )
}

CommentList.propTypes = {
  threadId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  authedUser: PropTypes.string.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onNeutralizeVote: PropTypes.func.isRequired
}

export default CommentList
