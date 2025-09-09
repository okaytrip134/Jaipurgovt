import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/nav";
import Home from "./Pages/Home/Home";
import Footer from "./Component/footer";
import Loader from "./Component/Loader";
import MobileNavbar from "./Component/MobileNavbar";
import InvolvedDetail from "./Pages/Home/InvolvedDetails";
// OPTIONAL: agar tum list page alag chahte ho
// import GetInvolved from "./Pages/Home/GetInvolved";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <MobileNavbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agar tumhara GetInvolved listing page alag hai to use enable karo */}
        {/* <Route path="/involved" element={<GetInvolved />} /> */}
        <Route path="/involved/:slug" element={<InvolvedDetail />} />
        {/* 404 fallback chahiye to: */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
