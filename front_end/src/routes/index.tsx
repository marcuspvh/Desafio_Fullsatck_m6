
import {Routes, Route, Navigate} from "react-router-dom"
import Contacts from "../pages/Contacts";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";





function RoutesMain() {
  // const {users, setUsers, onSubmitLogin, navigate, onSubmitRegister } = useContext(allContext) 


  return (
    <Routes>
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/contacts" element={ <Contacts /> } />
      <Route path="*" element={ <Navigate replace to="/login"/> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      {/* <Route path="/Modal" element={ <Modal /> } /> */}
    </Routes>
  );
}

export default RoutesMain;