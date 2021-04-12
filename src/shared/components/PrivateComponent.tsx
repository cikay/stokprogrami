import React from 'react'
import { useAuthContext } from '../contexts/AuthContext/AutContext'
import Login from '../../auth/Login'
type Props = React.PropsWithChildren<{
  onSubmitUser: React.Dispatch<any>
  Component: JSX.Element
}>
export default function PrivateComponent({ Component, onSubmitUser }: Props) {
  console.log('Component', Component)
  const { isAuthenticated } = useAuthContext()
  return (
    <>{isAuthenticated ? Component : <Login onSubmitUser={onSubmitUser} />}</>
  )
}
