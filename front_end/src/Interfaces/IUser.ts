export interface IUser {
    id: string
    name: string
    email: string
    password?: string
    confirmPassword?: string
    telephone: string
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
}