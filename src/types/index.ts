import { Moment } from "moment";

export interface Environment {
    OS: string
    Language: string
}

export interface Error {
    Message: string
    Log: string
    Location: string
}

export interface Content {
    Title: string
    Error: Error
    Environment: Environment
    Solution: string
    TimeStamp: Moment
}