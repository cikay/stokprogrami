import React from 'react'
import { useAuthContext } from '../contexts/AuthContext/AutContext'
import Login from '../../auth/Login'
type Props = React.PropsWithChildren<{
  onSubmitUser: React.Dispatch<any>
}>
export default function PrivateComponent({ children, onSubmitUser }: Props) {
  console.log('children', children)
  const { isAuthenticated } = useAuthContext()
  return (
    <>{isAuthenticated ? children : <Login onSubmitUser={onSubmitUser} />}</>
  )
}
