import React, { useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import ModalComponent from '../components/Modal/ModalComponent'
import useGetDataApi from '../hooks/UseGetDataApi'

const Users = () => {
  const { users } = useGetDataApi()
  const [openModal, setOpenModal] = useState(true)
  const handleSubmit = (e: any, id: number) => {
    e.preventDefault()
    ModalComponent(id)
    console.log(id)
  }

  return (
    <Row>
      <Col md={12}>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Web Site</th>
              <th className="text-center">Business Data</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users
              ? users.map((u) => (
                  <tr key={u.id}>
                    <td className="text-center">{u.name}</td>
                    <td className="text-center">{u.website}</td>
                    <td className="text-center">{u.company?.name}</td>
                    <td className="text-center">
                      <Button
                        variant="success"
                        onClick={(e) => handleSubmit(e, u.id)}
                        className="fw-bold"
                      >
                        Ver Posteos
                      </Button>
                    </td>
                    <td className="text-center">
                      <Button
                        variant="info"
                        onClick={(e) => handleSubmit(e, u.id)}
                        className="fw-bold"
                      >
                        Ver Albumes
                      </Button>
                    </td>
                    <td className="text-center">
                      <Button
                        variant="warning"
                        onClick={(e) => {
                          handleSubmit(e, u.id), ModalComponent(openModal)
                        }}
                        className="fw-bold"
                      >
                        Ver los TodOs
                      </Button>
                    </td>
                  </tr>
                ))
              : 'No estan llegando los usuarios'}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default Users
