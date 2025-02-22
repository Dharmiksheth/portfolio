import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-2xl font-bold">Dharmik Sheth</h1>
      <div>
        <a href="#about" className="mr-4">About</a>
        <a href="#projects" className="mr-4">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
