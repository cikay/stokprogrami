import React, { useState, useMemo } from 'react'
import CustomizedTable from '../shared/components/CustomizedTable'
import ModalType from '../shared/types/ModalType'
import { useUserContext } from '../shared/contexts/UsersContext'
const userColumns = [
  {
    Header: 'Kullanıcılar',
    columns: [
      { Header: 'Ad', accessor: 'firstname' },
      { Header: 'Soyad', accessor: 'lastname' },
    ],
  },
]

function Users({ action, setAction, show, setShow }: ModalType) {
  const { users, createUser, updateUser, deleteUser } = useUserContext()

  return (
    <CustomizedTable
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      columns={userColumns}
      data={users}
      createModel={createUser}
      updateModel={updateUser}
      deleteModel={deleteUser}
    />
  )
}
export default Users
