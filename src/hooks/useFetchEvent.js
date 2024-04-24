import { fetchEvent } from "../services/eventsApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    fetchEvent(eventId).then(setEvent);
  }, [eventId]);

  return event;
};
