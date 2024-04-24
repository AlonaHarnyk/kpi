import { useFetchEvent } from "../hooks/useFetchEvent";
import { useNavigate, useLocation } from "react-router-dom";

export const DetailsPage = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <button onClick={() => navigate(location?.state?.from ?? "/")}>
        Go back
      </button>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="400" />
          <p>Genre: {event.classifications[0].genre.name}</p>
          <p>Subgenre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
