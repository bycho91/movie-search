import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./components/Card";
import GenreFilter from "./components/GenreFilter";
import SearchFilter from "./components/SearchFilter";
import { motion } from "framer-motion";

const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=1`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const CardsContainer = styled(motion.div)`
  padding: 1em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 2em;
`;

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`;

const App = () => {
  const [popular, setPopular] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const movies = await axios
      .get(baseUrl)
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
    console.log(movies);
    setPopular(movies);
    setFiltered(movies);
  };

  if (popular === null) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <FiltersContainer>
        <GenreFilter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          filteredMovies={filtered}
        />
        <SearchFilter
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setFiltered={setFiltered}
          popular={popular}
        />
      </FiltersContainer>
      <CardsContainer layout>
        {filtered.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </CardsContainer>
    </MainContainer>
  );
};

export default App;
