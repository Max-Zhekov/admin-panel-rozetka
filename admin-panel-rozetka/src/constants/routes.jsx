import Login from "../pages/Login/Login.jsx";
import ProductsPreview from "../pages/ProductsPreview/ProductsPreview.jsx";
import ProductsTablePage from "../pages/ProductsTable/ProductsTable.jsx";

export const routes = {
  login: {
    element: <Login />,
    path: "/login",
  },
  productsTable: {
    element: <ProductsTablePage />,
    path: "/productsTable",
  },
  productsPreview: {
    element: <ProductsPreview />,
    path: "/productsPreview",
  },
};
