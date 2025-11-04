import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Resultados da busca</h1>
      <p>Você pesquisou por: <strong>{query}</strong></p>
    </div>
  );
};

export default SearchPage;
