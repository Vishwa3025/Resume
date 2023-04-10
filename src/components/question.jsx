import React, { useState } from "react";

import Education from "./education";
import PersonalDetails from "./personal_details";
import Skills from "./skills";
import Experience from "./experience";

const Question = (props) => {
  const [element, setElement] = useState("");
  const [edu, setEdu] = useState([]);

  const handleElement = (arr) => {
    setElement(arr);
    props.send(element);
  };

  const handleEdu = (ed) => {
    setEdu(ed);
    props.sendEducation(edu);
  };
  return (
    <div>
      <div className="uppercase">
        <div className="text-2xl text-white font-bold p-2">cv settings</div>
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

      <Skills sendElement={handleElement} />

      {/* Education */}

      <Education sendedu={handleEdu} onChange={props.onChange} />

      {/* Experience */}

      {/* <Experience /> */}
    </div>
  );
};

export default Question;
