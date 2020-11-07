import { useCallback, useContext } from "react";
import AmplifyAPI from "../api/amplify";
import { UserActionType, UserStore } from "../store/user";
import { ItemActionType, ItemStore } from "../store/item";
import { Item, Profile, Setting, User } from "../types";

export const useAuth = () => {
    const api = new AmplifyAPI()
    const { state: userState, dispatch: dispatchUser } = useContext(UserStore);
    const { state: itemState, dispatch: dispatchItem } = useContext(ItemStore);
    const signIn = useCallback(async (email: string, password: string) => {
        try {
            // Amplifyへサインイン
            await api.signIn("", "")
            // ユーザ、Item情報を取得
            await api.getUserInfo()
            // Storeへ保存
            console.log("dispatch")
            const newUser = new User()
            newUser.Setting.Email = email
            dispatchUser({ type: UserActionType.UPDATE_USER, user: newUser })

        } catch (err) {
        }
    }, [])

    const signUp = useCallback(async (username: string, email: string, password: string) => {
        try {
            // Amplifyへサインアップ
            await api.signUp(username, email, password)
            // ユーザ情報を作成
            const user = new User()
            user.Profile.Name = username
            user.Setting.Email = email
            // apiへ保存
            await api.createUser(user)
            // Storeへ保存
            console.log("dispatch2")
            dispatchUser({ type: UserActionType.UPDATE_USER, user: user })

        } catch (err) {
        }
    }, [])

    const signOut = useCallback(async (email: string, password: string) => {
        try {
            // Amplifyへサインアウト
            await api.signOut()
            // Storeのユーザ、アイテムを初期化
            const initUser = new User()
            console.log("dispatch3")
            dispatchUser({ type: UserActionType.UPDATE_USER, user: initUser })
            dispatchItem({ type: ItemActionType.UPDATE_ITEMS, items: [] })

        } catch (err) {
        }
    }, [])

    return { "signIn": signIn, "signUp": signUp, "signOut": signOut }
}

export const useItem = () => {
    const api = new AmplifyAPI()
    const { state: userState, dispatch: dispatchUser } = useContext(UserStore);
    const { state: itemState, dispatch: dispatchItem } = useContext(ItemStore);
    const createItem = useCallback(async (item: Item) => {
        try {
            // Amplifyにアイテムを作成
            await api.createItem(item)
            dispatchItem({ type: ItemActionType.CREATE_ITEM, item: item })

        } catch (err) {
        }
    }, [])

    const updateItem = useCallback(async (item: Item) => {
        try {
            // Amplifyへアイテムを更新
            await api.updateItem(item)
            // Storeのアイテムを更新
            dispatchItem({ type: ItemActionType.UPDATE_ITEM, item: item })

        } catch (err) {
        }
    }, [])

    const deleteItem = useCallback(async (item: Item) => {
        try {
            // Amplifyのアイテムを削除
            await api.deleteItem(item.ID)
            // Storeのアイテムを削除
            dispatchItem({ type: ItemActionType.DELETE_ITEM, item: item })

        } catch (err) {
        }
    }, [])

    return { "createItem": createItem, "signUp": updateItem, "deleteItem": deleteItem }
}

export const useUser = () => {
    const api = new AmplifyAPI()
    const { state: userState, dispatch: dispatchUser } = useContext(UserStore);
    const { state: itemState, dispatch: dispatchItem } = useContext(ItemStore);
    const updateProfile = useCallback(async (profile: Profile) => {
        try {
            const user = userState.user
            user.Profile = profile
            // AmplifyにUserを更新
            await api.updateUser(user)
            // StoreのUserを更新
            dispatchUser({ type: UserActionType.UPDATE_USER, user: user })

        } catch (err) {
        }
    }, [])

    const updateUser = useCallback(async (user: User) => {
        try {
            console.log("update user")
            // AmplifyにUserを更新
            await api.updateUser(user)
            // StoreのUserを更新
            dispatchUser({ type: UserActionType.UPDATE_USER, user: user })

        } catch (err) {
        }
    }, [])

    const updateAvatar = useCallback(async (path: string) => {
        try {
            const user = userState.user
            user.Profile.Avatar = path
            // AmplifyにUserを更新
            await api.updateUser(user)
            // StoreのUserを更新
            dispatchUser({ type: UserActionType.UPDATE_USER, user: user })

        } catch (err) {
        }
    }, [])

    const updateEmail = useCallback(async (email: string) => {
        try {
            const newUser = userState.user
            newUser.Setting.Email = email
            // Storeのアイテムを更新
            dispatchUser({ type: UserActionType.UPDATE_USER, user: newUser })

        } catch (err) {
        }
    }, [])

    const updatePassword = useCallback(async (password: string, newPassword: string) => {
        try {
            console.log("update password: ", password, newPassword)

        } catch (err) {
        }
    }, [])

    const deleteAccount = useCallback(async () => {
        try {
            console.log("delete Account")

        } catch (err) {
        }
    }, [])

    return { "updateProfile": updateProfile, "updateEmail": updateEmail, "updatePassword": updatePassword, "updateUser": updateUser, "deleteAccount": deleteAccount }
}