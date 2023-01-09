const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1'

  const setAccessToken = (token) => {
    localStorage.setItem('authedUserToken', token)
  }

  const getAccessToken = () => {
    return localStorage.getItem('authedUserToken')
  }

  const register = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { user }
    } = jsonResponse

    return user
  }

  const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { token }
    } = jsonResponse

    return token
  }

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`)
    const jsonResponse = await response.json()

    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { users }
    } = jsonResponse

    return users
  }

  const getOwnProfile = async () => {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { user }
    } = jsonResponse

    return user
  }

  const createThread = async ({ title, body, category }) => {
    console.log(getAccessToken())
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`
      },
      body: JSON.stringify({
        title,
        body,
        category
      })
    })

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse
    console.log(status)
    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { thread }
    } = jsonResponse

    return thread
  }

  const getAllThreads = async () => {
    const response = await fetch(`${BASE_URL}/threads`)
    const jsonResponse = await response.json()

    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { threads }
    } = jsonResponse

    return threads
  }

  const getThreadById = async (id) => {
    const response = await fetch(`${BASE_URL}/threads/${id}`)
    const jsonResponse = await response.json()

    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { detailThread: thread }
    } = jsonResponse

    return thread
  }

  const createComment = async ({ threadId, content }) => {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`
      },
      body: JSON.stringify({
        content
      })
    })

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { comment }
    } = jsonResponse

    return comment
  }

  const upVoteThread = async (threadId) => {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/up-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    })

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote }
    } = jsonResponse

    return vote
  }

  const downVoteThread = async (threadId) => {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/down-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    })

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote }
    } = jsonResponse

    return vote
  }

  const neutralizeVoteThread = async (threadId) => {
    const response = await fetch(
      `${BASE_URL}/threads/${threadId}/neutral-vote`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }
    )

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote }
    } = jsonResponse

    return vote
  }

  const upVoteComment = async ({ threadId, commentId }) => {
    const response = await fetch(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }
    )

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote }
    } = jsonResponse

    return vote
  }

  const downVoteComment = async ({ threadId, commentId }) => {
    const response = await fetch(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }
    )

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote }
    } = jsonResponse

    return vote
  }

  const neutralizeVoteComment = async ({ threadId, commentId }) => {
    const response = await fetch(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      }
    )

    const jsonResponse = await response.json()
    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { vote }
    } = jsonResponse

    return vote
  }

  const getLeaderboards = async () => {
    const response = await fetch(`${BASE_URL}/leaderboards`)
    const jsonResponse = await response.json()

    const { status, message } = jsonResponse

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { leaderboards }
    } = jsonResponse

    return leaderboards
  }

  return {
    setAccessToken,
    getAccessToken,
    register,
    login,
    getAllUsers,
    getOwnProfile,
    createThread,
    getAllThreads,
    getThreadById,
    createComment,
    upVoteThread,
    downVoteThread,
    neutralizeVoteThread,
    upVoteComment,
    downVoteComment,
    neutralizeVoteComment,
    getLeaderboards
  }
})()

export default api
