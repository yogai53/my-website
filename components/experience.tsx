import React from "react";

const experiences = [
  {
    name: "Teachedison",
    position: "Director of Engineering",
  },
  {
    name: "Tesark Technologies Pvt Ltd",
    position: "Full Stack Developer",
  },
  {
    name: "Cognizant",
    position: "Programmer Analyst",
  },
];

export default function Experience() {
  return (
    <div className="w-full p-4">
      <div className="flex gap-2">
        <div>Icon</div>
        <div>Work</div>
      </div>
      {experiences.map((exp, i) => (
        <div key={i} className="flex items-center gap-4 mt-4">
          <div className="flex-1">icon</div>
          <div className="flex-1">
            <h3>{exp.name}</h3>
            <p className="text-gray-400">{exp.position}</p>
          </div>
          <div className="flex-1 text-gray-400 text-end">2013-2019</div>
        </div>
      ))}

      <a
        href="##"
        className="flex justify-center w-full gap-2 p-4 mt-4 rounded-lg cursor-pointer hover:text-slate-100 hover:bg-slate-400 bg-slate-200"
      >
        <span>Download CV</span>
        <span>Icon</span>
      </a>
    </div>
  );
}
