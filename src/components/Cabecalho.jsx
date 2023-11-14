import { useNavigate } from "react-router-dom";

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

        <div>
          <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout":"btn"}>Logout</button>
        </div>
        <div className="welcome">
          <p>{obJUser != null ?  `Olá ${obJUser.name}`:""}</p>
          <p>{obJUser != null ?  obJUser.email :""}</p>
        </div>
      </header>
    </>
  );
}