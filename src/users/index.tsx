import { useState } from 'react'
import CustomizedTable from '../shared/components/CustomizedTable'
import ModalType from '../shared/types/ModalType'
import { User, useUserContext } from '../shared/contexts/UsersContext'
import FormModal from '../shared/components/FormModal'
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
  const [selectedModel, setSelectedModel] = useState({} as User)

  const formModalElement = (
    <FormModal
      action={action}
      setAction={setAction}
      show={show}
      setShow={setShow}
      inputs={userColumns[0].columns}
      createModel={createUser}
      updateModel={updateUser}
      deleteModel={deleteUser}
      closeModal={() => setShow(false)}
      selectedModel={selectedModel}
    />
  )

  return (
    <CustomizedTable
      data={users}
      columns={userColumns}
      setAction={setAction}
      setShow={setShow}
      formModal={formModalElement}
      setSelectedModel={setSelectedModel}
    />
  )
}
export default Users
