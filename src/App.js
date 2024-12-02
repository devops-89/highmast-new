import Router from "./routers";
import { useEffect } from "react"; // Ensure useEffect is imported
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./component/dialog";
import Aos from "aos"; // Ensure Aos is imported
import "aos/dist/aos.css"; // Ensure AOS styles are imported

function App() {
  useEffect(() => {
    Aos.init({
      // delay: 500,
      mirror: false,
    });
  }, []); // Add the dependency array to ensure it runs only once

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
