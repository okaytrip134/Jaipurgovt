import React, { useState, useEffect } from "react";
import Navbar from "./Component/nav";
import Home from "./Pages/Home/Home";
import Footer from "./Component/footer";
import Loader from "./Component/Loader";
import MobileNavbar from "./Component/MobileNavbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : (
        <>
        <MobileNavbar/>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
