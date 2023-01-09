import React from 'react'
import PropTypes from 'prop-types'

import PrimaryButton from '../../UI/Button/PrimaryButton'
import Form from '../../UI/Form'
import FormGroup from '../../UI/Form/Group'
import FormLabel from '../../UI/Form/Label'
import FormTextArea from '../../UI/Form/TextArea'
import FormInput from '../../UI/Form/Input'
import FormError from '../../UI/Form/Error'
import useInput from '../../../hooks/use-input'

const ThreadForm = ({ onCreate }) => {
  const {
    value: title,
    isValid: titleIsValid,
    isError: titleIsError,
    onBlur: onTitleBlur,
    onValueChange: onTitleChange
  } = useInput({ required: true })

  const {
    value: category,
    isValid: categoryIsValid,
    isError: categoryIsError,
    onBlur: onCategoryBlur,
    onValueChange: onCategoryChange
  } = useInput({ required: true })

  const {
    value: body,
    isValid: bodyIsValid,
    isError: bodyIsError,
    onBlur: onBodyBlur,
    onValueChange: onBodyChange
  } = useInput({ required: true, textarea: true })

  const formIsValid = titleIsValid && categoryIsValid && bodyIsValid
  const formIsError = titleIsError || categoryIsError || bodyIsError

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formIsError) return

    const newNote = { title, category, body }
    onCreate(newNote)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel forField='title'>Judul</FormLabel>
        <FormInput
          id='title'
          name='title'
          placeholder='Judul'
          onChange={onTitleChange}
          onBlur={onTitleBlur}
        >
          {title}
        </FormInput>
        <FormError error={titleIsError}>Judul tidak valid</FormError>
      </FormGroup>
      <FormGroup>
        <FormLabel forField='category'>Kategori</FormLabel>
        <FormInput
          id='category'
          name='category'
          placeholder='Kategori'
          onChange={onCategoryChange}
          onBlur={onCategoryBlur}
        >
          {category}
        </FormInput>
        <FormError error={categoryIsError}>Kategori tidak valid</FormError>
      </FormGroup>
      <FormGroup>
        <FormLabel forField='body'>Isi</FormLabel>
        <FormTextArea
          id='body'
          placeholder='Isi'
          onChange={onBodyChange}
          onBlur={onBodyBlur}
        />
        <FormError error={bodyIsError}>Isi tidak valid</FormError>
      </FormGroup>
      <PrimaryButton type='submit' disabled={!formIsValid}>
        Tambahkan
      </PrimaryButton>
    </Form>
  )
}

ThreadForm.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default ThreadForm
