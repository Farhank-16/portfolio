import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    role: "Full Stack Development Intern",
    company: "Car Dekho Group",
    duration: "05/2026 – Present",
    location: "Jaipur, Rajasthan",
  },
  {
    id: 2,
    role: "Full Stack Development Intern",
    company: "Deltaware Solutions Pvt. Ltd.",
    duration: "02/2026 – 04/2026",
    location: "Remote",
  },
];

const Experience = () => {
  return (
    <main
      className="lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 mb-10"
      id="experience"
    >
      <section className="flex items-center gap-4 pt-2">
        <hr className="h-1 w-12 bg-gray-600 rounded-full" />
        <p className="text-2xl font-medium">&lt;My Experience &nbsp;/&gt;</p>
      </section>

      <section className="flex  flex-col gap-6 p-2 lg:p-4">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="card shadow-sm rounded-2xl flex flex-col gap-4 py-8 px-6 w-full lg:w-4/5 mx-auto border-l-4 border-emerald-600 hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full text-sm font-semibold border border-emerald-200">
                <FaCalendarAlt />
                <span>{exp.duration}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-4 text-gray-700">
              <div className="flex items-center gap-2 text-lg font-medium">
                <FaBriefcase className="text-gray-500" />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center gap-2 text-md">
                <FaMapMarkerAlt className="text-gray-500" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Experience;
