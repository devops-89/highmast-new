import Router from "./routers";
import { useEffect } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./component/dialog";
import "aos/dist/aos.css"; 
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      mirror: false, 
    });
    AOS.refresh(); 
  }, []); 
  return (
 
      <div className="App">
        {/* Main Application Routes */}
        <Router />

        {/* Example Modal Component (if required) */}
        <Modal />
      </div>

  );
}

export default App;
