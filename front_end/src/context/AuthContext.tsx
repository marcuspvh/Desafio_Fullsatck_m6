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
// import { IContacts } from "../Interfaces/IContacts";
import { IUserLogin } from "../Interfaces/IUserLogin";
import { IDataLogin } from "../Interfaces/IDataLogin";
import { IContacts } from "../Interfaces/IContacts";
// import { ILIstContacts } from "../Interfaces/IListContacts";
// import { IContacts } from "../Interfaces/IContacts";
// import { IReportContacts } from "../Interfaces/IReportContacts";
// import { IPostContacts } from "../Interfaces/IPostContacts";



  
  export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
  
  function AuthProvider({ children }: IAuthProvider) {
      
    
    const [isLoading, setIsLoading] = useState(false);
      const [user, setUser] = useState<IUser>({} as IUser);
      const [loading, setLoading] = useState(true);
      const [login, setLogin] = useState(false);
      const [token, setToken] = useState("");
      const [contacts, setContacts] = useState<IContacts[]>([] as IContacts[]);
      // const {report, setReport} = useState<IReportContacts[]>([] as IReportContacts[]);
      
      
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
            // setReport(report)
            localStorage.setItem("@TOKEN", token);
            localStorage.setItem("@USER", JSON.stringify(account));
            toast.success("login efetuado com sucesso");
            navigate("/dashboard", { replace: true });
            
          })
          .catch((_) => toast.error("Ops, Algo deu errado"));
      };
    

    const onSubmitRegister = async (data:IUser) => {
        const newData = {
            ...data,
            img: "",
          };
        await api
        .post<IPost>("/users", newData)
        .then((response) => {
          // console.log(`Dados do Register:`, response);
          toast.success("Cadastro efetuado com sucesso");
          navigate("/login");
        })
        .catch((error: AxiosError<IError>) => toast.error("Ops, Algo deu errado"));
        console.log(data)
    };

  //   const onSubmitContacts = async(data:IContacts) => {
  //     console.log(data);   
  //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  //   await api
  //   .post<IPostContacts>("/contacts", data)
  //   .then((response) => {
      
  //     toast.success("Cadastro efetuado com sucesso");
  //     navigate("/Dasboard");
  //   })
  //   .catch((error: AxiosError<IError>) => {
  //     toast.error("Ops, Algo deu errado")
  //     console.log(error)
  //   }
  //   );
    
    
  // };
  
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
  