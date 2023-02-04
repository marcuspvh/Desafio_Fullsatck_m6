import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerRegister } from "./style";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../Interfaces/IUser";

export default function Register() {
  const navigate = useNavigate();
  const { onSubmitRegister } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^([A-Za-z]\s?){3,25}$/g, "Nome Inválido"),
    email: yup.string().required("Email obrigatório").email("Enail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória"),
      // .matches(
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      //   "Senha fora dos quesitos de validação"
      // ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere"),
    telephone: yup
      .string()
      .required("Campo obrigatório"),
    
  });

  const { register, handleSubmit, formState: { errors }, } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerRegister>
      <div className="kenzie">
        <div className="divHeader">
          <span className="spanKenzie">Cadastro de Clientes</span>
          <button onClick={() => navigate("/login")} className="btnVoltar">
            Voltar
          </button>
        </div>
        <div className="container">
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
          <form 
          className="form" 
          onSubmit={handleSubmit(onSubmitRegister)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              className="inputRegister"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="inputRegister"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className="inputRegister"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              className="inputRegister"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message}
            
            <label htmlFor="telephone">Telefone</label>
            <input
              type="text"
              id="telephone"
              className="inputRegister"
              placeholder="Telefone"
              {...register("telephone")}
            />
            {errors.telephone?.message}
            

            <button className="btnCadastro" type="submit">
              Cadastrar
            </button>
            
          </form>
         
        </div>
      </div>
    </ContainerRegister>
  );
}
