import "../../style/Home.scss"
import Cabecalho from "../../components/Cabecalho.jsx";
import Monitoramento from "../../assets/sensor_de_monitoramento.png";
import Queda from "../../assets/sensor_de_queda.png";
import Relogio from "../../assets/relogio_portatil.png";
import SmartWatch from "../../assets/smartwatch.png";

export default function Home() {
    document.title = "Home";
    
    if(sessionStorage.getItem("token-user")){
    return (
      <>
        <Cabecalho/>
        <div className="container">
          <div className="interWatch">
          <img src={SmartWatch} className="smartWatch" alt="Relógio portátil" />
          </div>
          <nav><div className="word">Lorem ipsum dolor sit amet.</div>
          <div className="word">Lorem ipsum dolor sit amet.</div>
          <div className="word">Lorem ipsum dolor sit amet.</div></nav>
          <div className="h1-word">
          <h1>InterWatch <br /> Saúde</h1>
          </div>
          <div className="article-btn">
            <article><div className="word-3">Lorem ipsum dolor sit amet.</div></article>
            <button>Mais informações</button>
          </div>
        </div>
        <div className="color"></div> 
        <div className="space"></div> 
          <h2 className="vantagem">Vantagens:</h2>
        <div className="container-2">
          <div className="feature">
            <img src={Monitoramento} className="monitoramento" alt="Monitoramento 24 horas" />
            <div>
              <h2 className="vantagem">01</h2>
              <h4>Monitoramento 24 horas</h4>
              <p>Monitoramento de oxigênio e <br /> batimentos cardíacos 24 horas.</p>
            </div>
          </div>
            <div className="feature">
              <img src={Queda} className="monitoramento" alt="Detector de queda" />
              <div>
                <h2 className="vantagem">02</h2>
                <h4>Detector de queda</h4>
                <p>Avisa ao hospital em tempo <br /> real se houver uma queda.</p>
              </div>
            </div>
            <div className="feature">
              <img src={Relogio} className="monitoramento" alt="Relógio portátil" />
              <div>
                <h2 className="vantagem">03</h2>
                <h4>Relógio Portátil</h4>
                <p>Integra os sensores dentro <br/> de um relógio inteligente.</p>
              </div>
            </div>
        </div>
      </>
    )}
  } 