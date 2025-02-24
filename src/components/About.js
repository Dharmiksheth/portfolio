import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-900" id="about">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto">
        I am an experienced IT Professional & Web Developer with a strong background in software development, 
        digital marketing, and research analysis. Skilled in React.js, JavaScript, TypeScript, HTML, CSS, 
        and software testing (manual & automation). Passionate about leveraging technology to optimize 
        business operations in the pharmaceutical and IT sectors.
      </p>
    </div>
    
    <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Skills</h3>
        <ul className="list-disc list-inside text-lg">
          <li>React.js, JavaScript, TypeScript</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>Manual & Automation Testing (Selenium)</li>
          <li>Git, GitHub, Version Control</li>
          <li>Digital Marketing & SEO</li>
          <li>Problem-Solving & Critical Thinking</li>
        </ul>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Experience</h3>
        <p className="text-lg"><strong>Research Assistant, Medvac Infotech</strong> - Ahmedabad</p>
        <ul className="list-disc list-inside text-lg mt-2">
          <li>Optimized website structure & SEO rankings</li>
          <li>Conducted market research & competitor analysis</li>
          <li>Assisted in software testing of ERP & CRM solutions</li>
          <li>Created case studies, blog content, and product documentation</li>
        </ul>
      </div>
    </div>
  </section>
  );
};

export default About;