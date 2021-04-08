import React, { useState, useMemo } from 'react'
import FlexibleTable from '../shared/components/FlexibleTable'
import {
  useCategoryContext,
  CategoryProvider,
} from './contexts/CategoryContext'
import withProvider from '../shared/hoc/withProvider'
import ColumnFilter from '../shared/components/ColumnFilter'

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
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  )
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
      defaultColumn={defaultColumn}
    />
  )
}
export default withProvider(Categories, CategoryProvider)
