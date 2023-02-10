import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import Contact from "./routes/contact";
import NewContact from "./routes/newContact";
import EditContact from "./routes/editContact";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/new",
    element: <NewContact />,
  },
  {
    path: "contacts/edit/:contactId",
    element: <EditContact />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Footer />
  </>
);
