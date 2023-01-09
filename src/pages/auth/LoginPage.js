import React from 'react'
import { useDispatch } from 'react-redux'

import { setAuthedUser } from '../../states/authedUser/action'
import LoginInput from '../../components/Auth/LoginInput'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useDispatch()

  const handleLogin = ({ email, password }) => {
    dispatch(setAuthedUser({ email, password }))
  }

  return (
    <>
      <LoginInput onLogin={handleLogin} />
      <p style={{ textAlign: 'center' }}>
        Belum punya akun? Silahkan <Link to='/register'>register</Link>
      </p>
    </>
  )
}

export default LoginPage
