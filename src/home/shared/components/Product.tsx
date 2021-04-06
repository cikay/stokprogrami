import React from 'react'
import { RiProductHuntLine } from 'react-icons/ri'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function Categories({}: Props) {
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: '#F39C12',
        }}
        name='Ürünler'
        count={7}
      >
        <RiProductHuntLine style={{ height: '40%', width: '40%' }} />
      </CustomizedCard>
    </>
  )
}
