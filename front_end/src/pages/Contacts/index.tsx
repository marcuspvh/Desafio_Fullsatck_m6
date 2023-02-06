import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerContacts } from "./style";
import { useNavigate } from "react-router-dom";
import { IContacts } from "../../Interfaces/IContacts";
import { ContactsContext } from "../../context/ContactsContext";

export default function Contacts() {
  const navigate = useNavigate();
  const { onSubmitContacts } = useContext(ContactsContext);
  const { user } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório"),
      
    email: yup
    .string()
    .required("Email obrigatório")
    .email("Enail inválido"),
    
    telephone: yup
      .string()
      .required("Campo obrigatório"),
    
    userId: yup
    .string(),
    


  });


  const { register, handleSubmit, formState: { errors }, } = useForm<IContacts>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerContacts>
      <div className="kenzie">
        <div className="divHeader">
          <span className="spanKenzie">Cadastro de Contatos</span>
          <button onClick={() => navigate("/dashboard")} className="btnVoltar">
            Voltar
          </button>
        </div>
        <div className="container">
          <h3>Adicione seus Contatos</h3>
          <p>Rapidinho, vamos nessa</p>
          <form 
          className="form" 
          onSubmit={handleSubmit(onSubmitContacts)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              className="inputRegister"
              placeholder="Digite aqui o nome do contato"
              {...register("name")}
            />
            {errors.name?.message}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="inputRegister"
              placeholder="Digite aqui o email do contato"
              {...register("email")}
            />
            {errors.email?.message}
            
            <label htmlFor="telephone">Telefone</label>
            <input
              type="text"
              id="telephone"
              className="inputRegister"
              placeholder="Digite aqui o telefone do contato"
              {...register("telephone")}
            />
            {errors.telephone?.message}
            
            <input
              type="text"
              id="userId"
              value={user.id}
              hidden
              {...register("userId")}
            />
            

            <button 
            className="btnCadastro" type="submit">
              Cadastrar
            </button>
            
          </form>
        </div>
      </div>
    </ContainerContacts>
  );
}
