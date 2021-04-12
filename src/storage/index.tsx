import React, { useState, useMemo } from 'react'
import FlexibleTable from '../shared/components/FlexibleTable'
import { useStorageContext } from '../shared/contexts/StorageContext'
import ColumnFilter from '../shared/components/ColumnFilter'

type Props = React.PropsWithChildren<{}>

function Storages({}: Props) {
  const [action, setAction] = useState<'add' | 'update' | 'delete' | ''>('')
  const [show, setShow] = useState(false)
  const {
    storages,
    createStorage,
    deleteStorage,
    updateStorage,
  } = useStorageContext()
  console.log('categories component')
  const columns = useMemo(() => {
    return [
      {
        Header: 'Depolar',
        columns: [
          { Header: 'Depo Adı', accessor: 'name' },
          { Header: 'Adres', accessor: 'adress' },
          { Header: 'Açıklama', accessor: 'description' },
        ],
      },
    ]
  }, [])
  const data = useMemo(() => storages, [storages])
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  )
  return (
    <FlexibleTable
      show={show}
      setShow={setShow}
      action={action}
      setAction={setAction}
      columns={columns}
      data={data}
      createModel={createStorage}
      updateModel={updateStorage}
      deleteModel={deleteStorage}
      defaultColumn={defaultColumn}
    />
  )
}
export default Storages
