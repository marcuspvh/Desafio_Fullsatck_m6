
import { IContacts } from "./IContacts";
// import { IEditProfile } from "./IEditProfile";
import { IUser } from "./IUser";
import { IUserLogin } from "./IUserLogin";

export interface IAuthContext {
  user: IUser;
  onSubmitLogin: (data: IUserLogin) => void;
  login: boolean;
  setLogin: (state: boolean) => void;
  loading: boolean;
  setLoading: (state: boolean) => void;
  onSubmitRegister: (data: IUser) => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  onSubmitContacts: (data:IContacts) => void;
  //   isOpenModal: boolean;
  //   setIsOpenModal: (state: boolean) => void;
  //   setInputFilter: (state: string) => void;
  //   filterDoctors: (state: string) => void;
    //   inputFilter: string;
    //   EditUserProfile: (data: IEditProfile) => void;
  
};
            