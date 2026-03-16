import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Optimized from "./Optimized.jsx";

createRoot(document.getElementById("root")).render(<Optimized />);
