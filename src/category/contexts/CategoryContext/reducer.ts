import categoryActionTypes from './actionTypes'

export type Category = {
  id: number
  name: string
  description: string
  storage: string
}

export type CategoryAction = {
  type: categoryActionTypes
  payload: Category
}
type State = {
  categories: Category[]
}
export default function reducer(state: State, action: CategoryAction) {
  switch (action.type) {
    case categoryActionTypes.ADD:
      return { ...state, categories: [...state.categories, action.payload] }
    case categoryActionTypes.DELETE:
      return {
        ...state,
        categories: state.categories.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    case categoryActionTypes.UPDATE:
      return {
        ...state,
        categories: state.categories.map((item) => {
          if (item.id === action.payload.id) return action.payload
          return item
        }),
      }
    default:
      throw new Error('type geçerli değil')
  }
}
