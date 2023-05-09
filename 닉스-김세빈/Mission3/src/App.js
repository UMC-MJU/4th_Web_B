import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
