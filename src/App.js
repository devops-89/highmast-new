import Router from "./routers";
import { useEffect } from "react"; // Ensure useEffect is imported
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./component/dialog";
import "aos/dist/aos.css"; // Ensure AOS styles are imported
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      // delay: 500,
      mirror: false,
    });
    AOS.refresh(); // Ensures animations apply to all elements
  }, []); // Add the dependency array to ensure it runs only once

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
