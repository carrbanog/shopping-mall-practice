import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom"
import Rout from "./components/Rout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </div>
  );
}

export default App;
