import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Cloud Computing & Virtualization Technology",
      school: "University of Petroleum and Energy Studies (UPES)",
      location: "Dehradun, India",
      duration: "2022 - 2026",
      gpa: "7.35/10.0",
      status: "Pursuing (Expected Graduation: 2026)",
      coursework: [
        "Cloud Computing",
        "Virtualization",
        "Software Development",
        "Data Structures & Algorithms",
        "Database Systems",
        "Computer Networks",
        "Operating Systems"
      ],
      achievements: [
        "Hands-on experience with AWS, Azure, GCP",
        "Practical projects in cloud-native development",
        "Active participation in open-source & team projects"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Academy Graduate – Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      title: "AWS Academy Graduate – Cloud Security Foundations",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      title: "AWS Academy Graduate – Web Application Builder",
      issuer: "Amazon Web Services",
      date: "2025"
    },
    {
      title: "Digital Classroom – Architecting on AWS",
      issuer: "Amazon Web Services",
      date: "2025"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                    <h4 className="text-md font-medium text-slate-700 mb-2">
                      Specialization: {edu.specialization}
                    </h4>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{edu.school}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-slate-600 space-y-1 sm:space-y-0 sm:space-x-4 mb-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-slate-600 mb-2">{edu.status}</p>
                    <p className="font-semibold text-slate-900">CGPA: {edu.gpa}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-blue-600" />
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-blue-600" />
                      Highlights
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start text-slate-600 text-sm"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg mr-3">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">{cert.title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-slate-600 text-sm">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
