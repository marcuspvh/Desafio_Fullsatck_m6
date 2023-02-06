import { useContext } from "react"
import { ContainerReportContacts } from "./style";
import {FaRegTrashAlt} from "react-icons/fa"
import { ContactsContext } from "../../context/ContactsContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";



export default function ReportContacts() {
    const { token, contacts } = useAuth();
    
    const navigate = useNavigate();
    const {removeContact} = useContext(ContactsContext)
    
//   const {isOpenModal, setIsOpenModal} = useContext(ContactsContext);
 
api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
  return (
    <ContainerReportContacts>
      <div>
        <div className="tecHeader">
          <span className="tecSpan">Contatos</span>
          <button 
            onClick={()=> navigate("/contacts")}
          
          className="btnTecAdd" type="button">+</button>
          {/* <button
          onClick={()=> setIsOpenModal(!isOpenModal)}
          className="btnTecAdd">+</button> */}
        </div>
        <div className="divContainer">
            <ul className="tecContainer">
            
            {contacts.map((elem) => (
                
                <li
                key={elem.userId}>
                <h3 className="tecH3">{elem.name}</h3>
                <div className="leftCard">
                <p className="tecP">{elem.telephone}</p>
                <button 
                className="btmRmvCard"
                onClick={()=> removeContact(elem.id)}
                ><FaRegTrashAlt /></button>
                </div>
                </li>
                ))
                }   
            </ul>
        </div>
      </div>
    </ContainerReportContacts>
    
    )
}