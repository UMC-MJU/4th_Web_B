import { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

function Home() {
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovie(json.data.movies);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Container>
      <Title>Movie</Title>
      <MovieList>
        {movie.map((movies) => (
          <Movie
            key={movies.id}
            id={movies.id}
            pic={movies.medium_cover_image}
            title={movies.title}
            summary={movies.summary}
            genres={movies.genres}
          />
        ))}
      </MovieList>
    </Container>
  );
}

export default Home;
