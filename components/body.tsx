import React from "react";
import About from "./about";
import Experience from "./experience";

export default function Body() {
  return (
    <div className="p-4">
      <About />
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-1 shadow-md">
          <Experience />
        </div>
      </div>
    </div>
  );
}
