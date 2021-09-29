import PageContainer from "components/PageLayout/PageContainer";
import { API } from "hooks/pokemon_api_calls";

const PokemonPage = ({ pokemon }) => {
  return (
    <PageContainer>
      <h2>{pokemon?.name}</h2>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </PageContainer>
  );
};

export async function getStaticProps(context) {
  let result = {};
  const name = context.params.pokemon;
  const pokemon = await API.pokemon.get(name);
  result.pokemon = pokemon;
  return {
    props: result,
  };
}
export async function getStaticPaths() {
  const data = await API.pokemon.full();
  const pokemon = data.results || null;
  // Get the paths we want to pre-render based on posts
  const paths = pokemon.map((item) => ({
    params: { pokemon: item.name },
  }));

  return {
    paths: paths,
    fallback: "blocking", // See the "fallback" section below
  };
}
export default PokemonPage;
