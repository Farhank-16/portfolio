import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Application (MCA)",
    institution: "JECRC University, Jaipur",
    duration: "2024 – 2026",
    cgpa: "CGPA: 9.14",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application (BCA)",
    institution: "University of Rajasthan, Jaipur",
    duration: "2021 – 2024",
    cgpa: "CGPA: 7.11",
  },
];

const About = () => {
  return (
    <main className="w-full px-4 sm:px-6 lg:px-10 mb-20" id="about">
      {/* Section Heading */}
      <section className="flex items-center gap-4 pb-8">
        <hr className="h-1 w-16 bg-gray-700 rounded-full" />
        <p className="font-medium text-xl lg:text-2xl">&lt;About &nbsp;/&gt;</p>
      </section>

      {/* Main Container */}
      <section className="w-full lg:w-[95%] mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE - ABOUT */}
        <div className="lg:w-[58%] w-full card rounded-2xl shadow-sm p-6 lg:p-8 flex flex-col gap-6">
          <p className="lg:text-xl text-lg text-gray-700 leading-relaxed">
            I’m Farhan Khan, a developer driven by the art of functional
            storytelling through code. Currently pursuing my MCA at JECRC
            University, I have spent my time mastering JavaScript and the modern
            web ecosystem.
          </p>

          <p className="lg:text-xl text-lg text-gray-700 leading-relaxed">
            My journey is defined by hands-on experience; from designing
            intuitive user interfaces to architecting intricate server-side
            solutions, I’ve delivered real-world projects that prioritize
            performance and user experience.
          </p>

          <p className="lg:text-xl text-lg text-gray-700 leading-relaxed">
            Every project has helped me understand how frontend elegance and
            backend engineering come together to create impactful digital
            experiences.
          </p>
        </div>

        {/* RIGHT SIDE - EDUCATION */}
        <div className="lg:w-[42%] w-full flex flex-col gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="card shadow-sm rounded-2xl flex flex-col gap-4 p-6 border-l-4 border-emerald-600"
            >
              {/* Degree + Duration */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-snug">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full text-sm font-semibold border border-emerald-200 w-fit">
                  <FaCalendarAlt />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Institution */}
              <div className="flex flex-col gap-3 text-gray-700">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <FaGraduationCap className="text-gray-500" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-md font-medium text-gray-600">{edu.cgpa}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="w-full lg:w-[95%] mx-auto mt-20 flex flex-col gap-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-4">
            <hr className="h-1 w-16 bg-emerald-700 rounded-full hidden sm:block" />
            <p className="font-semibold text-2xl lg:text-3xl text-emerald-800">
              My Coding Journey
            </p>
            <hr className="h-1 w-16 bg-emerald-700 rounded-full hidden sm:block" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            A showcase of my development consistency, open-source activity,
            coding streaks, and contribution history throughout my journey as a
            developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* GitHub Streak Card */}
          <div className="card rounded-2xl shadow-sm p-6 border-l-4 border-emerald-600 flex flex-col items-start gap-4 bg-white hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
            <div className="flex flex-col gap-1 text-left w-full">
              <h3 className="text-xl font-bold text-gray-800">GitHub Streak</h3>
              <p className="text-gray-600 text-sm">
                Tracking my daily coding consistency and continuous days of
                contributions.
              </p>
            </div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Farhank-16&theme=transparent&hide_border=true&title_color=047857&text_color=374151&icon_color=047857&sideNums=374151&sideLabels=374151&ring=047857&fire=047857&currStreakNum=047857"
              alt="Farhan's GitHub Streak"
              className="w-full max-w-md object-contain self-center mt-2"
              loading="lazy"
            />
          </div>

          {/* GitHub Stats Card */}
          <div className="card rounded-2xl shadow-sm p-6 border-l-4 border-emerald-600 flex flex-col items-start gap-4 bg-white hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
            <div className="flex flex-col gap-1 text-left w-full">
              <h3 className="text-xl font-bold text-gray-800">
                Contribution Activity
              </h3>
              <p className="text-gray-600 text-sm">
                A summary of my overall commits, pull requests, and issues
                opened.
              </p>
            </div>
            <img
              src="https://ghchart.rshah.org/9bd068/Farhank-16?show_icons=true&theme=transparent&hide_border=true&title_color=047857&text_color=374151&icon_color=047857&text_bold=false"
              alt="Farhan's GitHub Stats"
              className="w-full max-w-md h-auto object-contain self-center mt-10"
              loading="lazy"
            />
          </div>
        </div>

        {/* GitHub Activity Graph */}
        <div className="w-full card rounded-2xl shadow-sm p-6 border-l-4 border-emerald-600 flex flex-col items-start gap-4 bg-white hover:scale-[1.01] transition-transform duration-300 overflow-hidden mt-2">
          <div className="flex flex-col gap-1 text-left w-full">
            <h3 className="text-xl font-bold text-gray-800">
              Development Overview
            </h3>
            <p className="text-gray-600 text-sm">
              A visual representation of my coding activity and contributions
              over the past months.
            </p>
          </div>
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Farhank-16&bg_color=ffffff00&color=374151&line=047857&point=047857&area=true&hide_border=true"
            alt="Farhan's GitHub Activity Graph"
            className="w-full max-w-4xl object-contain self-center"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
