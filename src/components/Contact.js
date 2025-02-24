import React, { useState } from "react";

    const Contact = () => {
      const [darkMode, setDarkMode] = useState(false);
    
      return (
        <section className={
          `py-20 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`
        } id="contact">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-0">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Feel free to reach out for collaborations, job opportunities, or just to connect!
            </p>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </button>
          </div>
          
          <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
            {/* Contact Information */}
            <div className={`p-6 shadow-md rounded-lg text-center md:text-left ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
              <h3 className="text-2xl font-semibold mb-3">Contact Details</h3>
              <p className="text-lg">📩 Email: <a href="mailto:shethdharmik3@gmail.com" className="text-blue-400 hover:underline">shethdharmik3@gmail.com</a></p>
              <p className="text-lg">📞 Phone: <a href="tel:+917779055445" className="text-blue-400 hover:underline">+91 7779055445</a></p>
            </div>
    
            {/* Social Links */}
            <div className={`p-6 shadow-md rounded-lg text-center md:text-left ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
              <h3 className="text-2xl font-semibold mb-3">Social Links</h3>
              <p className="text-lg">🌐 LinkedIn: <a href="https://www.linkedin.com/in/dharmik-sheth-704baa344/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BsI%2BzERqWQkCB9%2Fc6YIuyvA%3D%3D" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Dharmik Sheth</a></p>
            </div>
            {/* Git / GIthub links */}
            <div className={`p-6 shadow-md rounded-lg text-center md:text-left ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
              <h3 className="text-2xl font-semibold mb-3">Social Links</h3>
              <p className="text-lg">🌐 GIt: <a href="https://github.com/Dharmiksheth/portfolio" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Dharmik Sheth</a></p>
            </div>

          </div>
       


        </section>
       
  );
  
};

export default Contact;
