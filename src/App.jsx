import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigations from "./layouts/Navigations";
import Kuesioner from "./pages/Kuesioner";
import Responden from "./pages/Responden";
import Rekapitulasi from "./pages/Rekapitulasi";
import TotalSkor from "./pages/TotalSkor";
import TotalIndex from "./pages/TotalIndex";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main className="main">
      <div className="container">
        <BrowserRouter>
          <Navigations />
          <Routes>
            <Route path="/Kuesioner" element={<Kuesioner />} />
            <Route path="/Responden" element={<Responden />} />
            <Route path="/Rekapitulasi" element={<Rekapitulasi />} />
            <Route path="/Total/Skor" element={<TotalSkor />} />
            <Route path="/Total/Index" element={<TotalIndex />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};

export default App;
