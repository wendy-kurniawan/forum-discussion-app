import { ActionType } from './action'

const threadDetailReducer = (threadDetail = null, action = {}) => {
  switch (action.type) {
    case ActionType.GET_THREAD_DETAIL:
      return action.payload.thread
    case ActionType.CREATE_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments]
      }
    case ActionType.VOTE_THREAD_DETAIL:
      return getVoteThreadDetailState({
        userId: action.payload.userId,
        voteType: action.payload.voteType,
        threadDetail
      })
    case ActionType.VOTE_COMMENT:
      return getVoteCommentState({
        userId: action.payload.userId,
        commentId: action.payload.commentId,
        voteType: action.payload.voteType,
        threadDetail
      })
    default:
      return threadDetail
  }
}

function getVoteThreadDetailState ({ userId, voteType, threadDetail }) {
  switch (voteType) {
    case 'up-vote':
      return {
        ...threadDetail,
        upVotesBy: [...threadDetail.upVotesBy, userId]
      }
    case 'down-vote':
      return {
        ...threadDetail,
        downVotesBy: [...threadDetail.downVotesBy, userId]
      }
    case 'neutral-vote': {
      const upVotesWithoutUserId = threadDetail.upVotesBy.filter(
        (votedId) => votedId !== userId
      )
      const downVotesWithoutUserId = threadDetail.downVotesBy.filter(
        (votedId) => votedId !== userId
      )
      return {
        ...threadDetail,
        upVotesBy: upVotesWithoutUserId,
        downVotesBy: downVotesWithoutUserId
      }
    }
    default:
      return threadDetail
  }
}

function getVoteCommentState ({ userId, commentId, voteType, threadDetail }) {
  switch (voteType) {
    case 'up-vote': {
      const upVotedComments = threadDetail.comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            upVotesBy: [...comment.upVotesBy, userId]
          }
        }
        return comment
      })
      return {
        ...threadDetail,
        comments: upVotedComments
      }
    }
    case 'down-vote': {
      const downVotedComments = threadDetail.comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            downVotesBy: [...comment.downVotesBy, userId]
          }
        }
        return comment
      })
      return {
        ...threadDetail,
        comments: downVotedComments
      }
    }
    case 'neutral-vote': {
      const comment = threadDetail.comments.find(
        (comment) => comment.id === commentId
      )
      const upVotesWithoutUserId = comment.upVotesBy.filter(
        (votedId) => votedId !== userId
      )
      const downVotesWithoutUserId = comment.downVotesBy.filter(
        (votedId) => votedId !== userId
      )

      const newComments = threadDetail.comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            upVotesBy: upVotesWithoutUserId,
            downVotesBy: downVotesWithoutUserId
          }
        }
        return comment
      })

      return {
        ...threadDetail,
        comments: newComments
      }
    }
    default:
      return threadDetail
  }
}

export default threadDetailReducer
