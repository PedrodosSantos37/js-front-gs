import "../../style/Home.scss"
import Cabecalho from "../../components/Cabecalho.jsx";
import Monitoramento from "../../assets/sensor_de_monitoramento.png";
import Queda from "../../assets/sensor_de_queda.png";
import Relogio from "../../assets/relogio_portatil.png";

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
        <div className="container-2">
          <div className="feature">
            <img src={Monitoramento} className="monitoramento" alt="Monitoramento 24 horas" />
            <div>
              <h2>01</h2>
              <h4>Monitoramento 24 horas</h4>
              <p>Monitoramento de oxigênio e</p>
              <p>batimentos cardíacos 24 horas.</p>
            </div>
          </div>
            <div className="feature">
              <img src={Queda} className="monitoramento" alt="Detector de queda" />
              <div>
                <h2>02</h2>
                <h4>Detector de queda</h4>
                <p>Avisa ao hospital em tempo</p>
                <p> real se houver uma queda.</p>
              </div>
            </div>
            <div className="feature">
              <img src={Relogio} className="monitoramento" alt="Relógio portátil" />
              <div>
                <h2>03</h2>
                <h4>Relógio Portátil</h4>
                <p>Integra os sensores dentro</p>
                <p>de um relógio inteligente.</p>
              </div>
            </div>
        </div>
      </>
    )}
  } 