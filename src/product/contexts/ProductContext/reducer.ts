import ProductActionTypes from './actionTypes'
import { Product } from './index'
export type State = {
  products: Product[]
}
type Action = { type: ProductActionTypes; payload: Product }
export default function productReducer(state: State, action: Action) {
  switch (action.type) {
    case ProductActionTypes.Create:
      return {
        products: [...state.products, action.payload],
      }
    case ProductActionTypes.Update:
      return {
        products: state.products.filter((item) => {
          if (item.id === action.payload.id) return action.payload
          return item
        }),
      }
    case ProductActionTypes.Delete:
      return {
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}
