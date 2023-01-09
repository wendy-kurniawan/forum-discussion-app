import { useState } from 'react'

const validation = (value, rules) => {
  const validations = []
  if (rules.required) {
    validations.push(value.trim() !== '')
  }

  if (rules.minLength) {
    validations.push(value.length > rules.minLength)
  }

  if (rules.isEmail) {
    const emailPattern =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ // eslint-disable-line
    validations.push(emailPattern.test(value))
  }

  if (rules.confirm) {
    const password = rules.confirm
    validations.push(password === value)
  }

  return validations.every((v) => v === true)
}

const useInput = (rules) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const isValid = validation(value, rules)
  const isError = !isValid && isTouched

  const handleValueChange = (e) => {
    setValue(rules.textarea ? e.target.innerHTML : e.target.value)
  }
  const handleBlur = () => setIsTouched(true)

  return {
    value,
    setValue,
    isValid,
    onBlur: handleBlur,
    isError
  }
}

export default useInput
