import { useState } from 'react'
import { Storage, useStorageContext } from '../shared/contexts/StorageContext'
import CustomizedTable from '../shared/components/CustomizedTable'
import ModalType from '../shared/types/ModalType'
import FormModal from '../shared/components/FormModal'

const storageColumns = [
  {
    Header: 'Depolar',
    columns: [
      { Header: 'Depo Adı', accessor: 'name' },
      { Header: 'Adres', accessor: 'adress' },
      { Header: 'Açıklama', accessor: 'description' },
    ],
  },
]
function Storages({ action, setAction, show, setShow }: ModalType) {
  const {
    storages,
    createStorage,
    deleteStorage,
    updateStorage,
  } = useStorageContext()
  const [selectedModel, setSelectedModel] = useState({} as Storage)

  const formModalElement = (
    <FormModal
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      inputs={storageColumns[0].columns}
      createModel={createStorage}
      updateModel={updateStorage}
      deleteModel={deleteStorage}
      closeModal={() => setShow(false)}
      selectedModel={selectedModel}
    />
  )
  return (
    <CustomizedTable
      data={storages}
      columns={storageColumns}
      setAction={setAction}
      setShow={setShow}
      formModal={formModalElement}
      setSelectedModel={setSelectedModel}
    />
  )
}
export default Storages
