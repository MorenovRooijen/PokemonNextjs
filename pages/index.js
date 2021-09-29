import PageContainer from "components/PageLayout/PageContainer";
import { API } from "hooks/pokemon_api_calls";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const Home = ({ text }) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    API.pokemon.list().then((data) => {
      console.log(
        "%c Data from API.pokemon.list",
        "background: #dedede; color: blue",
        data
      );
      const pokemon_list = data.results;
      setPokemon(pokemon_list);
    });
  }, []);
  return (
    <>
      <PageContainer>
        <Row className="pokemon_container">
          {pokemon &&
            pokemon.map((pokemon) => {
              return (
                <Col sm={6} md={4}>
                  <Link href={"/pokemon/" + pokemon.name} shallow>
                    <div className="pokemon">{pokemon.name}</div>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </PageContainer>
      <style jsx global>{`
        .pokemon_container {
          .pokemon {
            padding: 1rem;
            cursor: pointer;
          }
        }
      `}</style>
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
