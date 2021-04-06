import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import authReducer, { User } from './reducer'
import authActionTypes from './actionTypes'
const API_URL = 'http://localhost:3010'
type Props = React.PropsWithChildren<{}>

function getUser() {
  const PREFIXkey = 'stokprogrami-currentUser'
  let currentUserJson = localStorage.getItem(PREFIXkey)
  if (currentUserJson == "undefined" || currentUserJson == null) {
    return undefined
  }
  console.log("in getUser", currentUserJson)
  return JSON.parse(currentUserJson)
}
const currentUser = getUser()
console.log('currentUser', currentUser)
console.log(null === currentUser)
type LoginPayload = {
  email: string
  password: string
}

const initialState = {
  isAuthenticated: currentUser ? true : false,
  currentUser,
  login: (payload: LoginPayload) => {},
  logout: () => {},
}

const AuthContext = React.createContext(initialState)
export const useAuthContext = () => useContext(AuthContext)
export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (payload: LoginPayload) => {
    console.log('login', payload)
    dispatch({ type: authActionTypes.LOGIN, payload: { email: payload.email } })
  }

  const logout = () => {
    dispatch({ type: authActionTypes.LOGOUT })
  }

  const value = {
    ...state,
    login,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
