import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokeState } from "./state/state";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <PokeState>
      <App />
    </PokeState>
  </div>
);
