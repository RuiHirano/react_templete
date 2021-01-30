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
    ID: string
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


export interface Document {
    title: string,
    author: string[],
    abstract: string,
    contents: Chapter[] | Section[],
    bibliographies: Bibliography[],
    biographies: Biography[],
    createdAt: Moment,
}

export interface Chapter {
    index: number,
    title: string,
    contents: (Section | Paragraph)[],
}

export interface Section {
    index: number,
    title: string,
    contents: (Subsection | Paragraph)[],
}

export interface Subsection {
    index: number,
    title: string,
    paragraphs: Paragraph[],
}

export interface Paragraph {
    sentences: Sentence[],
    figures: Figure[],
}

export interface Sentence {
    text: string,
}

export interface Bibliography {
    title: string,
    author: string,
    year: string,
}

export interface Biography {
    name: string,
    description: string,
}

export interface Figure {
    id: string
    name: string
    uri: string
    size: number
}

export interface Table {
    id: string
    name: string
}

export interface Math {
    id: string
    name: string
}

export interface Lstlisting {
    id: string
    name: string
}