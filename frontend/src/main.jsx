import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { routeTree } from "./routing/routingTree.jsx";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const router = createRouter({
  routeTree,
  //   context:{
  //     queryClient,
  //     store
  //   }
});

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
