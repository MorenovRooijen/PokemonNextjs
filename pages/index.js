import PageContainer from "components/PageLayout/PageContainer";
import { getPokemon } from "hooks/pokemon_api_calls";
import { useEffect } from "react";
const Home = ({ text }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getPokemon().then((result) => {
      setPokemon(result);
    });
  }, []);
  return (
    <>
      <PageContainer>
        <>{JSON.stringify(pokemon)}</>
      </PageContainer>
    </>
  );
};

export async function getStaticProps(context) {
  let result = {};
  result.text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, rerum.";
  return {
    props: result,
    revalidate: 60, // In seconds
  };
}
export default Home;
