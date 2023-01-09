import React from 'react'
import PropTypes from 'prop-types'

import PrimaryButton from '../../UI/Button/PrimaryButton'
import Form from '../../UI/Form'
import FormGroup from '../../UI/Form/Group'
import FormTextArea from '../../UI/Form/TextArea'
import useInput from '../../../hooks/use-input'

const CommentForm = ({ onCommentCreate }) => {
  const {
    value: comment,
    isValid: commentIsValid,
    onBlur: onCommentBlur,
    onValueChange: onCommentChange
  } = useInput({ required: true, textarea: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    onCommentCreate(comment)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormTextArea
          id='comment'
          placeholder='Berikan komentar'
          onChange={onCommentChange}
          onBlur={onCommentBlur}
        />
      </FormGroup>
      <PrimaryButton type='submit' disabled={!commentIsValid}>
        Post
      </PrimaryButton>
    </Form>
  )
}

CommentForm.propTypes = {
  onCommentCreate: PropTypes.func.isRequired
}

export default CommentForm
