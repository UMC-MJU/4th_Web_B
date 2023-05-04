import './App.css';
import Header from './Header';
import Page from './page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <div className="home">
        <Page/>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
