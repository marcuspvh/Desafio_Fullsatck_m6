import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContainerDashboard } from "./style";
import { AuthContext } from "../../context/AuthContext";


export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  // console.log(`Dashboard`, users);
  return user? (
    <ContainerDashboard>
      <div className="dashMain">
        <div className="divHomeHeader">
          <p>Home</p>
        </div>
        <div className="dashHeader">
          <span>RELAÇÃO DE CONTATOS</span>
          <button onClick={() => navigate("/login")} className="btnSair">
            Sair
          </button>
        </div>
        <div className="dashbody">
          <span className="spanBody">{user?.name}</span>
          <span className="spanBody1">{user?.isAdm}</span>
          <span className="spanBody1">{user?.telephone}</span>

        </div>
        <div className="dashFooter">
          <h1>Relação de contatos do  { user?.name}</h1>
        </div>
      </div>
    </ContainerDashboard>
  )
  : <Navigate to="/login" replace />
  ;
}
