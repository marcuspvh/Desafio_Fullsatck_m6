import { IContacts } from "./IContacts";


export type IContactPreview = Omit<IContacts, "id">;