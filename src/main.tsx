// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "@fontsource/bebas-neue/400.css";
// import "@fontsource-variable/manrope";
// import "./styles.css";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import TimelinePage from "./TimelinePage";
import "@fontsource/bebas-neue/400.css";
import "@fontsource-variable/manrope";
import "./styles.css";

const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {currentPath === "/timeline" ? <TimelinePage /> : <App />}
  </StrictMode>,
);
