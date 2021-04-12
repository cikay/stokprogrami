import React, { useState } from 'react'
import { Table, Button, NavDropdown } from 'react-bootstrap'
import CustomizedModal from './CustomizedModal'
import { useTable, usePagination, useFilters } from 'react-table'
import FormModal from './FormModal'
import ColumnFilter from './ColumnFilter'

type Props<T extends object> = React.PropsWithChildren<{
  action: 'update' | 'delete' | 'add' | ''
  setAction: React.Dispatch<
    React.SetStateAction<'update' | 'delete' | 'add' | ''>
  >
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
  columns: { Header: string; columns: { Header: string; accessor: string }[] }[]
  data: T[]
  createModel?: (model: T) => void
  updateModel?: (model: T) => void
  deleteModel?: (model: T) => void
  defaultColumn?: {
    Filter: ({
      column,
    }: React.PropsWithChildren<{
      column: {
        filterValue: any
        preFilteredRows: any
        setFilter: any
      }
    }>) => JSX.Element
  }
}>

export default function FlexibleTable<T extends object>({
  action,
  setAction,
  setShow,
  show,
  columns,
  data,
  createModel,
  updateModel,
  deleteModel,
  defaultColumn,
}: Props<T>) {
  const [selectedModel, setSelectedModel] = useState({} as T)

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
      columns,
      data,
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
    setShow(true)
    console.log('model ', model)
    setAction('update')
  }

  function ModalForm() {
    console.log('Modal Form')
    if (action === 'add') {
      console.log('add user')
      return (
        <>
          <FormModal
            closeModal={() => setShow(false)}
            show={show}
            createModel={createModel}
            updateModel={updateModel}
            columns={columns[0].columns}
          />
        </>
      )
    } else if (action === 'update') {
      console.log('selectedModel', selectedModel)
      return (
        <>
          <FormModal
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            closeModal={() => setShow(false)}
            show={show}
            createModel={createModel}
            updateModel={updateModel}
            columns={columns[0].columns}
          />
        </>
      )
    } else if (action === 'delete') {
      return (
        <>
          {deleteModel && (
            <CustomizedModal
              show={show}
              onHide={reset}
              title={'Silmek istediğinize emin misiniz?'}
            >
              <div className='mr-auto'>
                <Button variant='secondary' onClick={reset}>
                  İptal
                </Button>
                <Button
                  variant='danger'
                  className='float-right'
                  onClick={() => {
                    if (selectedModel) {
                      deleteModel(selectedModel)
                    }
                    reset()
                  }}
                >
                  Sil
                </Button>
              </div>
            </CustomizedModal>
          )}
        </>
      )
    }
  }

  return (
    <>
      <Button
        variant='success'
        onClick={() => {
          setShow(true)
          setAction('add')
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
                    console.log(row.getRowProps())
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
                          console.log('row', row.original)
                          handleUpdate(row.original)
                        }}
                      >
                        Update
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => handleDelete(row.original)}
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
      {ModalForm()}
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
