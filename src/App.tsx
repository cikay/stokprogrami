import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './shared/contexts/AuthContext/AutContext'
import { Row, Col } from 'react-bootstrap'
import Login from './auth/Login'
import Signup from './auth/Signup'
import ResetPassword from './auth/ResetPassword'
import ResetPasswordConfirm from './auth/ResetPasswordConfirm'
import useLocalStorage from './shared/hooks/useLocalStorage'
import Home from './home'

import PrivateComponent from './shared/components/PrivateComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import Categories from './category'
import Products from './product'
import Users from './users'
import Storages from './storage'
import CustomizedSidebar from './shared/components/SideBar'
import { ProductProvider } from './shared/contexts/ProductContext'
import { CategoryProvider } from './shared/contexts/CategoryContext'

function App() {
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser')
  console.log('currentUser', currentUser)

  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <Router>
            <Row>
              <Col sm={12} md={3}>
                <PrivateComponent
                  Component={<CustomizedSidebar />}
                  onSubmitUser={setCurrentUser}
                />
              </Col>
              <Col sm={12} md={9}>
                <Switch>
                  <Route path='/login'>
                    <Login onSubmitUser={setCurrentUser} />
                  </Route>
                  <Route exact path='/'>
                    <PrivateComponent
                      Component={<Home />}
                      onSubmitUser={setCurrentUser}
                    />
                  </Route>
                  <Route path='/signup'>
                    <Signup />
                  </Route>
                  <Route path='/reset-password'>
                    <ResetPassword />
                  </Route>
                  <Route path='/reset-password-confirm'>
                    <ResetPasswordConfirm />
                  </Route>{' '}
                  <Route path='/categories'>
                    <Categories />
                  </Route>{' '}
                  <Route path='/products'>
                    <Products />
                  </Route>
                  <Route path='/users'>
                    <Users />
                  </Route>
                  <Route path='/storages'>
                    <Storages />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Router>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
