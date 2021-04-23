import { useState } from 'react'
import { Product, useProductContext } from '../shared/contexts/ProductContext'
import CustomizedTable from '../shared/components/CustomizedTable'

import ModalType from '../shared/types/ModalType'
import FormModal from '../shared/components/FormModal'
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
  console.log('product rendered')
  const [selectedModel, setSelectedModel] = useState<Product | undefined>()

  const formModalElement = (
    <FormModal
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      inputs={productColumns[0].columns}
      createModel={createProduct}
      updateModel={updateProduct}
      deleteModel={deleteProduct}
      closeModal={() => setShow(false)}
      selectedModel={selectedModel}
    />
  )

  return (
    <CustomizedTable
      data={products}
      columns={productColumns}
      setAction={setAction}
      setShow={setShow}
      formModal={formModalElement}
      setSelectedModel={setSelectedModel}
    />
  )
}
export default Products
