import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { SearchPage } from "./pages/SearchPage";
import { DetailsPage } from "./pages/DetailsPage";
import { Details } from "./components/Details/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":eventId" element={<Details />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":eventId" element={<Details />} />
        </Route>
        <Route path='events/:eventId/details' element={<DetailsPage />} />
        <Route path='search/:eventId/details' element={<DetailsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
