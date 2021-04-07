import React, { useState, useMemo } from 'react'
import FlexibleTable from '../shared/components/FlexibleTable'
import {
  useCategoryContext,
  CategoryProvider,
} from './contexts/CategoryContext'
import withProvider from '../shared/hoc/withProvider'

type Props = React.PropsWithChildren<{}>

function Categories({}: Props) {
  const [action, setAction] = useState<'add' | 'update' | 'delete' | ''>('')
  const [show, setShow] = useState(false)
  const {
    addCategory,
    categories,
    deleteCategory,
    updateCategory,
  } = useCategoryContext()
  console.log('categories component')
  const columns = useMemo(() => {
    return [
      {
        Header: 'Kategoriler',
        columns: [
          { Header: 'Ad', accessor: 'name' },
          { Header: 'Açıklama', accessor: 'description' },
          { Header: 'Depo', accessor: 'storage' },
        ],
      },
    ]
  }, [])
  const data = useMemo(() => categories, [categories])
  return (
    <FlexibleTable
      show={show}
      setShow={setShow}
      action={action}
      setAction={setAction}
      columns={columns}
      data={data}
      createModel={addCategory}
      updateModel={updateCategory}
      deleteModel={deleteCategory}
    />
  )
}
export default withProvider(Categories, CategoryProvider)
