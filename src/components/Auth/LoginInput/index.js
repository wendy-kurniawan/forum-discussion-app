import React from 'react'
import PropTypes from 'prop-types'

import FormError from '../../UI/Form/Error'
import FormGroup from '../../UI/Form/Group'
import FormLabel from '../../UI/Form/Label'
import FormInput from '../../UI/Form/Input'
import useInput from '../../../hooks/use-input'
import PrimaryButton from '../../UI/Button/PrimaryButton'
import Form from '../../UI/Form'

const LoginInput = ({ onLogin }) => {
  const {
    value: email,
    isValid: emailIsValid,
    isError: emailIsError,
    onBlur: onEmailBlur,
    onValueChange: onEmailChange
  } = useInput({ required: true, isEmail: true })
  const {
    value: password,
    isValid: passwordIsValid,
    isError: passwordIsError,
    onBlur: onPasswordBlur,
    onValueChange: onPasswordChange
  } = useInput({ required: true, minLength: 6 })

  const formIsValid = emailIsValid && passwordIsValid
  const formIsError = emailIsError || passwordIsError

  const handleLogin = (e) => {
    e.preventDefault()
    if (formIsError) return
    onLogin({ email, password })
  }

  return (
    <Form onSubmit={handleLogin}>
      <FormGroup>
        <FormLabel forField='email'>Email</FormLabel>
        <FormInput
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        >
          {email}
        </FormInput>
        <FormError error={emailIsError}>Email tidak valid</FormError>
      </FormGroup>
      <FormGroup>
        <FormLabel forField='password'>Password</FormLabel>
        <FormInput
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
        >
          {password}
        </FormInput>
        <FormError error={passwordIsError}>Password tidak valid</FormError>
      </FormGroup>
      <PrimaryButton type='submit' disabled={!formIsValid}>
        Login
      </PrimaryButton>
    </Form>
  )
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default LoginInput
