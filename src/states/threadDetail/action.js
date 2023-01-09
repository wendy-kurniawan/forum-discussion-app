import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  GET_THREAD_DETAIL: 'GET_THREAD_DETAIL',
  CREATE_COMMENT: 'CREATE_COMMENT',
  VOTE_THREAD_DETAIL: 'VOTE_THREAD_DETAIL',
  VOTE_COMMENT: 'VOTE_COMMENT'
}

const getThreadDetailActionCreator = (thread) => {
  return {
    type: ActionType.GET_THREAD_DETAIL,
    payload: {
      thread
    }
  }
}

const createCommentActionCreator = (comment) => {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment
    }
  }
}

const getThreadDetail = (threadId) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const thread = await api.getThreadById(threadId)
      dispatch(getThreadDetailActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

const createComment = ({ threadId, content }) => {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ threadId, content })
      dispatch(createCommentActionCreator(comment))
    } catch (error) {
      alert(error.message)
    }
  }
}

const voteThreadDetailActionCreator = ({ userId }, voteType) => {
  return {
    type: ActionType.VOTE_THREAD_DETAIL,
    payload: {
      userId,
      voteType
    }
  }
}

const resetVoteThreadDetail = ({ userId, currentVoteType }, dispatch) => {
  dispatch(voteThreadDetailActionCreator({ userId }, 'neutral-vote'))
  switch (currentVoteType) {
    case 'up-vote':
      dispatch(voteThreadDetailActionCreator({ userId }, 'up-vote'))
      break
    case 'down-vote':
      dispatch(voteThreadDetailActionCreator({ userId }, 'down-vote'))
      break
    default:
      break
  }
}

const upVoteThreadDetail = ({ userId, threadId, currentVoteType }) => {
  return async (dispatch) => {
    dispatch(voteThreadDetailActionCreator({ userId }, 'neutral-vote'))
    dispatch(voteThreadDetailActionCreator({ userId }, 'up-vote'))
    try {
      await api.upVoteThread(threadId)
    } catch (error) {
      alert(error.message)
      resetVoteThreadDetail({ userId, currentVoteType }, dispatch)
    }
  }
}

const downVoteThreadDetail = ({ userId, threadId, currentVoteType }) => {
  return async (dispatch) => {
    dispatch(voteThreadDetailActionCreator({ userId }, 'neutral-vote'))
    dispatch(voteThreadDetailActionCreator({ userId }, 'down-vote'))
    try {
      await api.downVoteThread(threadId)
    } catch (error) {
      alert(error.message)
      resetVoteThreadDetail({ userId, currentVoteType }, dispatch)
    }
  }
}

const neutralizeVoteThreadDetail = ({ userId, threadId, currentVoteType }) => {
  return async (dispatch) => {
    dispatch(voteThreadDetailActionCreator({ userId }, 'neutral-vote'))
    try {
      await api.neutralizeVoteThread(threadId)
    } catch (error) {
      alert(error.message)
      resetVoteThreadDetail({ userId, currentVoteType }, dispatch)
    }
  }
}

const voteCommentActionCreator = ({ userId, commentId }, voteType) => {
  return {
    type: ActionType.VOTE_COMMENT,
    payload: {
      userId,
      commentId,
      voteType
    }
  }
}

const resetVoteComment = ({ userId, currentVoteType, commentId }, dispatch) => {
  dispatch(voteCommentActionCreator({ userId, commentId }, 'neutral-vote'))
  switch (currentVoteType) {
    case 'up-vote':
      dispatch(voteCommentActionCreator({ userId, commentId }, 'up-vote'))
      break
    case 'down-vote':
      dispatch(voteCommentActionCreator({ userId, commentId }, 'down-vote'))
      break
    default:
      break
  }
}

const upVoteThreadComment = ({
  threadId,
  commentId,
  userId,
  currentVoteType
}) => {
  return async (dispatch) => {
    dispatch(voteCommentActionCreator({ userId, commentId }, 'neutral-vote'))
    dispatch(voteCommentActionCreator({ userId, commentId }, 'up-vote'))
    try {
      await api.upVoteComment({ threadId, commentId })
    } catch (error) {
      alert(error.message)
      resetVoteComment({ userId, commentId, currentVoteType })
    }
  }
}

const downVoteThreadComment = ({
  threadId,
  commentId,
  userId,
  currentVoteType
}) => {
  return async (dispatch) => {
    dispatch(voteCommentActionCreator({ userId, commentId }, 'neutral-vote'))
    dispatch(voteCommentActionCreator({ userId, commentId }, 'down-vote'))
    try {
      await api.downVoteComment({ threadId, commentId })
    } catch (error) {
      alert(error.message)
      resetVoteComment({ userId, commentId, currentVoteType })
    }
  }
}

const neutralizeVoteThreadComment = ({
  threadId,
  commentId,
  userId,
  currentVoteType
}) => {
  return async (dispatch) => {
    dispatch(voteCommentActionCreator({ userId, commentId }, 'neutral-vote'))
    try {
      await api.neutralizeVoteComment({ threadId, commentId })
    } catch (error) {
      alert(error.message)
      resetVoteComment({ userId, commentId, currentVoteType })
    }
  }
}

export {
  ActionType,
  getThreadDetail,
  createComment,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neutralizeVoteThreadDetail,
  upVoteThreadComment,
  downVoteThreadComment,
  neutralizeVoteThreadComment
}
