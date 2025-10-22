import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Simulador() {
  const [tokenValido, setTokenValido] = useState(false);
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token || !token.includes('.') || token.split('.').length !== 3) {
      router.push('/login');
      return;
    }

    fetch('https://cms.seorocket.com.br/wp-json/wp/v2/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        setTokenValido(true);
        carregarPerguntas();
      })
      .catch(() => router.push('/login'));
  }, []);

    const carregarPerguntas = () => {
    const lista = [
      {
        id: 1,
        pergunta: 'O que é o DOM no JavaScript?',
        opcoes: ['Banco de dados', 'Modelo de objeto do documento', 'Framework', 'API de rede'],
        correta: 1,
      },
      {
        id: 2,
        pergunta: 'Qual comando inicia um projeto React?',
        opcoes: ['npm start', 'npm init react-app', 'npx create-react-app', 'react new'],
        correta: 2,
      },
      {
        id: 3,
        pergunta: 'O que é uma Promise?',
        opcoes: ['Função assíncrona', 'Objeto que representa uma operação futura', 'Callback', 'Loop'],
        correta: 1,
      },
    ];
    setPerguntas(lista);
  };

  return (
  <div className="simulador-container">
    <h2>Simulador de Entrevista Técnica</h2>

    {tokenValido && perguntas.length > 0 ? (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let acertos = 0;
          perguntas.forEach((p) => {
            if (respostas[p.id] === p.correta) acertos++;
          });
          setResultado(`Você acertou ${acertos} de ${perguntas.length} perguntas.`);
        }}
      >
        {perguntas.map((p) => (
          <div key={p.id} className="pergunta">
            <p><strong>{p.pergunta}</strong></p>
            {p.opcoes.map((opcao, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name={`pergunta-${p.id}`}
                  value={idx}
                  onChange={() =>
                    setRespostas((prev) => ({ ...prev, [p.id]: idx }))
                  }
                  required
                />
                {opcao}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Finalizar</button>
      </form>
    ) : (
      <p>Carregando perguntas...</p>
    )}

    {resultado && <p className="resultado">{resultado}</p>}

    <style jsx>{`
      .simulador-container {
        max-width: 600px;
        margin: 50px auto;
        padding: 30px;
        background: #f9f9f9;
        border-radius: 12px;
        box-shadow: 0 0 20px rgba(0,0,0,0.05);
      }
      h2 {
        text-align: center;
        margin-bottom: 30px;
        color: #333;
      }
      .pergunta {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin: 5px 0;
        font-size: 15px;
      }
      button {
        margin-top: 20px;
        padding: 12px;
        background: #0070f3;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
      }
      .resultado {
        margin-top: 30px;
        font-size: 18px;
        color: green;
        text-align: center;
      }
    `}</style>
  </div>
);
}