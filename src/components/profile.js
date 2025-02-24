import React, {useState} from "react";

const Profile = () => { 
 const [darkMode, setDarkMode] = useState(false);
    
    return (   
        <section className={
            `py-20 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`
          } id="Profile">

<div className="max-w-6xl mx-auto text-center px-6 md:px-0">
            <h2 className="text-4xl font-bold mb-6">This is Me </h2>
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

            </section>
     );

}

export default Profile 