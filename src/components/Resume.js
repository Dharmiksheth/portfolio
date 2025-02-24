import React from "react";

const Resume = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-900" id="resume">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Resume</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Below is a detailed view of my skills, experience, and education. You can also download my resume for offline reference.
        </p>
        <a 
          href="/resume.pdf" 
          download 
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
      
      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="space-y-4">
          {[
            { name: "React.js", level: "90%" },
            { name: "JavaScript", level: "85%" },
            { name: "TypeScript", level: "80%" },
            { name: "HTML & CSS", level: "95%" },
            { name: "Software Testing", level: "75%" },
          ].map((skill, index) => (
            <div key={index}>
              <p className="text-lg font-semibold">{skill.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div className={`bg-blue-600 h-4 transition-all duration-1000`} style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
