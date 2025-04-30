import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";

// Wrap the app with AnimatePresence for page transitions
createRoot(document.getElementById("root")!).render(
  <AnimatePresence mode="wait">
    <App />
  </AnimatePresence>
);
