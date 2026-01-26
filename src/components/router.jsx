import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./Layout";
import Loader from "./Loader";

// const Layout = lazy(() => import("./Layout"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Layout />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <layout />
          </Suspense>
        ),
      },
    ],
  },
]);
