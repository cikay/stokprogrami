import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CustomizedSidebar from './SideBar'
type Props = React.PropsWithChildren<{}>

export default function Layout({ children }: Props) {
  return (
    <Row>
      <Col xs={12} sm={3}>
        <CustomizedSidebar />
      </Col>
      <Col xs={12} sm={9} style={{ height: '100vh' }}>
        {children}
      </Col>
    </Row>
  )
}
