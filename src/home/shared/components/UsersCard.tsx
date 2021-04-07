import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function UsersCard({}: Props) {
  const history = useHistory()
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: 'red',
        }}
        name='Kullanıcılar'
        count={7}
        Icon={FaUsers}
        onClick={() => history.push('/users')}
      />
    </>
  )
}
