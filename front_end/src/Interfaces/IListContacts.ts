import { AxiosRequestConfig } from "axios"
import { IContacts } from "./IContacts"

export interface ILIstContacts {
    
    contacts: IContacts[]
    data: AxiosRequestConfig
}