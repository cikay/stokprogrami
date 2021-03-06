import React, { useState } from 'react'

// THIRD PARTY IMPORTS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

//PROJECT COMPONENTS IMPORTS
import { AuthProvider } from './shared/contexts/AuthContext/AutContext'
import Login from './auth/Login'
import Signup from './auth/Signup'
import ResetPassword from './auth/ResetPassword'
import ResetPasswordConfirm from './auth/ResetPasswordConfirm'
import useLocalStorage from './shared/hooks/useLocalStorage'
import Home from './home'
import Categories from './category'
import Products from './product'
import Users from './users'
import Storages from './storage'
import PrivateComponent from './shared/components/PrivateComponent'
import CustomizedSidebar from './shared/components/SideBar'
import { ProductProvider } from './shared/contexts/ProductContext'
import { CategoryProvider } from './shared/contexts/CategoryContext'
import { StorageProvider } from './shared/contexts/StorageContext'
import { UserProvider } from './shared/contexts/UsersContext'
import Layout from './shared/components/Layout'

// PAGES
function Pages() {
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser')
  console.log('currentUser', currentUser)
  const [action, setAction] = useState<'create' | 'update' | 'delete' | ''>('')
  const [show, setShow] = useState(false)

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login onSubmitUser={setCurrentUser} />
        </Route>
        <Route exact path='/'>
          <Layout>
            <Home />
          </Layout>
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
          <Layout>
            <Categories
              action={action}
              setAction={setAction}
              show={show}
              setShow={setShow}
            />
          </Layout>
        </Route>{' '}
        <Route path='/products'>
          <Layout>
            <Products
              action={action}
              setAction={setAction}
              show={show}
              setShow={setShow}
            />
          </Layout>
        </Route>
        <Route path='/users'>
          <Layout>
            <Users
              action={action}
              setAction={setAction}
              show={show}
              setShow={setShow}
            />
          </Layout>
        </Route>
        <Route path='/storages'>
          <Layout>
            <Storages
              action={action}
              setAction={setAction}
              show={show}
              setShow={setShow}
            />
          </Layout>
        </Route>
      </Switch>
    </Router>
  )
}

// APP
function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <StorageProvider>
            <UserProvider>
              <Pages />
            </UserProvider>
          </StorageProvider>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}
export default App
