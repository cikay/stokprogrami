import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import CustomizedModal from './CustomizedModal'
import { Button, Form } from 'react-bootstrap'
import generatorId from '../help/generatorId'
import { ModalActionType } from '../types/ModalType'

type Props<T> = React.PropsWithChildren<{
  selectedModel?: T
  setSelectedModel?: React.Dispatch<React.SetStateAction<T>>
  closeModal: () => void
  inputs: { Header: string; accessor: string }[]
  action: ModalActionType
  setAction: React.Dispatch<React.SetStateAction<ModalActionType>>
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  createModel?: (model: T) => void
  updateModel?: (model: T) => void
  deleteModel?: (model: T) => void
}>

export default function FormModal<T extends object>({
  selectedModel,
  show,
  inputs,
  createModel,
  updateModel,
  deleteModel,
  setSelectedModel,
  closeModal,
  action,
  setAction,
}: Props<T>) {
  const [formData, setFormData] = useState<T>({} as T)

  console.log('show', show)
  useEffect(() => {
    if (selectedModel) {
      console.log('selected model in useEffect', selectedModel)
      setFormData(selectedModel)
    }
  }, [selectedModel])

  const resetStates = () => {
    closeModal()
    setFormData({} as T)
    setSelectedModel?.({} as T)
    setAction('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('formData', formData)
    if (!formData) return
    if (selectedModel != null) {
      const user = { ...selectedModel, ...formData }
      if (formData) updateModel?.(formData)
      setFormData({} as T)
    } else {
      const id = Number(generatorId.next().value)
      console.log('creating model')
      createModel?.({ ...formData, id })
      setFormData({} as T)
    }
    console.log('closing model')
    closeModal()
  }
  const actionName = selectedModel ? 'Güncelle' : 'Ekle'

  if (action === 'delete') {
    return (
      <>
        {deleteModel && (
          <CustomizedModal
            show={show}
            onHide={resetStates}
            title={'Silmek istediğinize emin misiniz?'}
          >
            <div className='mr-auto'>
              <Button variant='secondary' onClick={resetStates}>
                İptal
              </Button>
              <Button
                variant='danger'
                className='float-right'
                onClick={() => {
                  console.log('selected model to delete', selectedModel)
                  if (selectedModel) {
                    deleteModel(selectedModel)
                  }
                  resetStates()
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

  return (
    <CustomizedModal
      show={show}
      onHide={resetStates}
      title={selectedModel ? 'Güncelle' : 'Ekle'}
    >
      <Card className='w-100' style={{ maxWidth: '430px' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {inputs.map((column) => {
              return (
                <Form.Group id={column.accessor}>
                  <Form.Control
                    required
                    type='text'
                    id={column.accessor}
                    placeholder={column.Header}
                    onChange={handleChange}
                    defaultValue={(selectedModel as any)?.[column.accessor]}
                  />
                </Form.Group>
              )
            })}
            <Button
              className='float-right mt-2'
              variant='primary'
              type='submit'
            >
              {actionName}
            </Button>
          </Form>
          <Button className='mt-3' variant='secondary' onClick={resetStates}>
            İptal
          </Button>
        </Card.Body>
      </Card>
    </CustomizedModal>
  )
}
