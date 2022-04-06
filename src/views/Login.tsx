import { FormikValues, useFormik } from 'formik'
import { Card, Col, Row } from 'react-bootstrap'
import FormEmail from '../components/Forms/FormEmail'
import { FormPassword } from '../components/Forms/FormPassword'
import { BtnSubmit } from '../components/Buttons/BtnSubmit'
import { Link } from 'react-router-dom'
import { UseLoading } from '../hooks/UseLoading'
import { useState } from 'react'

interface Props {
  email: string
  password: string
}

const Login = ({ email, password }: Props) => {
  const [loading, setLoading] = useState(false)
  const { handleChange, values, handleSubmit } = useFormik<FormikValues>({
    initialValues: {
      email: email,
      password: ''
    },
    onSubmit: async (values: FormikValues) => {
      await setLoading(true)
      console.log(values.email)
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
                <Col md={12}>
                  <FormPassword value={values.password} label="Password" />
                </Col>
                {values.password}
                <Col md={12} className="mb-3 d-flex justify-content-center">
                  <Link to="register" className="text-decoration-none">
                    Registrarme
                  </Link>
                </Col>
                {loading ? (
                  <Col md={12} className="mb-3 d-flex justify-content-center">
                    <UseLoading />
                  </Col>
                ) : null}
                <Col md={12} className="d-flex justify-content-end">
                  <BtnSubmit />
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
