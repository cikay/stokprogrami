import React from 'react'
import { GrStorage } from 'react-icons/gr'
import { useHistory } from 'react-router-dom'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function Storage({}: Props) {
  const history = useHistory()
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: '#149077',
        }}
        name='Depolar'
        count={7}
        Icon={GrStorage}
        onClick={() => history.push('/storage')}
      />
    </>
  )
}
