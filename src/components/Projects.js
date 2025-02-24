import React from "react";

const Projects = () => {
  return (
    <section className="py-20 bg-white text-gray-900" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Here are some of the projects I have worked on, showcasing my skills in React.js, JavaScript, and software development.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8">
        {/* JobWala Project */}
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">JobWala</h3>
          <p className="text-lg">
            An AI-powered job portal connecting job seekers with employers.
          </p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Built with React.js, Node.js, and Tailwind CSS</li>
            <li>Implemented smart job recommendations using AI</li>
            <li>Optimized performance and SEO for better visibility</li>
          </ul>
        </div>

        {/* ExpenseTracker Project */}
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">ExpenseTracker</h3>
          <p className="text-lg">
            A budget and expense management app to track savings effectively.
          </p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Developed with React.js and Local Storage</li>
            <li>Implemented CRUD functionality for transaction management</li>
            <li>Added data visualization using Chart.js</li>
          </ul>
        </div>

        {/* Portfolio Website Project */}
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Portfolio Website</h3>
          <p className="text-lg">
            A personal branding website showcasing my skills and projects.
          </p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Designed with React.js and Tailwind CSS</li>
            <li>Implemented SEO best practices for visibility</li>
            <li>Integrated blog section and contact form</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
