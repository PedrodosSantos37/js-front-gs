import "../../style/Cadastro.scss"
import { useState } from "react"
import { Link } from "react-router-dom";


export default function Cadastro() {
    document.title = "Cadastro";

    const [msgStatus, setMsgStatus] = useState("");
    
    const [usuario,setUsuario] = useState({
        nome:"",
        email: "",
        senha: ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!usuario.nome || !usuario.email || !usuario.senha) {
            setMsgStatus("Por favor, preencha todos os campos.");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:5000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario),
            });
            if (response.ok) {
                setUsuario({
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
    <div className="wrapper" >
        <h1>Cadastrar</h1>
        <div className="cadastro-form">
            <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name="nome" id="idNome" placeholder="Digite seu nome." value={usuario.nome} onChange={handleChange}/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Cadastrar</button>
                        <h2 className="msgStatus">{msgStatus}</h2>
                    </div>
                    <div>
                        <p>Se você já é registrado. <Link to="/login">Logui aqui!</Link></p>
                    </div>
            </form>
        </div>
    </div>
  )
}