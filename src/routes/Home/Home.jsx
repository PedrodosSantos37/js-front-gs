import "../../style/Home.scss"
import { useNavigate } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho.jsx";
import Monitoramento from "../../assets/monitoramento.png";
import Queda from "../../assets/sensor_de_queda.png";
import Relogio from "../../assets/inter.png";
import SmartWatch from "../../assets/smartwatch.png";
import { useEffect } from "react";

export default function Home(){
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!sessionStorage.getItem("token-user")) {
      alert("Token não encontrado. Por favor, faça o login!");
      navigate("/login");
    }
  }, [navigate]);

 
 
    return (
      <>
      {sessionStorage.getItem("token-user") ?
        <>
        <Cabecalho/>
        <div className="container">
          <div className="interWatch">
          <img src={SmartWatch} className="smartWatch" alt="Relógio portátil" />
          </div>
          
          <nav><div className="word"> <b> O que é a solução? </b> <br /> O  InterWatch Health é uma pulseira com sensores, incluindo medidor de batimentos, oxigênio e acelerômetro, projetada para monitorar pacientes em lista de espera por transplantes, oferecendo dados contínuos.</div> <br /> <hr />
          <div className="word"> <b> O que ela fará? </b> <br /> A pulseira monitora constantemente a frequência cardíaca e oxigenação do sangue, mitigando desafios emocionais dos pacientes em espera por transplantes e fornecendo lembretes programáveis para medicamentos ou consultas.</div> <br /> <hr />
          <div className="word"> <b> Como funcionará? </b> <br /> Com base em sensores integrados, a pulseira coleta dados vitais em tempo real. Algoritmos matemáticos, como integral e derivada, são aplicados para prever eventos relevantes, enquanto a inteligência artificial detecta padrões, alertando sobre possíveis irregularidades e tomando medidas necessárias.</div></nav>
          <div className="h1-word">
          <h1>InterWatch <br /> Saúde</h1>
          </div>
          <div className="article-btn">
            <article><div className="word-3"> A proposta do Interwatch Heath é um dispositivo de monitoramento contínuo, emerge como uma possível solução para mitigar os desafios enfrentados por indivíduos em filas de espera para transplante.</div></article>
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
      :
        <h2>Você não está autorizado. Por favor, faça o login para acessar.</h2>
      } 
      </>
    )}
