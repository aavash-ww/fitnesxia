import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Errorboundary from "./Errorboundary";
import "./index.css";
import App from "./App.jsx";




createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ChakraProvider  >
        <Errorboundary fallback="Error Occured">

        <App />
        </Errorboundary>
      </ChakraProvider>
    </StrictMode>
  </BrowserRouter>
);
