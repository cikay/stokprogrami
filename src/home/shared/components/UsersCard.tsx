import React from 'react'
import { FaUsers } from 'react-icons/fa'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function UsersCard({}: Props) {
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: 'red',
        }}
        name='Kullanıcılar'
        count={7}
      >
        <FaUsers
          // className='mt-1 ml-1'
          style={{ height: '40%', width: '40%' }}
        />
      </CustomizedCard>
    </>
  )
}
