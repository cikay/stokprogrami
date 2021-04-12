import React, { useReducer, useContext } from 'react'
import makeProduct from '../../help/makeData'
import ProductActionTypes from './actionTypes'
import reducer from './reducer'

type Props = React.PropsWithChildren<{}>
export type Product = {
  id: number
  name: string
  description: string
  storage: string
  category: string
}

const products: Product[] = makeProduct(50, {
  name: '',
  description: '',
  storage: '',
  category: '',
  id: -100,
})
console.log('products')
console.table(products)
const initialState = {
  products,
  createProduct: (product: Product) => {},
  updateProduct: (product: Product) => {},
  deleteProduct: (product: Product) => {},
}

const ProductContext = React.createContext(initialState)
const useProductContext = () => useContext(ProductContext)
function ProductProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const createProduct = (product: Product) => {
    console.log('product created')
    dispatch({ type: ProductActionTypes.Create, payload: product })
  }
  const updateProduct = (product: Product) => {
    dispatch({ type: ProductActionTypes.Update, payload: product })
  }
  const deleteProduct = (product: Product) => {
    dispatch({ type: ProductActionTypes.Delete, payload: product })
  }
  const value = {
    ...state,
    createProduct,
    updateProduct,
    deleteProduct,
  }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export { ProductProvider, useProductContext }
