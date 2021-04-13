import React from 'react'
import CustomizedTable from '../shared/components/CustomizedTable'
import ModalType from '../shared/types/ModalType'
import { useCategoryContext } from '../shared/contexts/CategoryContext'
const categoryColumns = [
  {
    Header: 'Kategoriler',
    columns: [
      { Header: 'Ad', accessor: 'name' },
      { Header: 'Açıklama', accessor: 'description' },
      { Header: 'Depo', accessor: 'storage' },
    ],
  },
]

function Categories({ action, setAction, show, setShow }: ModalType) {
  const {
    categories,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useCategoryContext()

  return (
    <CustomizedTable
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      columns={categoryColumns}
      data={categories}
      createModel={createCategory}
      updateModel={updateCategory}
      deleteModel={deleteCategory}
    />
  )
}
export default Categories
