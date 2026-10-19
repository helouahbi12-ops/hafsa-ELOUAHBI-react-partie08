import React from "react";
import { createRoot } from "react-dom/client";
import Message from "./components/message";
import CompteurVisites from "./components/CompteurVisites";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Message />
    <hr />
    <CompteurVisites />
  </div>
);