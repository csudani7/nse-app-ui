import MainLayout from "./layout/MainLayout";
import AccountLayout from "./layout/AccountLayout";

import { withAuth } from "./hoc";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Positions from "./pages/Positions";
import Holdings from "./pages/Holdings";
import Funds from "./pages/Funds";
import Apps from "./pages/Apps";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  {
    path: "/account",
    component: AccountLayout,
    routes: [
      {
        path: "/account",
        exact: true,
        component: Login,
        key: "account",
      },
      {
        path: "/account/login",
        exact: true,
        component: Login,
        key: "login",
      },
      {
        path: "/account/sign-up",
        exact: true,
        component: SignUp,
        key: "sign-up",
      },
      {
        path: "*",
        component: NotFoundPage,
        key: "not-found",
      },
    ],
  },
  {
    path: "/",
    component: withAuth(MainLayout),
    routes: [
      {
        path: "/",
        exact: true,
        component: Dashboard,
        key: "dashboard",
      },
      {
        path: "/dashboard",
        exact: true,
        component: Dashboard,
        key: "dashboard",
      },
      {
        path: "/orders",
        exact: true,
        component: Orders,
        key: "Orders",
      },
      {
        path: "/holdings",
        exact: true,
        component: Holdings,
        key: "holdings",
      },
      {
        path: "/positions",
        exact: true,
        component: Positions,
        key: "positions",
      },
      {
        path: "/funds",
        exact: true,
        component: Funds,
        key: "funds",
      },
      {
        path: "/apps",
        exact: true,
        component: Apps,
        key: "apps",
      },
      {
        path: "*",
        component: NotFoundPage,
        key: "not-found",
      },
    ],
  },
];

/**
 * Generate Route
 * @param {string} key route key
 * @param {array} routes routes array
 * @returns {string} url
 */
const generateRoute = (key, mainRoutes = routes) => {
  let url = false;
  mainRoutes.some((i) => {
    if (i.key === key && !url) {
      url = i.path;
    } else if (i.routes) {
      url = generateRoute(key, i.routes);
    }
    return url;
  });

  return url;
};

export { routes, generateRoute };
