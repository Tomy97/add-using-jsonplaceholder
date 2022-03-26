import { FormikValues, useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import FormEmail from '../components/Forms/FormEmail'
import { FormPassword } from '../components/Forms/FormPassword'

const Login = () => {
  const { handleChange, values, handleSubmit } = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <Row>
      <Col
        className="d-flex justify-content-center align-content-center "
        md={12}
      >
        <Card style={{ width: '25rem' }}>
          <Card.Title className="text-center">Login Form</Card.Title>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={12}>
                  <FormEmail />
                </Col>
                <Col md={12} className="mb-3">
                  <FormPassword password={values.password} />
                </Col>
                <Col md={12} className="d-flex justify-content-end">
                  <Button variant="primary">Submit</Button>
                </Col>
              </Row>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
