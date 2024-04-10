
export const MoviesGallery = ({ movies, deleteMovie, openModal }) => {

  return (
    <ul>
      {movies.map(({ title, votes, id, poster }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>Votes: {votes}</p>
            <button onClick={() => deleteMovie(id)}>Delete</button>
            <button onClick={() => openModal({ src: poster, alt: title })}>
              Open modal
            </button>
          </li>
        );
      })}
    </ul>
  );
};
