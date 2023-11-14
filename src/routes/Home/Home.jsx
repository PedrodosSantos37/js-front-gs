import "../../style/Home.scss"
import Cabecalho from "../../components/Cabecalho.jsx";


export default function Home() {
    document.title = "Home";
    
    if(sessionStorage.getItem("token-user")){
    return (
      <>
      <Cabecalho/>
      <div className="container">
        <header>header1</header>
        <nav>Nav4</nav>
        <h1>H1</h1>
        <h2>H2</h2>
        <button>Mais informações</button>
      </div>
      <h2>Vantagens:</h2>
      <h4>Monitoramento 24 horas</h4>
      <p>Monitoramento de oxigênio e batimentos cardíacos 24 horas</p>
      <h4></h4>
      <p></p>
      <h4></h4>
      <p></p>

      </>
    )}else{
      window.location = "/login";
    }
  } 