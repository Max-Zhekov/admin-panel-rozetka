import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./constants/routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path={routes.login.path} element={routes.login.element} />
    </Routes>
  );
};

export default App;
