import React, { useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import { useAuthContext } from '../shared/contexts/AuthContext/AutContext'
import CenteredContainer from '../shared/components/CenteredContainer'
type Props = React.PropsWithChildren<{ onSubmitUser: React.Dispatch<any> }>
export default function Login({ onSubmitUser }: Props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()

  const [error, setError] = useState({
    isError: null,
    message: '',
  })
  const { login } = useAuthContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = formData
    console.log('formData', formData)

    try {
      const payload = {
        email,
        password,
      }

      const res = await login(payload)
      onSubmitUser(payload.email)
      console.log('redirected to home')

      history.push('/')
    } catch (err) {
      console.log('err', err)
      // setError((prevState) => ({ ...prevState, isError: true, message: err }))
    }
  }

  return (
    <CenteredContainer>
      <Card className='w-100' style={{ maxWidth: '430px' }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Giriş yap</h2>
          {error.isError && <Alert variant='danger'>{error.message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type='email'
                id='email'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                required
                type='password'
                id='password'
                onChange={handleChange}
              />
            </Form.Group>
            <Button className='w-100' type='submit'>
              Giriş yap
            </Button>
          </Form>
          <div className='w-100 text-center mt-2'>
            Şifrenizi mi unuttunuz? <Link to='/reset-password'>Sıfırla</Link>
          </div>
        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
