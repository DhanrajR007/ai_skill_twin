import { createRootRoute, createRoute } from "@tanstack/react-router";
import App from "../App";
import Home from "../pages/Home";

import Auth from "../pages/Auth";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: Auth,
});

export const routeTree = rootRoute.addChildren([indexRoute, authRoute]);
