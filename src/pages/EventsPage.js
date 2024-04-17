import { useEffect, useState } from "react";
import { fetchEvents } from "../services/eventsApi";
import { Link, Outlet } from "react-router-dom";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  console.log(events);
  return (
    <>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
