import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../../style/Login.scss";

export default function Login() {
    document.title = "Login";

    const navigate = useNavigate();

    const [login,setLogin] = useState({
        email: "",
        senha: ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setLogin({...login,[name]:value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        let users;
        let user;
        try {
            const response = await fetch("http://localhost:5000/usuarios");
            users = await response.json();
            
        } catch (error) {
            alert("Ocorreu um erro no processamento da sua solicitação!");    
        }

        for (let x = 0; x < users.length; x++) {
                user = users[x];
            if(user.email == login.email && user.senha == login.senha){
                alert("Login realizado com SUCESSO!")

                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
                console.log(tokenUser);
                
                sessionStorage.setItem("token-user",tokenUser);
                sessionStorage.setItem("data-user", JSON.stringify(user));

                navigate("/");
                return; 
            }
        }

        alert("Login ou senha incorretos!")
        setLogin({
            email:"",
            senha:""
        });
    }

  return (
    <div>
        <h1>Login</h1>

        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Informação do Usuário:</legend>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu email." value={login.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={login.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    <div>
                        <p>Você não tem registro? <Link to="/cadastrar">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>

    </div>
  )
}