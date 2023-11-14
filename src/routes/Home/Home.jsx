import "../../style/Home.scss"
import Cabecalho from "../../components/Cabecalho.jsx";


export default function Home() {
    document.title = "Home";
    
    if(sessionStorage.getItem("token-user")){
    return (
      <div>
        <h1> Oi Home</h1>
        <Cabecalho/>
      </div>
    )}else{
      window.location = "/login";
      
    }
  } 