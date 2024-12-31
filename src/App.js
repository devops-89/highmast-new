import Router from "./routers";
import { useEffect } from "react"; // Ensure useEffect is imported
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./component/dialog";
import "aos/dist/aos.css"; // Ensure AOS styles are imported
import AOS from "aos";


function App() {
  useEffect(() => {
    AOS.init({
      mirror: false, // Set mirror to false for better control over animations
    });
    AOS.refresh(); // Refresh to ensure animations apply to all elements
  }, []); // Dependency array to run only once on mount

  return (
    <div className="App">
     
      {/* Video Section */}
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="/header/header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Application Routes */}
      <Router />

      {/* Example Modal Component (if required) */}
      <Modal />
    </div>
  );
}

export default App;
