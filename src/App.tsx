import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './shared/contexts/AuthContext/AutContext'
import Login from './auth/Login'
import Signup from './auth/Signup'
import ResetPassword from './auth/ResetPassword'
import ResetPasswordConfirm from './auth/ResetPasswordConfirm'
import useLocalStorage from './shared/hooks/useLocalStorage'
import Home from './home'
import PrivateComponent from './shared/components/PrivateComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser')
  console.log("currentUser", currentUser)
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login onSubmitUser={setCurrentUser} />
          </Route>
          <Route exact path='/'>
            <PrivateComponent onSubmitUser={setCurrentUser}>
              <Home />
            </PrivateComponent>
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/reset-password'>
            <ResetPassword />
          </Route>
          <Route path='/reset-password-confirm'>
            <ResetPasswordConfirm />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
