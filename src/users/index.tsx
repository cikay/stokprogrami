import React, { useState, useMemo } from 'react'
import FlexibleTable from '../shared/components/FlexibleTable'
import { useUserContext } from '../shared/contexts/UsersContext'
import ColumnFilter from '../shared/components/ColumnFilter'
type Props = React.PropsWithChildren<{}>

function Users({}: Props) {
  const [action, setAction] = useState<'add' | 'update' | 'delete' | ''>('')
  const [show, setShow] = useState(false)
  const { createUser, updateUser, deleteUser, users } = useUserContext()
  console.log('users', users)
  const columns = useMemo(() => {
    return [
      {
        Header: 'Kullanıcılar',
        columns: [
          { Header: 'Ad', accessor: 'firstname' },
          { Header: 'Soyad', accessor: 'lastname' },
        ],
      },
    ]
  }, [])
  const data = useMemo(() => users, [users])
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    }
  }, [])
  return (
    <FlexibleTable
      show={show}
      setShow={setShow}
      action={action}
      setAction={setAction}
      columns={columns}
      data={data}
      createModel={createUser}
      updateModel={updateUser}
      deleteModel={deleteUser}
      defaultColumn={defaultColumn}
    />
  )
}
export default Users
