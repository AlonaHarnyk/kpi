import axios from "axios";

const KEY = "tIj1kC332ExvV8vs1uBAp1fasaO5ERpG";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";

export async function fetchEvents() {
  const { data } = await axios("events", {
    params: {
      apikey: KEY,
    },
  });
  return data._embedded.events;
}

export async function fetchEvent(id) {
  const { data } = await axios(`events/${id}`, {
    params: {
      apikey: KEY,
    },
  });
  return data;
}
