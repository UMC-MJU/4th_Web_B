import "./index.scss";
import DetailPage from "./page/DetailPage";
import MainPage from "./page/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./page/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/detailPage"} element={<DetailPage />}></Route>
          <Route path={"/weather"} element={<Weather />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
