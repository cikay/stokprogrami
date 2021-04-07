import React from 'react'
import { RiProductHuntLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function Categories({}: Props) {
  const history = useHistory()
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: '#F39C12',
        }}
        name='Ürünler'
        count={7}
        Icon={RiProductHuntLine}
        onClick={() => history.push('/products')}
      />
    </>
  )
}
