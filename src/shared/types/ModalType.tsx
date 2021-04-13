import React from 'react'

type ModalType = {
  action: 'add' | 'update' | 'delete' | ''
  setAction: React.Dispatch<
    React.SetStateAction<'' | 'add' | 'update' | 'delete'>
  >
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default ModalType
