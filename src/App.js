import { useState, useEffect, useContext } from "react";

import { MoviesGallery } from "./components/MoviesGallery/MoviesGallery";
import Modal from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";
import { Loader } from "./components/Loader/Loader";
import { Notification } from "./components/Notification/Notification";
import { AuthNav } from "./components/AuthNav/AuthNav";

import { moviesMapper } from "./utils/mapper";
import { fetchMovies } from "./services/moviesApi";

import { AuthContext } from "./context/authContext";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentPoster, setCurrentPoster] = useState(null);
  const [isMoviesShown, setIsMoviesShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isMoviesShown) {
      setIsLoading(true);
      fetchMovies()
        .then(({ data: { results } }) => {
          setMovies(moviesMapper(results));
          setError("");
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }

    if (!isMoviesShown) {
      setMovies([]);
      setError("");
    }
  }, [isMoviesShown]);

  const deleteMovie = (moviedId) => {
    setMovies((prevMovies) => prevMovies.filter(({ id }) => id !== moviedId));
  };

  const openModal = (poster) => {
    setCurrentPoster(poster);
  };

  const closeModal = () => {
    setCurrentPoster(null);
  };

  const toggleMoviesVisibility = () => {
    setIsMoviesShown((prevIsMoviesShown) => !prevIsMoviesShown);
  };

  return (
    <>
      <AuthNav />
      {!isAuth ? (
        <Notification text="Login, please!" />
      ) : (
        <>
          <Button
            clickHandler={toggleMoviesVisibility}
            text={isMoviesShown ? "Hide movies" : "Show movies"}
          />
          {isLoading && <Loader />}
          {error && <Notification text={error} error />}
          <MoviesGallery
            movies={movies}
            deleteMovie={deleteMovie}
            openModal={openModal}
          />
          {currentPoster && (
            <Modal currentPoster={currentPoster} closeModal={closeModal} />
          )}
        </>
      )}
    </>
  );
};

export default App;
