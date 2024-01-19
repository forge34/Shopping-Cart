import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
