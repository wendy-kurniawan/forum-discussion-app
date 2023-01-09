/**
 * tests scenario for ThreadForm component
 *
 * - ThreadForm component
 *   - should handle title typing correctly
 *   - should show invalid title message when title is empty
 *   - should handle category typing correctly
 *   - should show invalid category message when category is empty
 *   - should handle body typing correctly
 *   - should show invalid body message when body is empty
 *   - should disable button when name or category or body is invalid
 *   - should call create function when "Tambahkan" button is clicked
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ThreadForm from '.'

import '@testing-library/jest-dom'

describe('ThreadForm component', () => {
  it('should handle title typing correctly', async () => {
    render(<ThreadForm onCreate={() => {}} />)
    const titleInput = await screen.getByPlaceholderText('Judul')

    await userEvent.type(titleInput, 'correct_title')

    expect(titleInput).toHaveValue('correct_title')
  })

  it('should show invalid title message when title is empty', async () => {
    render(<ThreadForm onCreate={() => {}} />)
    const titleInput = await screen.getByPlaceholderText('Judul')

    await userEvent.click(titleInput)
    await userEvent.click(document.body)

    const titleLabel = await screen.findByText('Judul tidak valid')
    expect(titleLabel).toBeVisible()
  })

  it('should handle category typing correctly', async () => {
    render(<ThreadForm onCreate={() => {}} />)
    const categoryInput = await screen.getByPlaceholderText('Kategori')

    await userEvent.type(categoryInput, 'react')

    expect(categoryInput).toHaveValue('react')
  })

  it('should show invalid category message when category is empty', async () => {
    render(<ThreadForm onCreate={() => {}} />)
    const categoryInput = await screen.getByPlaceholderText('Kategori')

    await userEvent.click(categoryInput)
    await userEvent.click(document.body)

    const categoryLabel = await screen.findByText('Kategori tidak valid')
    expect(categoryLabel).toBeVisible()
  })

  it('should handle body typing correctly', async () => {
    render(<ThreadForm onCreate={() => {}} />)
    const bodyInput = await screen.getByTestId('body')

    await userEvent.type(bodyInput, 'correct_body')

    expect(bodyInput).toHaveTextContent('correct_body')
  })

  it('should show invalid body message when body is empty', async () => {
    render(<ThreadForm onCreate={() => {}} />)
    const bodyInput = await screen.getByTestId('body')

    await userEvent.click(bodyInput)
    await userEvent.click(document.body)

    const bodyLabel = await screen.findByText('Isi tidak valid')
    expect(bodyLabel).toBeVisible()
  })

  it('should disable button when title or category or body is invalid', async () => {
    render(<ThreadForm onCreate={() => {}} />)
    const createButton = await screen.getByRole('button', {
      name: 'Tambahkan'
    })

    expect(createButton).toBeDisabled()
  })

  it('should call create function when "Tambahkan" button is clicked', async () => {
    const mockThreadCreate = jest.fn()
    render(<ThreadForm onCreate={mockThreadCreate} />)

    const titleInput = await screen.getByPlaceholderText('Judul')
    await userEvent.type(titleInput, 'correct_title')
    const categoryInput = await screen.getByPlaceholderText('Kategori')
    await userEvent.type(categoryInput, 'react')
    const bodyInput = await screen.getByTestId('body')
    await userEvent.type(bodyInput, 'correct_body')
    const registerButton = await screen.getByRole('button', {
      name: 'Tambahkan'
    })

    await userEvent.click(registerButton)

    expect(mockThreadCreate).toBeCalledWith({
      title: 'correct_title',
      category: 'react',
      body: 'correct_body'
    })
  })
})
