import React, { useState } from "react";
import Output from "./output";
import Education from "./education";
import PersonalDetails from "./personal_details";
import Skills from "./skills";
import Projects from "./projects";

const Question = (props) => {
  return (
    <div>
      <div className="uppercase">
        <div className="text-2xl font-bold p-2">cv settings</div>
        <button className="py-1 px-3 rounded-md drop-shadow-sm mx-4 my-6 border">
          RESET CV
        </button>
        <button className="py-1 px-3 rounded-md drop-shadow-sm my-6 mx-3 border">
          CLEAR CV
        </button>
      </div>

      {/* Personal Details */}

      <PersonalDetails onChange={props.onChange} />

      {/* Skills */}

      <Skills onChange={props.onChange} />

      {/* Education */}

      <Education onChange={props.onChange} />

      {/* Projects */}

      <Projects onChange={props.onChange} />
    </div>
  );
};

export default Question;
