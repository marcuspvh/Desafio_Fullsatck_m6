import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { createContext, useEffect } from "react";
import { AxiosError } from "axios";
import { IError } from "../Interfaces/IError";
import { IContactsContext } from "../Interfaces/IContactsContext";
import { useAuth } from "./AuthContext";
import { IContactPreview } from "../Interfaces/IContactPrevieww";
import { IContactsProviderProps } from "../Interfaces/IContactsProviderProps";
import { IContacts } from "../Interfaces/IContacts";




export const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

function ContactsProvider({ children }: IContactsProviderProps) {
  const { token, contacts, setContacts } = useAuth();
  
  const navigate = useNavigate();
  
  

  const onSubmitContacts = async(data:IContactPreview) => {
       
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  await api
  .post<IContacts>("/contacts", data)
  .then((response) => {
    const { data: contact } = response;
    setContacts([...contacts, contact]);

    toast.success("Cadastro efetuado com sucesso");
    navigate("/dashboard");
    
    console.log(contacts)

  })
  .catch((error: AxiosError<IError>) => {
    toast.error("Ops, Algo deu errado")
    console.log(error)
  }
  )
  };

  useEffect(() => {
    if (contacts) {
      setContacts([...contacts]);
    }
  }, []);

  async function removeContact(contact_id:string) {

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      await api.delete(`/contacts/${contact_id}`);
       
      const newContacts = contacts.filter((elem)=>( elem.id !== contact_id ))
      
           
      setContacts(newContacts);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ContactsContext.Provider
      value={{
        onSubmitContacts,
        // contacts,
        // setContacts,
        removeContact,
        // isOpenModal,
        // setIsOpenModal,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;