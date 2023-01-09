/**
 * tests scenario for RegisterInput component
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should show invalid name message when name is empty
 *   - should handle email typing correctly
 *   - should show invalid email message when not in email format
 *   - should handle password typing correctly
 *   - should show invalid password message when password is empty
 *   - should handle confirm password typing correctly
 *   - should show invalid confirm password message when confirm password does not match password
 *   - should disable button when email or password or name is invalid
 *   - should call register function when register button is clicked
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import RegisterInput from '.'

import '@testing-library/jest-dom'

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const nameInput = await screen.getByPlaceholderText('Nama')

    await userEvent.type(nameInput, 'correct_name')

    expect(nameInput).toHaveValue('correct_name')
  })

  it('should show invalid name message when name is empty', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const nameInput = await screen.getByPlaceholderText('Nama')

    await userEvent.click(nameInput)
    await userEvent.click(document.body)

    const nameLabel = await screen.findByText('Nama tidak valid')
    expect(nameLabel).toBeVisible()
  })

  it('should handle email typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    await userEvent.type(emailInput, 'correct_email@gmail.com')

    expect(emailInput).toHaveValue('correct_email@gmail.com')
  })

  it('should show invalid email message when not in email format', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    await userEvent.type(emailInput, 'correct_email')
    await userEvent.click(document.body)

    const emailLabel = await screen.findByText('Email tidak valid')
    expect(emailLabel).toBeVisible()
  })

  it('should handle password typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    await userEvent.type(passwordInput, 'correct_password')

    expect(passwordInput).toHaveValue('correct_password')
  })

  it('should show invalid password message when password is empty', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    await userEvent.click(passwordInput)
    await userEvent.click(document.body)

    const passwordLabel = await screen.findByText('Password tidak valid')
    expect(passwordLabel).toBeVisible()
  })

  it('should handle confirm password typing correctly', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const passwordConfirmationInput = await screen.getByPlaceholderText(
      'Konfirmasi Password'
    )

    await userEvent.type(passwordConfirmationInput, 'correct_password')

    expect(passwordConfirmationInput).toHaveValue('correct_password')
  })

  it('should show invalid confirm password message when confirm password does not match password', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')
    const passwordConfirmationInput = await screen.getByPlaceholderText(
      'Konfirmasi Password'
    )

    await userEvent.type(passwordInput, 'correct_password')
    await userEvent.type(passwordConfirmationInput, 'wrong_password')
    await userEvent.click(document.body)

    const passwordConfirmationLabel = await screen.findByText(
      'Konfirmasi Password tidak valid'
    )
    expect(passwordConfirmationLabel).toBeVisible()
  })

  it('should disable button when email or password or name is invalid', async () => {
    render(<RegisterInput onRegister={() => {}} />)
    const registerButton = await screen.getByRole('button', {
      name: 'Register'
    })

    expect(registerButton).toBeDisabled()
  })

  it('should call register function when register button is clicked', async () => {
    const mockRegister = jest.fn()
    render(<RegisterInput onRegister={mockRegister} />)

    const nameInput = await screen.getByPlaceholderText('Nama')
    await userEvent.type(nameInput, 'correct_name')
    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'correct_email@gmail.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'correct_password')
    const passwordConfirmation = await screen.getByPlaceholderText(
      'Konfirmasi Password'
    )
    await userEvent.type(passwordConfirmation, 'correct_password')
    const registerButton = await screen.getByRole('button', {
      name: 'Register'
    })

    await userEvent.click(registerButton)

    expect(mockRegister).toBeCalledWith({
      name: 'correct_name',
      email: 'correct_email@gmail.com',
      password: 'correct_password'
    })
  })
})
