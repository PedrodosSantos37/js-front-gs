import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo_saude.png";

export default function Cabecalho() {

  const navigate = useNavigate();

  const obJUser = JSON.parse(sessionStorage.getItem("data-user"));

  const handleLogout = ()=>{
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("data-user");
    navigate("/login");
  }

  return (
    <>
      <header className="cabecalho">
      <div className="change-div">
      <div className="welcome">
      <img src={Logo} className="logo" alt="Logo do site" />
          <div className="mudanca"> 
            <p>{obJUser != null ?  `Olá ${obJUser.name}`:""} <br /> {obJUser != null ?  obJUser.email :""}</p>
          </div>
          </div>
          <div className="btn-cabecalho">
            <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout":"btn"}>Logout</button>
          </div>
        </div>
      </header>
    </>
  );
}