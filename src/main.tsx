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

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     {currentPath === "/timeline" ? <TimelinePage /> : <App />}
//   </StrictMode>,
// );


const root = createRoot(document.getElementById("root")!);

const renderPage = () => {
  root.render(
    <StrictMode>
      {currentPath === "/timeline" ? <TimelinePage /> : <App />}
    </StrictMode>,
  );
};

if (currentPath === "/timeline") {
  Promise.allSettled([
    document.fonts.load('400 1em "Bebas Neue"'),
    document.fonts.load('400 1em "Manrope Variable"'),
    document.fonts.load('800 1em "Manrope Variable"'),
  ]).then(renderPage);
} else {
  renderPage();
}
