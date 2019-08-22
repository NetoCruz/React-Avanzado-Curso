import React, { Fragment, useState } from 'react'
import { Title, Button, Form, Input, Error } from './styles'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <Fragment>

      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <Button disabled={disabled}>{title}</Button>

      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
