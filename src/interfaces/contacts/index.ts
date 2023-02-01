import { IUser, IUserRequest } from "../users"

export interface IContactsRequest {
    name: string
    email: string
    telephone: string
    userId: IUser
}

export interface IContacts {
    id: string
    name: string
    email: string
    telephone: string
    userId: IUser
    createdAt: Date
    updatedAt: Date
}


export interface IContactsUpdate {
    name?: string
    email?: string
    telephone?: string
    userId?: IUserRequest
}

export interface IContactsUpdateRequest {
    name?: string
    email?: string
    telephone?: string
    userId?: IUserRequest
}

export interface IContactsDeleteRequest {
    isActive: boolean
    
}

export interface IContactsCreate {
    name: string
    email: string
    telephone: string
    userId: string
    
}