import React from 'react'
import { GrStorage } from 'react-icons/gr'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function Storage({}: Props) {
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: '#149077',
        }}
        name='Depolar'
        count={7}
      >
        <GrStorage
          style={{ height: '40%', width: '40%' }}
          color='white'
          colorProfile='white'
        />
      </CustomizedCard>
    </>
  )
}
