import React, { useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import CenteredContainer from '../shared/components/CenteredContainer'
import { useHistory } from 'react-router-dom'
const initialState = {
  email: '',
}

export type ResultType = {
  isError: boolean | null
  isSuccess: boolean | null
  message: string
}
export default function ResetPassword() {
  const [formData, setFormData] = useState(initialState)
  const history = useHistory()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }
  const [result, setResult] = useState<ResultType>({
    isError: null,
    isSuccess: null,
    message: '',
  })

  const handleSubmit = async () => {
    try {
      setResult({ ...result, isSuccess: true })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CenteredContainer>
      <Card className='w-100' style={{ maxWidth: '430px' }}>
        <Card.Body>
          {result.isSuccess ? (
            <>
              <Alert variant='success'>
                {'Aşağıdaki butona tıklayarak yeni şifre oluşturun'}
              </Alert>
              <div>
                <Button onClick={() => history.push('/reset-password-confirm')}>
                  Sıfırla
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className='text-center mb-4'>Şifre Sıfırla</h2>
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
                <Button className='w-100' type='submit'>
                  Sıfırla
                </Button>
              </Form>
            </>
          )}
        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
