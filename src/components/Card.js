import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  padding: 1em;
`;

const Image = styled.img`
  width: 100%;
  height: 40vh;
  min-height: 400px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

const VoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
`;

const Card = ({
  movie: {
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
  },
}) => {
  return (
    <CardContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Title>{title}</Title>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <VoteContainer>
        <p>
          <strong>Rating:</strong> {vote_average}
        </p>
        <p>{vote_count} votes</p>
      </VoteContainer>
    </CardContainer>
  );
};

export default Card;
