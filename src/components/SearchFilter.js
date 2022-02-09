import React, { useEffect } from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import axios from "axios";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  font-size: 1.5rem;
  border-bottom: 1px solid whitesmoke;
`;

const SearchFilter = ({ setSearchTerm, searchTerm, popular, setFiltered }) => {
  useEffect(() => {
    if (searchTerm === "") {
      setFiltered(popular);
      return;
    }
    fetchMovies();
  }, [searchTerm]);

  const fetchMovies = async () => {
    const movies = await axios
      .get(
        `
      https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      )
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
    console.log(movies);
    setFiltered(movies);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };
  return (
    <SearchContainer>
      <FcSearch size="2rem" />
      <Input
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => handleChange(e)}
      />
    </SearchContainer>
  );
};

export default SearchFilter;
