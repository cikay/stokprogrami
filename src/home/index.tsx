import React from 'react'
import { useAuthContext } from '../shared/contexts/AuthContext/AutContext'
import { Row, Col } from 'react-bootstrap'
import Users from './shared/components/UsersCard'
import Storage from './shared/components/StorageCard'
import Categories from './shared/components/CategoryCard'
import Product from './shared/components/ProductCard'

type Props = React.PropsWithChildren<{}>

export default function Home({}: Props) {
  return (
    <>
      <Row>
        <Col sm={12} md={2}></Col>
        <Col sm={12} md={8}>
          <div className='mt-5'>
            <Users /> <Storage /> <Categories /> <Product />
          </div>
        </Col>
        <Col sm={12} md={8}></Col>
      </Row>
    </>
  )
}
