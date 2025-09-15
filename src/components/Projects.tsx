import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BankShield - Fraud Detection & Prevention System",
      description:
        "A fraud detection and prevention system integrating rule-based anomaly checks with ML classifiers (Random Forest, Logistic Regression) achieving 90%+ accuracy. Includes a secure backend and React.js dashboard for real-time fraud monitoring.",
      image:
        "https://images.pexels.com/photos/3943720/pexels-photo-3943720.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "React.js", "Node.js", "MySQL/MongoDB", "Machine Learning"],
      githubUrl:
        "https://github.com/PrinceZuko10/Bankshield---A-Fraud-Detection-Prevention-System.git",
      liveUrl: "https://github.com/PrinceZuko10/Bankshield---A-Fraud-Detection-Prevention-System.git",
      date: "2024"
    },
    {
      title: "SalesVision - Intelligent Analytics & Forecasting",
      description:
        "A cloud-based sales analytics system centralizing multi-branch data for real-time profit/loss analysis. Implemented predictive models (ARIMA, Linear Regression) with interactive dashboards built using React.js and Chart.js/D3.js.",
      image:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "MySQL", "ARIMA", "Chart.js", "D3.js"],
      githubUrl:
        "https://github.com/PrinceZuko10/SalesVision---Intelligent-Analytics-and-Forecasting.git",
      liveUrl: "https://github.com/PrinceZuko10/SalesVision---Intelligent-Analytics-and-Forecasting.git",
      date: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my key projects that demonstrate my expertise in cloud, full-stack, and machine learning development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/PrinceZuko10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
