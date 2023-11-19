import "../../style/Cadastro.scss"
import { useState } from "react"
import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo_preto_branco.png"


export default function Cadastro() {
    document.title = "Cadastro";

    const [msgStatus, setMsgStatus] = useState("");
    
    const [cadastro,setCadastro] = useState({
        nome:"",
        email: "",
        senha: ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setCadastro({...cadastro,[name]:value});
    }

    const handleFocus = (e) => {
        e.target.classList.add("slide-up", "active");
        e.target.nextElementSibling.classList.add("fade-in");
      };
    
      const handleBlur = (e) => {
        if (!e.target.value) {
          e.target.classList.remove("slide-up", "active");
          e.target.nextElementSibling.classList.remove("fade-in");
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!cadastro.nome || !cadastro.email || !cadastro.senha) {
            setMsgStatus("Por favor, preencha todos os campos.");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:5000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cadastro),
            });
            if (response.ok) {
                setCadastro({
                    nome: "",
                    email: "",
                    senha: ""
                });
    
                setMsgStatus("Cadastro realizado com sucesso!");
    
                setTimeout(() => {
                    setMsgStatus("");
                }, 5000);
            }
            
        } catch (error) {
            console.error(error);
            setMsgStatus("Ocorreu um erro ao tentar realizar o registro!");
        }
    };

  return (
    <>
    <body>
        <div>
            <img src={Logo2} className="logo_preto_branco" alt="Logo preto e branco" />
        </div>
        <div className="cadastro-form">
            <h1>Cadastrar</h1>
            <h2 className="msgStatus">{msgStatus}</h2>
            <form onSubmit={handleSubmit}>
                    <div className={`input-box ${cadastro.nome ? "active" : ""}`}>
                        <label htmlFor="idNome" className={cadastro.nome ? "slide-up" : ""}>Nome</label>
                        <input type="text" name="nome" id="idNome" value={cadastro.nome} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </div>
                    <div className={`input-box ${cadastro.email ? "active" : ""}`}>
                        <label htmlFor="idEmail" className={cadastro.email ? "slide-up" : ""}>Email</label>
                        <input type="email" name="email" id="idEmail" value={cadastro.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </div>
                    <div className={`input-box ${cadastro.senha ? "active" : ""}`}>
                        <label htmlFor="idSenha" className={cadastro.senha ? "slide-up" : ""}>Senha</label>
                        <input type="password" name="senha" id="idSenha" value={cadastro.senha} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </div>
                    <div>
                        <button>Cadastrar</button>
                    </div>
                    <div>
                        <p>Se você já é registrado. <Link to="/login">Logui aqui!</Link></p>
                    </div>
            </form>
        </div>
      </body>
    </>
  )
}