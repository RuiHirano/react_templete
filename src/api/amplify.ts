
/*import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import { User } from '../types';
import { API, graphqlOperation } from "aws-amplify"
const config = require('../../../aws-exports').config;
Amplify.configure(config);*/
import { Item, User } from '../types';

export default class AmplifyAPI {

    constructor() {
    }

    async signIn(username: string, password: string) {
        /*await Auth.signIn({
            username: username,
            password: password,
        })*/
    }

    async signUp(username: string, password: string, email: string) {
        /*await Auth.signUp({
            username: username,
            password: password,
            attributes: {
                email: email,
            },
        })*/
    }

    async signOut() {
        // Auth.signOut()
    }

    async getUserInfo() {
        //const userInfo = await Auth.currentUserInfo()
        //return userInfo
    }

    async createUser(user: User) {

    }

    async createItem(item: Item) {

    }

    async updateItem(item: Item) {

    }

    async deleteItem(itemId: string) {

    }

    async updateUser(user: User) {

    }


}