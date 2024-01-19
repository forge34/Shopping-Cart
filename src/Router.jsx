import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import CartPage from "./Cart/cart";
import ItemSection from "./item-section/item-section";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<ItemSection></ItemSection>
        },
        {
          path:"cart",
          element:<CartPage></CartPage>
        }
      ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
