import React from 'react'
import { Category } from '../contexts/CategoryContext/reducer'
import { Product } from '../contexts/ProductContext'
import { User } from '../contexts/UsersContext'

export type ModalActionType = 'create' | 'update' | 'delete' | ''

type ModalType = {
  action: ModalActionType
  setAction: React.Dispatch<React.SetStateAction<ModalActionType>>
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default ModalType
