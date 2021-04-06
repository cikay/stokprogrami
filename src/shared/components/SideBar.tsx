import React from 'react'
// import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { useAuthContext } from '../contexts/AuthContext/AutContext'

export default function CustomizedSidebar() {
  const { isAuthenticated } = useAuthContext()
  return <></>
}
