import React from 'react'
import { BsFillPentagonFill } from 'react-icons/bs'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function Categories({}: Props) {
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: '#2980B9',
        }}
        name='Kategoriler'
        count={7}
      >
        <BsFillPentagonFill style={{ height: '40%', width: '40%' }} />
      </CustomizedCard>
    </>
  )
}
