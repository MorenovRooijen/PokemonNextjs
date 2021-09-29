import PageContainer from "components/PageLayout/PageContainer";
import Pageinate from "components/PageLayout/Pageinate";
import { API } from "hooks/pokemon_api_calls";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

// let current_page = localStorage.getItem("page") ?? 0;

const Home = ({ text }) => {
  const [page, setPage] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [total_pokemon, setCount] = useState([]);
  useEffect(() => {
    API.pokemon.paginated(page).then((data) => {
      console.log(
        "%c Data from API.pokemon.list",
        "background: #dedede; color: blue",
        data
      );
      const pokemon_list = data.results;
      const total_pokemon = data.count;
      setPokemon(pokemon_list);
      setCount(total_pokemon);
    });
  }, [page]);

  useEffect(() => {
    setPage(localStorage.getItem("page") ?? 0);
  }, []);

  function previous_count() {
    const new_page = parseInt(page) - 1;
    if (new_page >= 0) {
      setPage(new_page);
      localStorage.setItem("page", new_page);
    }
  }

  function next_count() {
    const last_page = Math.ceil(total_pokemon / 20);
    const new_page = parseInt(page) + 1;
    if (new_page < last_page) {
      setPage(new_page);
      localStorage.setItem("page", new_page);
    }
  }

  function page_one() {
    const new_page = 0;
    setPage(new_page);
    localStorage.setItem("page", new_page);
  }

  function page_last(last_page) {
    if (parseInt(last_page) > 0) {
      setPage(last_page - 1);
    }
  }

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
        <Pageinate
          current_page={page}
          total_pokemon={total_pokemon}
          previous_function={previous_count}
          next_function={next_count}
          page_one={page_one}
          page_last={page_last}
          className="pokemon_pager"
        ></Pageinate>
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
