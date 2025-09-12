// pages/dashboard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const logado = localStorage.getItem('usuarioLogado');
    if (!logado) {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao painel</h1>
      <p>Você está logado!</p>
    </div>
  );
}
