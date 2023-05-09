import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
