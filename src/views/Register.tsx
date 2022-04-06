import { FormikValues, useFormik } from 'formik'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BtnSubmit } from '../components/Buttons/BtnSubmit'
import FormEmail from '../components/Forms/FormEmail'
import { FormPassword } from '../components/Forms/FormPassword'

export const Register = () => {
  const { handleChange, values, handleSubmit } = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values: FormikValues) => {
      console.log(values.email, values.password)
    }
  })
  return (
    <Row>
      <Col
        className="d-flex justify-content-center align-content-center "
        md={12}
      >
        <Card style={{ width: '30rem', height: '20rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Register Form</Card.Title>
            <Card.Text>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <FormEmail />
                  </Col>
                  <Col md={12}>
                    <FormPassword password={values.password} label="Password" />
                  </Col>
                </Row>
              </form>
            </Card.Text>
            <BtnSubmit />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
