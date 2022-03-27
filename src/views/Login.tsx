import { FormikValues, useFormik } from 'formik'
import { Button, Card, Col, Row } from 'react-bootstrap'
import FormEmail from '../components/Forms/FormEmail'
import { FormPassword } from '../components/Forms/FormPassword'

interface Props {
  email: string
  password: string
}

const Login = ({ email, password }: Props) => {
  const { handleChange, values, handleSubmit } = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values: FormikValues) => {
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
                <Col md={12} className="mb-3">
                  <FormPassword value={values.password} />
                </Col>
                <Col md={12} className="d-flex justify-content-end">
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
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
