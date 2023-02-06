
// import { Dispatch, SetStateAction } from "react";
// import { IEditProfile } from "./IEditProfile";
// import { IReportContacts } from "./IReportContacts";
import { IContacts } from "./IContacts";
import { IUser } from "./IUser";
import { IUserLogin } from "./IUserLogin";


export interface IAuthContext {
  user: IUser;
  token: string;
  setToken: (state: string) => void;
  onSubmitLogin: (data: IUserLogin) => void;
  login: boolean;
  setLogin: (state: boolean) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
  onSubmitRegister: (data: IUser) => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  contacts: IContacts[];
  setContacts: (value:IContacts[])=>void;
  // report: IReportContacts[];
  // setReport: (state: IReportContacts[]) => void;
  // report: IReportContacts[];
  // setReport: Dispatch<SetStateAction<IReportContacts[]>>;


  
  
};
            