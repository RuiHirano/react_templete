import moment, { Moment } from "moment";
import { v4 as uuid } from "uuid"

export interface Environment {
    OS: string
    Language: string
}

export interface Error {
    Message: string
    Log: string
    Location: string
}

export interface Item {
    Title: string
    Error: Error
    Environment: Environment
    Solution: string
    TimeStamp: Moment
}



// User
export class User {
    ID: string
    Profile: Profile
    Setting: Setting
    constructor() {
        this.ID = uuid()
        this.Profile = {
            Name: "",
            Birthday: moment(),
            Message: "",
            Sex: "MALE",
            Avatar: "",
            Header: "",
        }
        this.Setting = <Setting>{
            Email: "",
            Language: "JAPANESE",
            Notification: <Notification>{
                Email: true,
                Push: true,
            },
        }
    }
}

export interface Profile {
    Name: string,
    Birthday: Moment,
    Sex: string,
    Message: string,
    Avatar: string,
    Header: string,
}

export interface Setting {
    Email: string,
    Language: string,
    Notification: Notification,
}

export interface Notification {
    Email: boolean,
    Push: boolean,
}