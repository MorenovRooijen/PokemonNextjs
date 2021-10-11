import PageContainer from "components/PageLayout/PageContainer";
import PokemonImage from "components/PokemonImage";
import { API } from "hooks/pokemon_api_calls";
import { useEffect, useState } from "react";

const PokemonPage = ({ pokemon }) => {
  const [species, setSpecies] = useState(null);
  const [evolution, setEvolution] = useState(null);
  useEffect(() => {
    console.log(pokemon.id);
    API.species.get(pokemon.id).then((species) => {
      console.log("species", species);
      setSpecies(species);
      API.evolution.get(species.id).then((data) => {
        console.log("evolution", data);
        setEvolution(data);
      });
    });
  }, []);
  return (
    <PageContainer>
      <h2>{pokemon?.name}</h2>
      <PokemonImage
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <div className="container">
        <div className="label">Height</div>
        <div className="value">{pokemon.height}</div>
        <div className="label">Weight</div>
        <div className="value">{pokemon.weight}</div>
        <div className="label">Types</div>
        <div className="value">
          {pokemon.types.map((variation_item) => {
            console.log(variation_item);
            return <div className="type">{variation_item.type.name}</div>;
          })}
        </div>
        {species && (
          <>
            <div className="label">Area</div>
            <div className="value">{species?.habitat?.name}</div>
          </>
        )}
        {evolution?.chain && evolution?.chain?.evolves_to && (
          <>
            <div className="label">Evolves to</div>
            <div className="evolution">
              {evolution?.chain?.evolves_to.map((evolution) => {
                return (
                  <>
                    {evolution.species.name}
                    {evolution?.evolves_to && (
                      <>
                        {evolution?.evolves_to.map((evolution2) => {
                          return "-" + evolution2.species.name;
                        })}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: auto 1fr;
          .label {
            font-weight: bold;
            padding-right: 0.5rem;
          }
          .type {
            background: grey;
            border-radius: 1rem;
            width: fit-content;
            padding: 0.2rem 0.5rem;
          }
        }
      `}</style>
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
