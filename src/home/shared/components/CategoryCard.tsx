import React from 'react'
import { BsFillPentagonFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import CustomizedCard from '../../../shared/components/CustomizedCard'
type Props = React.PropsWithChildren<{}>

export default function Categories({}: Props) {
  const history = useHistory()
  return (
    <>
      <CustomizedCard
        style={{
          backgroundColor: '#2980B9',
        }}
        name='Kategoriler'
        count={7}
        Icon={BsFillPentagonFill}
        onClick={() => history.push('/categories')}
      />
    </>
  )
}
