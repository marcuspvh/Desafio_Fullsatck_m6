// import { IContacts } from "./IContacts"
import { IContactPreview } from "./IContactPrevieww";


export interface IContactsContext {
  
  onSubmitContacts: (data: IContactPreview)=> void;
  // contacts: IContacts[];
  // setContacts: (value:IContacts[])=>void;
  removeContact: (value:string)=>void;
  // isOpenModal: boolean;
  // setIsOpenModal: (value:boolean)=>void;
}
