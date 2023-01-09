/**
 * tests scenario for LoginInput component
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should show invalid email message when not in email format
 *   - should handle password typing correctly
 *   - should show invalid password message when password is empty
 *   - should disable button when email or password is invalid
 *   - should call login function when login button is clicked
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import LoginInput from '.'

import '@testing-library/jest-dom'

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    render(<LoginInput onLogin={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    await userEvent.type(emailInput, 'correct_email@gmail.com')

    expect(emailInput).toHaveValue('correct_email@gmail.com')
  })

  it('should show invalid email message when not in email format', async () => {
    render(<LoginInput onLogin={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    await userEvent.type(emailInput, 'correct_email')
    await userEvent.click(document.body)

    const emailLabel = await screen.findByText('Email tidak valid')
    expect(emailLabel).toBeVisible()
  })

  it('should handle password typing correctly', async () => {
    render(<LoginInput onLogin={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    await userEvent.type(passwordInput, 'correct_password')

    expect(passwordInput).toHaveValue('correct_password')
  })

  it('should show invalid password message when password is empty', async () => {
    render(<LoginInput onLogin={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    await userEvent.click(passwordInput)
    await userEvent.click(document.body)

    const passwordLabel = await screen.findByText('Password tidak valid')
    expect(passwordLabel).toBeVisible()
  })

  it('should disable button when email or password is invalid', async () => {
    render(<LoginInput onLogin={() => {}} />)
    const loginButton = await screen.getByRole('button', { name: 'Login' })

    expect(loginButton).toBeDisabled()
  })

  it('should call login function when login button is clicked', async () => {
    const mockLogin = jest.fn()
    render(<LoginInput onLogin={mockLogin} />)

    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'correct_email@gmail.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'correct_password')
    const loginButton = await screen.getByRole('button', { name: 'Login' })

    await userEvent.click(loginButton)

    expect(mockLogin).toBeCalledWith({
      email: 'correct_email@gmail.com',
      password: 'correct_password'
    })
  })
})
