import { useEffect, useState } from "react";
import { fetchEvents } from "../services/eventsApi";
import { Link, Outlet, useLocation } from "react-router-dom";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation()
    console.log(location);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  console.log(events);
  return (
    <>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={id} state={{from: location}}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
