import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import CenteredContainer from '../shared/components/CenteredContainer'
import { ResultType } from './ResetPassword'
const initialState = {
  password: '',
  passwordConfirm: '',
}
export default function ResetPasswordConfirm() {
  const [formData, setFormData] = useState(initialState)
  const [result, setResult] = useState<ResultType>({
    isError: null,
    isSuccess: null,
    message: '',
  })
  const history = useHistory()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      setResult({ ...result, isSuccess: true })
    } catch (err) {
      console.log(err)
    }
  }

  const { password, passwordConfirm } = formData
  return (
    <CenteredContainer>
      <Card className='w-100' style={{ maxWidth: '430px' }}>
        <Card.Body>
          {result.isSuccess ? (
            <>
              <Alert variant='success'>Şifre başarıyla oluşturuldu</Alert>
              <div>
                <Button onClick={() => history.push('/login')}>
                  Giriş yap
                </Button>
              </div>
            </>
          ) : (
            <div>
              <h2 className='text-center mb-4'>Şifre sıfırlama</h2>
              <Form onSubmit={handleSubmit}>
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
                  Oluştur
                </Button>
              </Form>
            </div>
          )}
        </Card.Body>
      </Card>
    </CenteredContainer>
  )
}
