import React from "react";
import Education from "./education";
import PersonalDetails from "./personal_details";
import Skills from "./skills";
import Experience from "./experience";

const Question = (props) => {
  return (
    <div className="p-3 h-screen">
      <div className="uppercase">
        <div className="text-2xl text-blue-600 font-bold px-5 py-2">
          cv settings
        </div>
        {/* <button className="py-1 px-3 bg-green-600 text-white rounded-md drop-shadow-sm mx-4 my-6">
          RESET CV
        </button>
        <button className="py-1 px-3 bg-green-600 text-white rounded-md drop-shadow-sm my-6 mx-3">
          CLEAR CV
        </button> */}
      </div>

      {/* Personal Details */}

      <PersonalDetails onChange={props.onChange} />

      {/* Skills */}

      <Skills />

      {/* Education */}

      <Education />

      {/* Experience */}

      <Experience />
    </div>
  );
};

export default Question;
