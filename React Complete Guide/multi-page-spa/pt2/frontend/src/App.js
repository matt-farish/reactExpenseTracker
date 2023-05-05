// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import EventDetailPage from "./Pages/EventDetailPage";
import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import RootLayout from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "events/:eventId", element: <EventDetailPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
