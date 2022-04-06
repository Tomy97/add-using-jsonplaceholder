import { FormikHelpers, FormikValues, useField, useFormik } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'
import * as yup from 'yup'
import propTypes from 'prop-types'

interface Props {
  password: string
  label: string
}

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})

export const FormPassword = ({ password, label }: Props) => {
  const { handleChange, values } = useFormik({
    initialValues: {
      password
    },
    validationSchema,
    onSubmit: (values: { password: string }) => {
      console.log(password);
    }
  })

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="password"
        name={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
    </Form.Group>
  )
}

FormPassword.propTypes = {
  password: propTypes.string.isRequired,
  label: propTypes.string.isRequired
}
