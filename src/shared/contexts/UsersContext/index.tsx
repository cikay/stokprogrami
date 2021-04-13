import React, { useReducer, useContext } from 'react'
import makeProduct from '../../help/makeData'
import userActionTypes from './actionTypes'
import reducer from './reducer'

type Props = React.PropsWithChildren<{}>
export type User = {
  id: number
  firstname: string
  lastname: string
}

const users: User[] = makeProduct(Math.random() * 30, {
  firstname: '',
  lastname: '',
  id: -100,
})
console.log('products')
console.table(users)
const initialState = {
  users,
  createUser: (user: User) => {},
  updateUser: (user: User) => {},
  deleteUser: (user: User) => {},
}

const UserContext = React.createContext(initialState)
const useUserContext = () => useContext(UserContext)
function UserProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const createUser = (user: User) => {
    console.log('user created')
    dispatch({ type: userActionTypes.Create, payload: user })
  }
  const updateUser = (user: User) => {
    dispatch({ type: userActionTypes.Update, payload: user })
  }
  const deleteUser = (user: User) => {
    dispatch({ type: userActionTypes.Delete, payload: user })
  }
  const value = {
    ...state,
    createUser,
    updateUser,
    deleteUser,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserProvider, useUserContext }
