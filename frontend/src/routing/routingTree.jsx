import { createRootRoute, createRoute } from "@tanstack/react-router";
import App from "../App";
import Home from "../components/Home";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const routeTree = rootRoute.addChildren([indexRoute]);
