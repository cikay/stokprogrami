import React, { useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CenteredContainer from '../shared/components/CenteredContainer'

const initialState = {
  email: '',
  fullname: '',
  password: '',
  passwordConfirm: '',
}
export default function Signup() {
  const [formData, setFormData] = useState(initialState)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }
  const [result, setResult] = useState({
    isError: '',
    isSuccess: '',
    message: '',
  })

  const handleSubmit = async () => {
    const payload = {
      email: formData.email,
      fullname: formData.fullname,
      password: formData.password,
    }
    try {
      // setResult((prevState) => ({ ...prevState, isSuccess: true }))
    } catch (err) {
      console.log(err)
      //   throw new Error('Something went wrong when signup')
    }
  }

  const { password, passwordConfirm } = formData

  return (
    <CenteredContainer>
      <Card className='w-100' style={{ maxWidth: '430px' }}>
        <Card.Body>
          {result.isSuccess ? (
            <Alert variant='success'>{'Kayıt başarıyla gerçekleşti'}</Alert>
          ) : (
            <>
              <h2 className='text-center mb-4'>Kayıt ol</h2>
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
                <Form.Group id='fullname'>
                  <Form.Label>Ad Soyad</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    id='fullname'
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
                <Form.Group id='password'>
                  <Form.Label>Şifre onayı</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    id='passwordConfirm'
                    onChange={handleChange}
                  />
                </Form.Group>
                {passwordConfirm && passwordConfirm !== password && (
                  <Form.Text className='text-danger'>
                    Şifreler eşleşmiyor
                  </Form.Text>
                )}
                <Button className='w-100' type='submit'>
                  Kayıt ol
                </Button>
              </Form>
            </>
          )}
        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
