import React, {
	createContext,
	useEffect,
	useReducer,
} from 'react'
import { User } from '../types'


export enum UserActionType {
	UPDATE_USER = "UPDATE_USER",
}

type UserAction = {
	type: UserActionType
	user: User
}

type ContextValue = {
	state: UserState
	dispatch: (action: UserAction) => void
}

type UserState = typeof initialState

const initialState = {
	user: new User(),
}

export const UserStore = createContext({} as ContextValue)

export const UserProvider: React.FC<{}> = ({ children }) => {
	const [state, dispatch] = useReducer(
		(state: UserState, action: UserAction) => {
			switch (action.type) {
				case UserActionType.UPDATE_USER:
					console.log("State: ", action.user)
					return { ...state, user: action.user }
				default:
					throw new Error()
			};
		},
		initialState,
	)

	useEffect(() => {
		// count が変更された場合の処理
	}, [state.user])

	return (
		<UserStore.Provider value={{ state, dispatch }}>
			{children}
		</UserStore.Provider>
	)
}