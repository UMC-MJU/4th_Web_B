import Header from './Header';
import Page from './Page';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= "/header" element={<Header/>}></Route>
          <Route path = "/login" element = {<Login/>}></Route>
          <Route path= "/" element={<Page/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
