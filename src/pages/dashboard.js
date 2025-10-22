import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // ✅ Validação do token para evitar "Wrong number of segments"
    if (!token || !token.includes('.') || token.split('.').length !== 3) {
      console.error('Token inválido:', token);
      setErro('Token inválido. Faça login novamente.');
      router.push('/login');
      return;
    }

    fetch('https://cms.seorocket.com.br/wp-json/wp/v2/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Token inválido ou expirado');
        return res.json();
      })
      .then((data) => setUsuario(data))
      .catch((err) => {
        console.error(err);
        setErro('Erro ao carregar usuário');
        router.push('/login');
      });
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', padding: 20 }}>
      <h1>Dashboard</h1>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {usuario ? (
        <p>Bem-vindo, <strong>{usuario.name}</strong></p>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
      <button
        onClick={() => {
          localStorage.removeItem('token');
          router.push('/login');
        }}
        style={{ marginTop: 20 }}
      >
        Sair
      </button>
    </div>
  );
}
