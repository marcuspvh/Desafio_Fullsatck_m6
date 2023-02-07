import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { AxiosError } from "axios";
import { IUser } from "../Interfaces/IUser";
import { IPost } from "../Interfaces/IPost";
import { IError } from "../Interfaces/IError";
import { IAuthContext } from "../Interfaces/IAuthContext";
import { IAuthProvider } from "../Interfaces/IAuthProvider";
import { IUserLogin } from "../Interfaces/IUserLogin";
import { IDataLogin } from "../Interfaces/IDataLogin";
import { IContacts } from "../Interfaces/IContacts";




  
  export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
  
  function AuthProvider({ children }: IAuthProvider) {
    
      
    
    const [isLoading, setIsLoading] = useState(false);
      const [user, setUser] = useState<IUser>({} as IUser);
      const [loading, setLoading] = useState(true);
      const [login, setLogin] = useState(false);
      const [token, setToken] = useState("");
      const [contacts, setContacts] = useState<IContacts[]>([] as IContacts[]);
      
      
      
      // const location = useLocation();
      const navigate = useNavigate();
    
      // const token = localStorage.getItem("@context-cadastroClientes:token");

      useEffect(() => {
        async function loadUser() {
          const token = localStorage.getItem("@TOKEN");
    
          if (token) {
            try {
              
              const user = JSON.parse(localStorage.getItem("@USER")!);

              setUser(user)

            } catch (error) {
              console.error(error);
            }
          }
        }
        loadUser();
      }, []);
    
      
      const onSubmitLogin = async(data:IUserLogin) => {
                
        await api
          .post<IDataLogin>("/login", data)
          .then((response) => {
            const { token, account } = response.data;

            // console.log(response);
            setUser(account);
            setToken(token);
                        
            localStorage.setItem("@TOKEN", token);
            localStorage.setItem("@USER", JSON.stringify(account));
          })
          .then((response) => {

            getContactsByUser()

            toast.success("login efetuado com sucesso");
            navigate("/dashboard", { replace: true });
            
          })
          .catch((error: AxiosError<IError>)=>{ toast.error("Ops, Algo deu errado");
          console.log(error)})
      };
    

    const onSubmitRegister = async (data:IUser) => {
        const newData = {
            ...data,
            img: "",
          };
        await api
        .post<IPost>("/users", newData)
        .then((response) => {

        toast.success("Cadastro efetuado com sucesso");
        navigate("/login");
        })
        .catch((error: AxiosError<IError>) => {
          toast.error("Ops, Algo deu errado")
          console.log(error)
        })
        
    };


    async function getContactsByUser(){
      
      const localUser = JSON.parse(localStorage.getItem("@USER")!)
      
      await api
      
      .get<IUser>(`users/${localUser.id}/contacts`)
      .then((response) => {

        const { data } = response;
        setContacts(data.contacts);
            
      })
      .catch((error: AxiosError<IError>) => {
        toast.error("Ops, Algo deu errado")
        console.log(error)
      }
      )
    }
  
    return (
      <AuthContext.Provider
        value={{
            isLoading,
            setIsLoading,
            user,
            token,
            setToken,
            login,
            setLogin,
            loading,
            setLoading,
            onSubmitRegister,
            onSubmitLogin,
            contacts,
            setContacts,
            getContactsByUser
            // setReport,
            // report,
            
            
         
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  export default AuthProvider;
  
  export const useAuth = () => useContext(AuthContext);
  