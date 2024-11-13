import logo from "./logo.svg";
import "./App.css";
import Router from "./routers";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./component/dialog";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
