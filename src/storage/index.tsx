import { useStorageContext } from '../shared/contexts/StorageContext'
import CustomizedTable from '../shared/components/CustomizedTable'

import ModalType from '../shared/types/ModalType'
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
  return (
    <CustomizedTable
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      columns={storageColumns}
      data={storages}
      createModel={createStorage}
      updateModel={deleteStorage}
      deleteModel={updateStorage}
    />
  )
}
export default Storages
