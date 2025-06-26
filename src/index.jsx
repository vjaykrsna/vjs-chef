import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Header.jsx";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
    <>
        <Header />
        <App />
    </>
);
