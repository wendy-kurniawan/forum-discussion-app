/**
 * tests scenario for CommentForm component
 *
 * - CommentForm component
 *   - should handle comment typing correctly
 *   - should disable button when comment is invalid
 *   - should call comment create function when Post button is clicked
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CommentForm from '.'

import '@testing-library/jest-dom'

describe('CommentForm component', () => {
  it('should handle comment typing correctly', async () => {
    render(<CommentForm onCommentCreate={() => {}} />)
    const commentInput = await screen.getByTestId('comment')

    await userEvent.type(commentInput, 'correct_comment')

    expect(commentInput).toHaveTextContent('correct_comment')
  })

  it('should disable button when title or category or body is invalid', async () => {
    render(<CommentForm onCommentCreate={() => {}} />)
    const createButton = await screen.getByRole('button', {
      name: 'Post'
    })

    expect(createButton).toBeDisabled()
  })

  it('should call comment create function when Post button is clicked', async () => {
    const mockCommentCreate = jest.fn()
    render(<CommentForm onCommentCreate={mockCommentCreate} />)
    const createButton = await screen.getByRole('button', {
      name: 'Post'
    })
    const commentInput = await screen.getByTestId('comment')

    await userEvent.type(commentInput, 'correct_comment')
    await userEvent.click(createButton)

    expect(mockCommentCreate).toHaveBeenCalledWith('correct_comment')
  })
})
