import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{ count: number }>

export default function Categories({ count }: Props) {
  const history = useHistory()
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: '#F39C12',
        }}
        name='Ürünler'
        count={count}
        Icon={FaCartPlus}
        onClick={() => history.push('/products')}
      />
    </>
  )
}
