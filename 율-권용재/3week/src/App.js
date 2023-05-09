import './App.css';
import Header from './Header';
import Page from './Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Page/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
