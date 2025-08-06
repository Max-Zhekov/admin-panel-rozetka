import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./constants/routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path={routes.login.path} element={routes.login.element} />
      <Route
        path={routes.productsTable.path}
        element={routes.productsTable.element}
      />
    </Routes>
  );
};

export default App;
