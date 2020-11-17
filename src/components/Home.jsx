import React, { useState } from "react";

// API Variables
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../API";

// Components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

// Custom Hook
import { useHomeFetch } from "./hooks/custom/useHomeFetch";

// Images
import NoImage from "../assets/no_image.jpg";
import TMDBLogo from "../assets/tmdb_logo.svg";

// Styled Components
import { StyledFooter, StyledTMDBLogo } from "./styles/StyledFooter";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;
  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}

      <SearchBar callback={searchMovies} />

      <StyledFooter>
        <div className="footer" align="right">
          <a href="https://www.themoviedb.org/">
            <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
          </a>
          <small>
            Crafted with <a href="https://reactjs.org/">React.</a>
            <br />
            by Breno Rocha - GitHub
            <a href="https://github.com/git-BR">@git-BR</a>
          </small>
        </div>
      </StyledFooter>
    </>
  );
};

export default Home;
