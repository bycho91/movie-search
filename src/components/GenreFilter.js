import React, { useEffect } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  margin: 1em 0;
  display: flex;
  align-items: center;
  gap: 2em;
`;

const Title = styled.h3``;

const GenreOptions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
`;

const Option = styled.button`
  font-weight: 700;
  background: ${(props) => (props.active ? "black" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: 1px solid gray;
  padding: 0.6em 1.5em;
  margin-right: 1.5em;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: lightgray;
    color: white;
  }
`;

const GenreFilter = ({
  popular,
  setFiltered,
  setActiveGenre,
  activeGenre,
  filteredMovies,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filtered = filteredMovies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <FilterContainer>
      <Title>Filter by genre:</Title>
      <GenreOptions>
        <Option
          active={activeGenre === 0 ? true : false}
          onClick={() => setActiveGenre(0)}
        >
          All
        </Option>
        <Option
          active={activeGenre === 35 ? true : false}
          onClick={() => setActiveGenre(35)}
        >
          Comedy
        </Option>

        <Option
          active={activeGenre === 28 ? true : false}
          onClick={() => setActiveGenre(28)}
        >
          Action
        </Option>
      </GenreOptions>
    </FilterContainer>
  );
};

export default GenreFilter;
