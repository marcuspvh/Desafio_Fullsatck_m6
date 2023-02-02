import { IUserLogin,IUserRequest } from "../../interfaces/users";
import { IContactsCreate, IContactsRequest } from "../../interfaces/contacts";


export const mockedUser : IUserRequest = {
    name: "Joana",
    email: "joana@mail.com",
    isAdm: false,
    telephone: "981158855",
    password: "123456"
}

export const mockedAdmin : IUserRequest = {
    name: "Felipe",
    email: "felipe@mail.com",
    telephone: "981158855",
    password: "123456",
    isAdm: true
}

export const mockedUserLogin : IUserLogin = {
    email: "joana@mail.com",
    password: "123456"
}

export const mockedAdminLogin : IUserLogin = {
    email: "felipe@mail.com",
    password: "123456"
}

export const mockedContacts : IContactsCreate = {
    name: "Joana",
    email: "joana@mail.com",
    telephone: "981158855",
    userId:""
    
}

export const mockedContactsInvalidUserId : IContactsCreate = {
    name: "Joana",
    email: "joana@mail.com",
    telephone: "981158855",
    userId:"8f9ae6ce-e36c-4d9d-9bd7-b4c98cb4e4f4"
    
}
