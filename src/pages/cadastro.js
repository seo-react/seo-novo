import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Cadastro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  const router = useRouter(); // ✅ aqui!

  const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Ntcy5zZW9yb2NrZXQuY29tLmJyIiwiaWF0IjoxNzYxMDkzNDg5LCJuYmYiOjE3NjEwOTM0ODksImV4cCI6MTc2MTY5ODI4OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.ysys4ly6o7vXTKs680c9YkUTYOr1_O9LKT84VQzpb0o';

  const handleCadastro = async (e) => {
    e.preventDefault();

    const res = await fetch('https://cms.seorocket.com.br/wp-json/wp/v2/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    if (data.id) {
  setMensagem('Usuário criado com sucesso!');

  // Fazer login automático após cadastro
  const loginRes = await fetch('https://cms.seorocket.com.br/wp-json/jwt-auth/v1/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const loginData = await loginRes.json();

  if (loginData.token) {
    localStorage.setItem('token', loginData.token);
    router.push('/simulador');
  } else {
    setMensagem('Usuário criado, mas erro ao fazer login automático.');
  }
} else {
  setMensagem(data.message);
}

  };

  return (
  <div className="auth-container">
    <h2>Cadastro</h2>
    <form onSubmit={handleCadastro}>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Cadastrar</button>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </form>

    <style jsx>{`
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
      .mensagem {
        margin-top: 10px;
        color: green;
        font-size: 14px;
      }
    `}</style>
  </div>
);

}
