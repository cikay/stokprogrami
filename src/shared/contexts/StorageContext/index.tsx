import React, { useReducer, useContext } from 'react'
import makeProduct from '../../help/makeData'
import StorageActionTypes from './actionTypes'
import reducer from './reducer'

type Props = React.PropsWithChildren<{}>
export type Storage = {
  id: number
  name: string
  adress: string
  description: string
}

const storages: Storage[] = makeProduct(Math.random() * 30, {
  name: '',
  adress: '',
  description: '',
  id: -100,
})
console.log('storages')
console.table(storages)
const initialState = {
  storages,
  createStorage: (storage: Storage) => {},
  updateStorage: (storage: Storage) => {},
  deleteStorage: (storage: Storage) => {},
}

const StorageContext = React.createContext(initialState)
const useStorageContext = () => useContext(StorageContext)
function StorageProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const createStorage = (storage: Storage) => {
    console.log('storage created')
    dispatch({ type: StorageActionTypes.Create, payload: storage })
  }
  const updateStorage = (storage: Storage) => {
    dispatch({ type: StorageActionTypes.Update, payload: storage })
  }
  const deleteStorage = (storage: Storage) => {
    dispatch({ type: StorageActionTypes.Delete, payload: storage })
  }
  const value = {
    ...state,
    createStorage,
    updateStorage,
    deleteStorage,
  }
  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  )
}

export { StorageProvider, useStorageContext }
