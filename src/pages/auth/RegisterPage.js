import React from 'react'

import { useDispatch } from 'react-redux'
import { registerUser } from '../../states/users/action'
import { Link, useNavigate } from 'react-router-dom'
import RegisterInput from '../../components/Auth/RegisterInput'

const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegister = ({ name, email, password }) => {
    dispatch(registerUser({ name, email, password }))
    navigate('/login')
  }

  return (
    <>
      <RegisterInput onRegister={handleRegister} />
      <p style={{ textAlign: 'center' }}>
        Sudah punya akun? Silahkan <Link to='/login'>login</Link>
      </p>
    </>
  )
}

export default RegisterPage
