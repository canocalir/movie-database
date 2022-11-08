import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavbarMain from "../components/Navbar/Navbar";

const MovieDetail = () => {
  let pointColor = "";
  const [videoData, setVideoData] = useState([]);

  const {
    state: { movie },
  } = useLocation();
  const navigate = useNavigate();

  const {
    poster_path,
    original_title,
    overview,
    id,
    vote_average,
    vote_count,
    release_date,
  } = movie;

  const posterImage = `https://image.tmdb.org/t/p/w1280${poster_path}`;

  const fetchVideoHandler = async () => {
    const url =
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=` +
      process.env.REACT_APP_MOVIE_API_KEY +
      `&language=en-US`;
    const res = await fetch(url);
    const data = await res.json();
    setVideoData(data?.results);
  };

  useEffect(() => {
    fetchVideoHandler();
  }, []);

  const videoKey = videoData?.filter((video) => {
    return (
      video?.name === "Official Trailer" || video?.name === "Official Promo"
    );
  });

  const videoUrl = `https://www.youtube.com/embed/${videoKey[0]?.key}?controls=0`;

  if (movie?.vote_average > 5 && movie?.vote_average < 7) {
    pointColor = "#ffba00";
  } else if (movie?.vote_average > 7) {
    pointColor = "#1db231";
  } else {
    pointColor = "#e0455e";
  }

  return (
    <>
      <NavbarMain />
      <DetailMainContainer>
        <PosterContainer>
          <Poster src={posterImage} alt="" />
        </PosterContainer>
        <MiddleContainer>
          <VideoContainer className="relative h-0 overflow-hidden max-w-full ">
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
          <TitlePointContainer>
            <Heading>{original_title}</Heading>
            <Point style={{ color: pointColor }}>{vote_average}</Point>
          </TitlePointContainer>
          <UpperInformation>
            <h5 className="text-xl font-medium tracking-tight text-purple-900 dark:text-white">
              <span className="text-gray-900">Total Votes:</span> {vote_count}
            </h5>
            <h5 className="text-xl font-medium tracking-tight text-red-900 dark:text-white">
              <span className="text-gray-900">Release Date:</span>{" "}
              {release_date}
            </h5>
          </UpperInformation>
          <Description>{overview}</Description>
          <Link to={'/'}> <ButtonLink color={'purple'}>
            Go Back</ButtonLink></Link>
        </MiddleContainer>
      </DetailMainContainer>
    </>
  );
};

export default MovieDetail;

const Poster = styled.img`
  height: 80%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media (max-width: 1200px) {
    width: 20rem;  
  }
`;

const ButtonLink = styled(Button)`
  width: 100%;
`

const UpperInformation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #ffff;
  padding: 1rem;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 37%;
  iframe{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 1rem;
  }
`;

const TitlePointContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
`;
const Point = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const PosterContainer = styled.div`
  width: 32%;
  display: flex;
  justify-content: center;
  margin: 0;
  img {
    border-radius: 1rem;
  }
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

const DetailMainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  gap: 2rem;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1rem;
  padding: 0.5rem;
  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
`;
