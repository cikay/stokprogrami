import ProductActionTypes from './actionTypes'
import { User } from './index'
export type State = {
  users: User[]
}
type Action = { type: ProductActionTypes; payload: User }
export default function productReducer(state: State, action: Action) {
  switch (action.type) {
    case ProductActionTypes.Create:
      return {
        users: [...state.users, action.payload],
      }
    case ProductActionTypes.Update:
      return {
        users: state.users.map((item) => {
          if (item.id === action.payload.id) return action.payload
          return item
        }),
      }
    case ProductActionTypes.Delete:
      return {
        users: state.users.filter((item) => item.id !== action.payload.id),
      }
    default:
      return state
  }
}
