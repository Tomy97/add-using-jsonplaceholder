import React from 'react'
import { Form } from 'react-bootstrap'

const FormEmail = () => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  )
}

export default FormEmail
