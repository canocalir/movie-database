import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emptyPhoto from "../../assets/emptymovie.jpg";

const MovieCard = ({ movie }) => {
  let pointColor = null;

  if (movie?.vote_average > 5 && movie?.vote_average < 7) {
    pointColor = "#ffba00";
  } else if (movie?.vote_average > 7) {
    pointColor = "#1db231";
  } else {
    pointColor = "#e0455e";
  }

  return (
    <MovieCardContainer>
      <MovieTitle className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {movie?.title}
      </MovieTitle>
      <MovieImage
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500/` + movie?.poster_path
            : emptyPhoto
        }
        alt="movieImage"
      />
      <Badge style={{ backgroundColor: pointColor }}>
        <h2 className="mb-1 text-xl font-medium text-base-900 light:text-white">
          {movie?.vote_average}
        </h2>
      </Badge>
      <OverviewContainer className="overview">
        <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Overview
        </h2>
        <p>{movie?.overview}</p>
        <Link
            style={{ width: "15rem", height: "100%" }}
            state={{ movie: movie }}
            to={`movie/${movie?.id}`}
          >
        <ButtonLink color={'purple'}>
            Details
        </ButtonLink>
        </Link>
      </OverviewContainer>
    </MovieCardContainer>
  );
};

export default MovieCard;

const ButtonLink = styled(Button)`
  width: 100%;
`

const Badge = styled.div`
  padding: 0.3rem;
  height: fit-content;
  width: 200px;
  text-align: center;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h2 {
    color: #fff;
  }
`;

const MovieTitle = styled.h1`
  font-size: 1.3rem;
  width: 300px;
  height: 3rem;
  text-align: center;
  margin: 0;
`;

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 30rem;
  gap: 1rem;
  background-color: #ececec88;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  position: relative;
  border-radius: 1rem;
  &:hover .overview {
    background-color: #ffffffce;
    opacity: 1;
    -webkit-transition: background-color 0.5s ease-in, opacity 0.5s ease-in;
    transition: background-color 0.5s ease-in, opacity 0.5s ease-in;
  }
`;

const MovieImage = styled.img`
  width: 200px;
  border-radius: 0.4rem;
`;

const OverviewContainer = styled.div`
  background: white;
  position: absolute;
  bottom: 0;
  opacity: 0;
  padding: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  -webkit-transition: background-color 0.5s ease-in, opacity 0.5s ease-in;
  transition: background-color 0.5s ease-in, opacity 0.5s ease-in;
`;
