import actionTypes from './actionTypes'

export type User = {
  email: string
  // username?: string
  // firstname?: string
  // lastname?: string
}
type Action = { type: actionTypes; payload?: User }
type State = {
  currentUser: User | null | undefined
  isAuthenticated: boolean
}
export default function authReducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isAuthenticated: true, currentUser: action.payload }
    case actionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, currentUser: null }
    default:
      return state
  }
}
