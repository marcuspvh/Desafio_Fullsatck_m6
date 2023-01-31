export interface IUserRequest {
    name: string
    email: string
    telephone: string
    password: string
    isAdm: boolean
}

export interface IUser {
    id: string
    name: string
    email: string
    telephone: string
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    telephone?: string
    password?: string
}

export interface IUserUpdateRequest {
    name?: string
    email?: string
    telephone?: string
    password?: string
}

export interface IUserDeleteRequest {
    isActive: boolean
    
}

export interface IUserCreate {
    name: string
    email: string
    telephone: string
    password: string
    isAdm: boolean
    
}