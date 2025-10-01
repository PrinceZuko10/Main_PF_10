import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        
        {/* Intro + Profile side by side */}
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-16">
          
          {/* Intro + Socials + Buttons (left) */}
          <div className="md:text-left space-y-6 max-w-2xl">
            {/* Intro Text */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Somit Prakash
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-300">
                Computer Science Student | Cloud & Full-Stack Enthusiast
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Pursuing B.Tech in Computer Science (Cloud Computing & Virtualization Technology) at UPES. 
                Passionate about building cloud-native solutions, scalable systems, and innovative applications.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/PrinceZuko10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/somit-prakash-524067284"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:somityadav10@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Me
              </button>
              <a
  href="https://drive.google.com/file/d/1kLIiYIBtpXlLYgwhcHtpJr64VsXkUvX1/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
>
  View Resume
</a>


            </div>
          </div>

          {/* Profile Image (right, bigger) */}
          <div className="mt-8 md:mt-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-2xl flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="https://i.postimg.cc/50c0KLfY/Final-photo.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
