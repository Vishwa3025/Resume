import React, { useState } from "react";

const Skills = (props) => {
  const [skillsOpen, setSkillsOpen] = useState(false);

  const toggleDropdown2 = () => {
    setSkillsOpen(!skillsOpen);
  };
  return (
    <>
      <button
        className="font-bold p-1 my-8 text-lg w-full text-start flex justify-between"
        onClick={toggleDropdown2}>
        Skills
        <i
          className={`px-4 py-2 hover:scale-[1.3] transition duration-300 ease-in-out fa-solid fa-circle-chevron-${
            skillsOpen ? "up" : "down"
          }`}
        />
      </button>
      {skillsOpen && (
        <>
          <div className="flex flex-col rounded-md shadow-sm transition ease-in-out border-3">
            <div className="flex flex-col p-1">
              <label className="text-gray-900 p-1" htmlFor="job">
                <i class="px-1 fa-solid fa-wrench"></i>
                Skills
              </label>
              <div className="flex">
                <input
                  type="text"
                  name=""
                  className="w-[75%] px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
                <button className="px-5 mx-2 rounded-md text-white bg-blue-700">
                  Add
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Skills;
