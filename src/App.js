import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Customers from "./pages/customers/Customers";
import { userInputs, productInputs } from "./formData";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Pvendor from "./pages/purchasevendors/Pvendor";
import Settings from "./pages/settings/Settings";
import Porder from "./pages/purchaseorders/Porder";
import NewSupplier from "./pages/newSupplier/NewSupplier";
import NewPOrder from "./pages/newPOrder/NewPOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path : "/vendor",
    element: <Pvendor />
  },
  {
    path : "/addsupplier",
    element: <NewSupplier />
  },
  {
    path : "/addorder",
    element: <NewPOrder />
  },
  {
    path: "/users/:userId",
    element: <Single />,
  },
  {
    path: "/products/:productId",
    element: <Single />,
  },
  {
    path: "/users",
    element: <Customers />,
  },
  {
    path: "/inventory",
    element: <Product />,
  },
  {
    path: "/orders",
    element: <Porder />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/users/:userId/new",
    element: <New inputs={userInputs} title={"Add New User"} />,
  },
  {
    path: "/products/:productId/new",
    element: <New inputs={productInputs} title={"Add New Product"} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;