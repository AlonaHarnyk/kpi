import { useSearchParams } from "react-router-dom";
import { fetchEventsByName } from "../services/eventsApi";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get("eventName");
  const location = useLocation();

  useEffect(() => {
    if (eventName) {
      fetchEventsByName(eventName).then(setEvents);
    }
  }, [eventName]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ eventName: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={id} state={{ from: location }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
