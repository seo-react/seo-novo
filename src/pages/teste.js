import Image from 'next/image';

export default function Teste() {
  return (
    <div>
      <Image
        src="/assets/img/hero/ranking.png"
        alt="Teste de imagem"
        width={200}
        height={200}
      />
    </div>
  );
}
