import React, {
	createContext,
	FC,
	useContext,
	useEffect,
	useReducer,
} from 'react'

import { Item } from './../types'

export enum ItemActionType {
	UPDATE_ITEMS = "UPDATE_ITEMS",	// itemsの更新
	CREATE_ITEM = "CREATE_ITEM",	// itemの作成
	UPDATE_ITEM = "UPDATE_ITEM",	// itemの更新
	DELETE_ITEM = "DELETE_ITEM",	// itemの削除
}

type ItemAction = {
	type: ItemActionType
	items: Item[]
}

type ContextValue = {
	state: ItemState
	dispatch: (newState: ItemAction) => void
}

type ItemState = typeof initialState

const initialState = {
	count: 0,
}

export const ItemStore = createContext({} as ContextValue)

export const ItemProvider: FC<{}> = ({ children }) => {
	const [state, dispatch] = useReducer(
		(state: ItemState, action: ItemAction) => {
			switch (action.type) {
				case ItemActionType.UPDATE_ITEMS:
					return { ...state, count: state.count + 1 }
				case ItemActionType.UPDATE_ITEM:
					return { ...state, count: state.count + 1 }
				case ItemActionType.CREATE_ITEM:
					return { ...state, count: state.count + 1 }
				case ItemActionType.DELETE_ITEM:
					return { ...state, count: state.count + 1 }
				default:
					throw new Error()
			};
		},
		initialState,
	)

	useEffect(() => {
		// count が変更された場合の処理
	}, [state.count])

	return (
		<ItemStore.Provider value={{ state, dispatch }}>
			{children}
		</ItemStore.Provider>
	)
}