import { useField, useFormik } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'
import * as yup from 'yup'

interface Props {
  password: string
}

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})

export const FormPassword = ({ password, ...props }: Props) => {
  const formik = useFormik({
    initialValues: {
      password
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Enter password"
        name={formik.values.password}
      />
    </Form.Group>
  )
}
