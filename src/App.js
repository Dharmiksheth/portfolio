import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Navbar />
      <Home />
      <About />
      <Profile />
      <Projects />
      <Resume />
      <Contact />
      

   </div>
  );
}

export default App;
