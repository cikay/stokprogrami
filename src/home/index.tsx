import React from 'react'
import Users from './shared/components/UsersCard'
import Storage from './shared/components/StorageCard'
import Categories from './shared/components/CategoryCard'
import Product from './shared/components/ProductCard'
import { useCategoryContext } from '../shared/contexts/CategoryContext'
import { useProductContext } from '../shared/contexts/ProductContext'
import { useUserContext } from '../shared/contexts/UsersContext'
import { useStorageContext } from '../shared/contexts/StorageContext'

export default function Home() {
  const { categories } = useCategoryContext()
  const { products } = useProductContext()
  const { users } = useUserContext()
  const { storages } = useStorageContext()
  return (
    <>
      <div className='mt-5'>
        <Users count={users.length} />
        <Storage count={storages.length} />
        <Categories count={categories.length} />{' '}
        <Product count={products.length} />
      </div>
    </>
  )
}
