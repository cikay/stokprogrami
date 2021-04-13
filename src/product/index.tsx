import React, { useState, useMemo } from 'react'
import { useProductContext } from '../shared/contexts/ProductContext'
import CustomizedTable from '../shared/components/CustomizedTable'

import ModalType from '../shared/types/ModalType'
const productColumns = [
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
function Products({ action, setAction, show, setShow }: ModalType) {
  const {
    products,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useProductContext()

  return (
    <CustomizedTable
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      columns={productColumns}
      data={products}
      createModel={createProduct}
      updateModel={updateProduct}
      deleteModel={deleteProduct}
    />
  )
}
export default Products
