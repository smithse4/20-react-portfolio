import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./containers/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
