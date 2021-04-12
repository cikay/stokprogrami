import React from 'react'
import Users from './shared/components/UsersCard'
import Storage from './shared/components/StorageCard'
import Categories from './shared/components/CategoryCard'
import Product from './shared/components/ProductCard'
import { useAuthContext } from '../shared/contexts/AuthContext/AutContext'
import { useCategoryContext } from '../shared/contexts/CategoryContext'
import { useProductContext } from '../shared/contexts/ProductContext'

type Props = React.PropsWithChildren<{}>

export default function Home({}: Props) {
  const { categories } = useCategoryContext()
  const { products } = useProductContext()
  return (
    <>
      <div className='mt-5'>
        <Users count={0} /> <Storage count={0} />{' '}
        <Categories count={categories.length} />{' '}
        <Product count={products.length} />
      </div>
    </>
  )
}
