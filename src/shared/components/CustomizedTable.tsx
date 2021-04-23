import React, { useState, useMemo } from 'react'
import ColumnFilter from './ColumnFilter'
import { Table, Button, NavDropdown } from 'react-bootstrap'
import CustomizedModal from './CustomizedModal'
import { useTable, usePagination, useFilters } from 'react-table'
import FormModal from './FormModal'
import { ModalActionType } from '../types/ModalType'

type Columns = {
  Header: string
  columns: { Header: string; accessor: string }[]
}[]
type Props<T> = React.PropsWithChildren<{
  columns: Columns
  setAction: React.Dispatch<React.SetStateAction<ModalActionType>>
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  data: T[]
  formModal?: JSX.Element
  setSelectedModel: React.Dispatch<React.SetStateAction<T | undefined>>
}>

function CustomizedTable<T extends object>({
  setAction,
  setShow,
  columns,
  data,
  formModal,
  setSelectedModel,
}: Props<T>) {
  const cachedColumns = useMemo(() => {
    return columns
  }, [])
  const cachedData = useMemo(() => data, [data])
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    prepareRow,
  } = useTable(
    {
      columns: cachedColumns,
      data: cachedData,
      defaultColumn,
      initialState: { pageSize: 6 },
    },
    useFilters,
    usePagination
  )

  const reset = () => {
    setShow(false)
    setSelectedModel({} as T)
  }

  const handleDelete = (model: T) => {
    setShow(true)
    setSelectedModel(model)
    setAction('delete')
  }

  const handleUpdate = async (model: T) => {
    setSelectedModel(model)
    console.log('handle update model', model)
    setShow(true)
    console.log('model ', model)
    setAction('update')
  }

  return (
    <>
      <Button
        variant='success'
        onClick={() => {
          setShow(true)
          setAction('create')
        }}
        className='mt-2 mb-2'
      >
        Ekle
      </Button>
      <Table responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter && column.render('Filter')}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <>
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      </>
                    )
                  })}
                  <div className='align-middle'>
                    <NavDropdown
                      title='Aksiyonlar'
                      id='basic-nav-dropdown'
                      className='ml-auto'
                      style={{
                        right: '0 !important',
                        left: 'auto !important',
                      }}
                    >
                      <NavDropdown.Item
                        onClick={() => {
                          console.log('updating data', row.original)
                          handleUpdate(row.original as T)
                        }}
                      >
                        Update
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleDelete(row.original as T)}
                      >
                        Delete
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
      {formModal}
      <div className='mt-2 float-left'>
        <Button
          variant='primary'
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          Önceki
        </Button>
        <Button
          variant='primary'
          onClick={nextPage}
          disabled={!canNextPage}
          className='ml-2'
        >
          Sonraki
        </Button>
      </div>
    </>
  )
}
export default CustomizedTable
