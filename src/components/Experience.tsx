import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Intern",
      company: "IBM",
      location: "Remote",
      duration: "2025",
      type: "Internship",
      description:
        "Worked on developing cloud-native solutions and serverless backend systems, contributing to improved efficiency and operational visibility.",
      achievements: [
        "Developed a cloud-native dashboard for real-time telemetry data (location, speed, fuel, battery), improving operational visibility by 30%",
        "Implemented serverless backend using AWS Lambda, API Gateway, and DynamoDB, reducing infrastructure overhead by 40%"
      ]
    },
    {
      title: "Intern",
      company: "Shri Banke Bihari Educational Society",
      location: "Remote",
      duration: "2023",
      type: "Internship",
      description:
        "Contributed to database automation and reporting systems, enhancing efficiency in educational operations and volunteer management.",
      achievements: [
        "Improved session planning efficiency by 20% by automating volunteer–institution data in a centralized database",
        "Streamlined data collection from 50+ institutions with reporting templates, enabling accurate volunteer assignment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey and hands-on experience in cloud and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-slate-900">{experience.title}</h3>
                    <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {experience.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{experience.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center text-slate-600 space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {experience.description}
              </p>

              <div>
                <h5 className="font-semibold text-slate-900 mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start text-slate-600"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
