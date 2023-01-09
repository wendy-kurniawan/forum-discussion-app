import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ThreadDetail from '../components/Thread/ThreadDetail'
import CommentList from '../components/Comment/CommentList'
import {
  getThreadDetail,
  createComment,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  upVoteThreadComment,
  downVoteThreadComment,
  neutralizeVoteThreadComment
} from '../states/threadDetail/action'
import CommentForm from '../components/Comment/CommentForm'

const DetailPage = () => {
  const { id } = useParams()
  const { threadDetail = null, authedUser } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getThreadDetail(id))
  }, [dispatch, id])

  const handleCommentCreate = (content) => {
    dispatch(createComment({ threadId: id, content }))
  }

  const handleUpVoteDetail = (threadId) => {
    dispatch(
      upVoteThreadDetail({
        threadId,
        userId: authedUser.id,
        currentVoteType: 'up-vote'
      })
    )
  }

  const handleDownVoteDetail = (threadId) => {
    dispatch(
      downVoteThreadDetail({
        threadId,
        userId: authedUser.id,
        currentVoteType: 'down-vote'
      })
    )
  }

  const neutralizeVoteDetail = (threadId) => {
    dispatch(
      neutralizeVoteThreadDetail({
        threadId,
        userId: authedUser.id,
        currentVoteType: 'neutral-vote'
      })
    )
  }

  const handleUpVoteComment = ({ threadId, commentId }) => {
    dispatch(
      upVoteThreadComment({
        threadId,
        commentId,
        userId: authedUser.id,
        currentVoteType: 'up-vote'
      })
    )
  }

  const handleDownVoteComment = ({ threadId, commentId }) => {
    dispatch(
      downVoteThreadComment({
        threadId,
        commentId,
        userId: authedUser.id,
        currentVoteType: 'down-vote'
      })
    )
  }

  const handleNeutralizeVoteComment = ({ threadId, commentId }) => {
    dispatch(
      neutralizeVoteThreadComment({
        threadId,
        commentId,
        userId: authedUser.id,
        currentVoteType: 'neutral-vote'
      })
    )
  }

  if (!threadDetail) return null

  const {
    id: threadId,
    title,
    createdAt: date,
    body,
    category,
    owner,
    comments,
    upVotesBy: upVotes,
    downVotesBy: downVotes
  } = threadDetail

  return (
    <section
      style={{
        padding: '2.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
    >
      <ThreadDetail
        id={id}
        title={title}
        date={date}
        body={body}
        category={category}
        owner={owner}
        authedUser={authedUser.id}
        upVotes={upVotes}
        downVotes={downVotes}
        onUpVote={handleUpVoteDetail}
        onDownVote={handleDownVoteDetail}
        onNeutralizeVote={neutralizeVoteDetail}
      />
      <CommentForm onCommentCreate={handleCommentCreate} />
      <CommentList
        threadId={threadId}
        comments={comments}
        authedUser={authedUser.id}
        onUpVote={handleUpVoteComment}
        onDownVote={handleDownVoteComment}
        onNeutralizeVote={handleNeutralizeVoteComment}
      />
    </section>
  )
}

export default DetailPage
