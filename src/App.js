import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom"
import Rout from "./components/Rout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
