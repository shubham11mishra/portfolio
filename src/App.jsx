import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about-me",
    Component: AboutMePage,
  },
  {
    path: "/contact-me",
    Component: ContactMePage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
