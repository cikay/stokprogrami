import { useState } from 'react'
import CustomizedTable from '../shared/components/CustomizedTable'
import ModalType from '../shared/types/ModalType'
import { useCategoryContext } from '../shared/contexts/CategoryContext'
import FormModal from '../shared/components/FormModal'
import { Category } from '../shared/contexts/CategoryContext/reducer'
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
  const [selectedModel, setSelectedModel] = useState<Category | undefined>()
  const {
    categories,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useCategoryContext()

  const formModalElement = (
    <FormModal
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      inputs={categoryColumns[0].columns}
      createModel={createCategory}
      updateModel={updateCategory}
      deleteModel={deleteCategory}
      closeModal={() => setShow(false)}
      selectedModel={selectedModel}
      setSelectedModel={setSelectedModel}
    />
  )

  return (
    <CustomizedTable
      data={categories}
      columns={categoryColumns}
      setAction={setAction}
      setShow={setShow}
      formModal={formModalElement}
      setSelectedModel={setSelectedModel}
    />
  )
}
export default Categories
