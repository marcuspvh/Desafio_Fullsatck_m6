import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContainerDashboard } from "./style";
import { AuthContext } from "../../context/AuthContext";
import  ReportContacts  from "../../components/ReportContacts"


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
          <span className="spanDashHeader" >AGENDA DE CONTATOS</span>
          <button onClick={() => navigate("/login")} className="btnSair">
            Sair
          </button>
        </div>
        <div className="dashbody">
          <h1 className="h2Dashbody">Cliente:</h1>
          <div className="divDashbody">
          <span className="spanBody">{user?.name}</span>
          <span className="spanBody">{user?.telephone}</span>
          </div>
          <span className="spanBody1">{user?.email}</span>

        </div>
        <div className="dashFooter">
          <h1>Relação de Contatos</h1>
          <ReportContacts/>
        </div>
      </div>
    </ContainerDashboard>
  )
  : <Navigate to="/login" replace />
  ;
}
