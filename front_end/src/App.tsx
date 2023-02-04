import "./App.css";
import "./pages/Login/style.ts";
import "./pages/Register/style.ts";
import "./pages/Dashboard/style.ts";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer />
    </div>
  );
}

export default App;

