import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Login.scss";

export default function Login() {
  document.title = "Login";
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

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
      if (user.email === login.email && user.senha === login.senha) {
        alert("Login realizado com SUCESSO!");

        const tokenUser =
          Math.random().toString(16).substring(2) +
          Math.random().toString(16).substring(2);
        console.log(tokenUser);

        sessionStorage.setItem("token-user", tokenUser);
        sessionStorage.setItem("data-user", JSON.stringify(user));

        navigate("/");
        return;
      }
    }

    alert("Login ou senha incorretos!");
    setLogin({
      email: "",
      senha: "",
    });
  };

  return (
    <div className="wrapper-2">
        <h1>Login</h1>

        <div className="form-login">
            <form onSubmit={handleSubmit}>
                        <div className={`input-box-2 ${login.email ? "active" : ""}`}>
                        <label htmlFor="idEmail" className={login.email ? "slide-up" : ""}>Email</label>
                        <input type="email" name="email" id="idEmail" value={login.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </div>
                    <div className={`input-box-2 ${login.senha ? "active" : ""}`}>
                        <label htmlFor="idSenha" className={login.senha ? "slide-up" : ""}>Senha</label>
                        <input type="password" name="senha" id="idSenha" value={login.senha} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    <div>
                        <p>Você não tem registro? <Link to="/cadastrar">Cadastre aqui!</Link></p>
                    </div>
            </form>
        </div>

    </div>
  )
}