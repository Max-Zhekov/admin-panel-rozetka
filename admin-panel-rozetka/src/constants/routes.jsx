import Login from "../pages/Login/Login.jsx";
import ProductsPreview from "../pages/ProductsPreview/ProductsPreview.jsx";
import ProductsTable from "../pages/ProductsTable/ProductsTable.jsx";

export const routes = {
  login: {
    element: <Login />,
    path: "/login",
  },
  productsTable: {
    element: <ProductsTable />,
    path: "/productsTable",
  },
  productsPreview: {
    element: <ProductsPreview />,
    path: "/productsPreview",
  },
};
