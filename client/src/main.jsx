import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextApi from "./API/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextApi/>
  </BrowserRouter>,
);
