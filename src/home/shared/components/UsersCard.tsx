import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{ count: number }>

export default function UsersCard({ count }: Props) {
  const history = useHistory()
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: 'red',
        }}
        name='Kullanıcılar'
        count={count}
        Icon={FaUsers}
        onClick={() => history.push('/users')}
      />
    </>
  )
}
