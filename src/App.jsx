import "./App.css";
import Header from "./components/Header/Header";
import Mainbody from "./components/Mainbody/Mainbody";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Mainbody></Mainbody>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
