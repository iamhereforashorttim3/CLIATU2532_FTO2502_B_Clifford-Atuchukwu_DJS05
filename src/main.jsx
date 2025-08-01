import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./detailPage.jsx";
import App from "./App.jsx";

/**
 * Renders the <App /> component inside the DOM element with the "root" id
 */
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
);
