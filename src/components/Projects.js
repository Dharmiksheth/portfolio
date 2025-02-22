import React from "react";

const Projects = () => {
  return (
    <div className="p-10 bg-gray-100" id="projects">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-xl font-semibold">JobWala</h3>
          <p>AI-powered job portal using React.js, Node.js, and Tailwind CSS.</p>
        </div>
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-xl font-semibold">ExpenseTracker</h3>
          <p>Budget & expense management app with React.js and Local Storage.</p>
        </div>
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p>Personal branding website showcasing my skills & projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
