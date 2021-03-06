import React, { useContext, useReducer, Dispatch } from 'react'
import makeData from '../../help/makeData'
import CategoryActionTypes from './actionTypes'
import categoryReducer, { Category } from './reducer'
type Props = React.PropsWithChildren<{}>
const categories: Category[] = makeData(Math.random() * 30, {
  name: '',
  description: '',
  storage: '',
  id: -100,
})
console.log('categories')
console.table(categories)

const initialState = {
  categories,
  createCategory: (category: Category) => {},
  deleteCategory: (category: Category) => {},
  updateCategory: (category: Category) => {},
}
const CategoryContext = React.createContext(initialState)
const useCategoryContext = () => useContext(CategoryContext)
function CategoryProvider({ children }: Props) {
  const [state, dispatch] = useReducer(categoryReducer, initialState)
  const createCategory = (payload: Category) => {
    console.log('created category')
    dispatch({ type: CategoryActionTypes.ADD, payload })
  }
  const deleteCategory = (payload: Category) => {
    dispatch({ type: CategoryActionTypes.DELETE, payload })
  }
  const updateCategory = (payload: Category) => {
    dispatch({ type: CategoryActionTypes.UPDATE, payload })
  }
  const value = { ...state, createCategory, updateCategory, deleteCategory }
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  )
}

export { CategoryProvider, useCategoryContext }

/*



*/
