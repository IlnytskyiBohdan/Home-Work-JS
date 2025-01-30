import Login from "../pages/Login/";
import ProductsPrevie from "../pages/ProductsPrevie";
import ProductsTable from "../pages/ProductsTable";

export const routes = {
  login: {
    element: <Login />,
    path: "/login",
    id: 1,
  },
  products_table: {
    element: <ProductsPrevie />,
    path: "/products-previee",
    id: 2,
  },
  products_previe: {
    element: <ProductsTable />,
    path: "/products-table",
    id: 3,
  },
};
