import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthContext } from '../contexts/AuthContext/AutContext'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function CustomizedNavbar() {
  const { isAuthenticated } = useAuthContext()
  return <>{isAuthenticated ? <AuthNavBar /> : <NotAuthNavbar />} </>
}

function AuthNavBar() {
  const history = useHistory()
  const { logout } = useAuthContext()

  const handleProfile = () => {
    history.push('/profile')
  }
  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <Navbar bg='light'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <NavDropdown
          title='Hesabım'
          id='basic-nav-dropdown'
          className='ml-auto'
          style={{ right: '0 !important', left: 'auto !important' }}
        >
          <NavDropdown.Item onClick={handleProfile}>Profil</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Çıkış Yap</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </>
  )
}

function NotAuthNavbar() {
  const history = useHistory()
  const handleLogin = () => {
    history.push('/login')
  }
  const handleRegister = () => {
    history.push('/signup')
  }
  return (
    <Navbar bg='light'>
      <div className='ml-auto'>
        <Button variant='Primary' onClick={handleLogin}>
          Giriş Yap
        </Button>
        <Button variant='Primary' onClick={handleRegister}>
          Kayıt ol
        </Button>
      </div>
    </Navbar>
  )
}
