import React from 'react';
import { Code, Cloud, Briefcase, Award, Layers } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills",
      description:
        "Proficient in C/C++, Java, Python, JavaScript, HTML/CSS, MySQL. Experienced with React, Node.js, and full-stack development."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description:
        "Hands-on with AWS, Azure, GCP. Skilled in Docker, Kubernetes, Jenkins, GitHub Actions, and cloud security foundations."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Industry Experience",
      description:
        "Interned at IBM, developing a cloud-native telemetry dashboard and serverless backend. Also improved database automation at Shri Banke Bihari Educational Society."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Cloud Professional",
      description:
        "AWS Academy Graduate (Cloud Architecting, Security Foundations, Web App Builder) and AWS Cloud Practitioner Essentials certified."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm <span className="font-semibold">Somit Prakash</span>, a Computer Science undergraduate 
              at the University of Petroleum and Energy Studies (UPES), specializing in Cloud Computing 
              and Virtualization Technology.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              My journey in tech has been fueled by curiosity and innovation. From cloud-native solutions 
              to predictive analytics, I love building impactful software.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Beyond academics, I explore new frameworks, work on open-source, and continuously upskill 
              through certifications and real-world problem solving.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Cloud Enthusiast
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{highlight.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
