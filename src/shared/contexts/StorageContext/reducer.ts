import StorageActionTypes from './actionTypes'
import { Storage } from './index'
export type State = {
  storages: Storage[]
}
type Action = { type: StorageActionTypes; payload: Storage }
export default function productReducer(state: State, action: Action) {
  switch (action.type) {
    case StorageActionTypes.Create:
      return {
        storages: [...state.storages, action.payload],
      }
    case StorageActionTypes.Update:
      return {
        storages: state.storages.map((item) => {
          if (item.id === action.payload.id) return action.payload
          return item
        }),
      }
    case StorageActionTypes.Delete:
      return {
        storages: state.storages.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}
