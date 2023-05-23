import { React } from "react";
import Home from "../routes/Home";
import { HashRouter as Router, Route,Routes} from "react-router-dom";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" exact component={Detail}></Route>
      </Routes>
    </Router>
  );
}

export default App;
