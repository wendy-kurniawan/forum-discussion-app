import React from 'react'
import PropTypes from 'prop-types'

import FormError from '../../UI/Form/Error'
import FormGroup from '../../UI/Form/Group'
import FormLabel from '../../UI/Form/Label'
import FormInput from '../../UI/Form/Input'
import useInput from '../../../hooks/use-input'
import PrimaryButton from '../../UI/Button/PrimaryButton'
import Form from '../../UI/Form'

const RegisterInput = ({ onRegister }) => {
  const {
    value: name,
    isValid: nameIsValid,
    isError: nameIsError,
    onValueChange: onNameChange,
    onBlur: onNameBlur
  } = useInput({ required: true })

  const {
    value: email,
    isValid: emailIsValid,
    isError: emailIsError,
    onValueChange: onEmailChange,
    onBlur: onEmailBlur
  } = useInput({ required: true, isEmail: true })

  const {
    value: password,
    isValid: passwordIsValid,
    isError: passwordIsError,
    onValueChange: onPasswordChange,
    onBlur: onPasswordBlur
  } = useInput({ required: true, minLength: 6 })

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    isError: confirmPasswordIsError,
    onValueChange: onConfirmPasswordChange,
    onBlur: onConfirmPasswordBlur
  } = useInput({ required: true, minLength: 6, confirm: password })

  const formIsValid =
    nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid

  const formIsError =
    nameIsError || emailIsError || passwordIsError || confirmPasswordIsError

  const handleRegister = (e) => {
    e.preventDefault()
    if (formIsError) return
    onRegister({ name, email, password })
  }

  return (
    <Form onSubmit={handleRegister}>
      <FormGroup>
        <FormLabel forField='name'>Nama</FormLabel>
        <FormInput
          id='name'
          name='name'
          placeholder='Nama'
          onChange={onNameChange}
          onBlur={onNameBlur}
        >
          {name}
        </FormInput>
        <FormError error={nameIsError}>Nama tidak valid</FormError>
      </FormGroup>
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
      <FormGroup>
        <FormLabel forField='confirm-password'>Konfirmasi Password</FormLabel>
        <FormInput
          type='password'
          id='confirm-password'
          name='confirm_password'
          placeholder='Konfirmasi Password'
          onChange={onConfirmPasswordChange}
          onBlur={onConfirmPasswordBlur}
        >
          {confirmPassword}
        </FormInput>
        <FormError error={confirmPasswordIsError}>
          Konfirmasi Password tidak valid
        </FormError>
      </FormGroup>
      <PrimaryButton type='submit' disabled={!formIsValid}>
        Register
      </PrimaryButton>
    </Form>
  )
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired
}

export default RegisterInput
