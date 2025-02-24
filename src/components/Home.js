import React from "react";


const Navbar = () => {
  return (
    <nav className="h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
       <div>
        <a href="#about" className="mr-4 hover:text-blue-400">About</a>
        <a href="#projects" className="mr-4 hover:text-blue-400">Projects</a>
        <a href="#resume" className="mr-4 hover:text-blue-400">Resume</a>
        <a href="#Profile" className="mr-4 hover:text-blue-400">Profile</a>
        <a href="#contact" className="mr-4 hover:text-blue-400">Contact</a>
      </div>
    
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Dharmik Sheth</h1>
      <p className="text-xl max-w-2xl">
        Experienced IT Professional & Web Developer with expertise in React.js, JavaScript, TypeScript, and software testing.
        Passionate about creating innovative solutions and optimizing business operations in the IT and pharmaceutical sectors.
      </p>
      <div className="mt-6">
        <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300">View My Work</a>
       
      </div>
    </section>
  

    </nav>
    
  );
};

export default Navbar;
