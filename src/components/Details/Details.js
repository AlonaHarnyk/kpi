import { fetchEvent } from "../../services/eventsApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    fetchEvent(eventId).then(setEvent);
  }, [eventId]);

  console.log(event);

  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="400" />
        </>
      )}
    </>
  );
};
