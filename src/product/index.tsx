import React, { useState, useMemo } from 'react'
import FlexibleTable from '../shared/components/FlexibleTable'
import { useProductContext, ProductProvider } from './contexts/ProductContext'
import withProvider from '../shared/hoc/withProvider'

type Props = React.PropsWithChildren<{}>

function Products({}: Props) {
  const [action, setAction] = useState<'add' | 'update' | 'delete' | ''>('')
  const [show, setShow] = useState(false)
  const {
    createProduct,
    updateProduct,
    deleteProduct,
    products,
  } = useProductContext()
  console.log('products', products)
  const columns = useMemo(() => {
    return [
      {
        Header: 'Ürünler',
        columns: [
          { Header: 'Ad', accessor: 'name' },
          { Header: 'Açıklama', accessor: 'description' },
          { Header: 'Depo', accessor: 'storage' },
          { Header: 'Kategori', accessor: 'category' },
        ],
      },
    ]
  }, [])
  const data = useMemo(() => products, [products])
  return (
    <FlexibleTable
      show={show}
      setShow={setShow}
      action={action}
      setAction={setAction}
      columns={columns}
      data={data}
      createModel={createProduct}
      updateModel={updateProduct}
      deleteModel={deleteProduct}
    />
  )
}
export default withProvider(Products, ProductProvider)
