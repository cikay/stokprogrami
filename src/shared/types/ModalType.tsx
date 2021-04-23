import React from 'react'

export type ModalActionType = 'create' | 'update' | 'delete' | ''

type ModalType = {
  action: ModalActionType
  setAction: React.Dispatch<React.SetStateAction<ModalActionType>>
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default ModalType
