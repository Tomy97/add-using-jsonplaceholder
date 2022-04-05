import { useField, useFormik } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'
import * as yup from 'yup'
import propTypes from 'prop-types'

interface Props {
  password: string
}

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})

export const FormPassword = ({ password }: Props) => {
  const { handleChange, values } = useFormik({
    initialValues: {
      password
    },
    validationSchema,
    onSubmit: (values: any) => {
      console.log(values.password)
    }    
  })

  return (
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name={'password'}
        onChange={handleChange}
        placeholder="Enter password"
      />
    </Form.Group>
  )
}

FormPassword.propTypes = {
  password: propTypes.string.isRequired,
}
