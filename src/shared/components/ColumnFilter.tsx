import React from 'react'

type Props = React.PropsWithChildren<{
  column: {
    filterValue: any
    preFilteredRows: any
    setFilter: any
  }
}>

export default function ColumnFilter({ column }: Props) {
  const { filterValue, setFilter } = column
  return (
    <span>
      <input
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  )
}
