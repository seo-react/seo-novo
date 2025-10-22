import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErro('Preencha todos os campos');
      return;
    }

    try {
      const res = await fetch('https://cms.seorocket.com.br/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
  localStorage.setItem('token', data.token);
  router.push('/simulador'); // ✅ redireciona para simulador
} else {
        setErro(data.message || 'Usuário ou senha inválidos');
      }
    } catch (error) {
      setErro('Erro ao conectar com o servidor');
    }
  };

return (
  <>
    <nav className="menu">
      <div className="logo">🚀 MeuSistema</div>
      <div className="links">
        <a href="/">Início</a>
        <a href="/cadastro">Cadastro</a>
      </div>
    </nav>

    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {erro && <p className="erro">{erro}</p>}
      </form>

      <p className="cadastro-link">
        Ainda não tem conta? <a href="/cadastro">Cadastre-se aqui</a>
      </p>
    </div>

    <style jsx>{`
      .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 32px;
        background: #0070f3;
        color: white;
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .logo {
        font-size: 20px;
        font-weight: bold;
      }
      .links a {
        margin-left: 20px;
        color: white;
        text-decoration: none;
        font-weight: 500;
      }
      .links a:hover {
        text-decoration: underline;
      }

      .auth-container {
        max-width: 400px;
        margin: 80px auto;
        padding: 30px;
        background: #f9f9f9;
        border-radius: 12px;
        box-shadow: 0 0 20px rgba(0,0,0,0.05);
        text-align: center;
      }
      h2 {
        margin-bottom: 20px;
        font-size: 24px;
        color: #333;
      }
      input {
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
        transition: border 0.3s;
      }
      input:focus {
        border-color: #0070f3;
        outline: none;
      }
      button {
        width: 100%;
        padding: 12px;
        background: #0070f3;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s;
      }
      button:hover {
        background: #0059c1;
      }
      .erro {
        margin-top: 10px;
        color: red;
        font-size: 14px;
      }
      .cadastro-link {
        margin-top: 20px;
        font-size: 14px;
        color: #555;
      }
      .cadastro-link a {
        color: #0070f3;
        text-decoration: none;
        font-weight: bold;
      }
      .cadastro-link a:hover {
        text-decoration: underline;
      }
    `}</style>
  </>
);

}
