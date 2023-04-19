import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Skills = () => {
  const [skillsOpen, setSkillsOpen] = useState(false);

  const toggleDropdown2 = () => {
    setSkillsOpen(!skillsOpen);
  };

  const tskills = useSelector((state) => state.technicalskills);
  const sskills = useSelector((state) => state.softskills);
  const dispatch = useDispatch();

  function handleAddSkill1(event) {
    event.preventDefault();
    const skill = event.target.elements.tskill.value;
    dispatch({ type: "ADD_TECHNICAL_SKILL", payload: skill });
    event.target.reset();
  }

  function handleAddSkill2(event) {
    event.preventDefault();
    const skill = event.target.elements.sskill.value;
    dispatch({ type: "ADD_SOFT_SKILL", payload: skill });
    event.target.reset();
  }

  function handleRemoveSkill1(skill) {
    dispatch({ type: "REMOVE_TECHNICAL_SKILL", payload: skill });
  }

  function handleRemoveSkill2(skill) {
    dispatch({ type: "REMOVE_SOFT_SKILL", payload: skill });
  }

  return (
    <>
      <button
        className="font-bold p-1 my-8 text-lg w-full text-start flex justify-between uppercase font-['Times New Roman']"
        onClick={toggleDropdown2}>
        Skills
        <i
          className={`px-4 py-2 hover:scale-[1.3] transition duration-300 ease-in-out text-xs fa-solid fa-chevron-${
            skillsOpen ? "up" : "down"
          }`}
        />
      </button>
      {skillsOpen && (
        <>
          <div className="font-['Times New Roman']  ">
            <div className="flex flex-col rounded-md shadow-sm transition ease-in-out border-3">
              <div className="flex flex-col p-1">
                <label
                  className="text-gray-900 font-semibold p-1"
                  htmlFor="job">
                  <i className="px-1 fa-solid fa-wrench"></i>
                  Technical skills
                </label>
                <form
                  onSubmit={handleAddSkill1}
                  className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="tskill"
                    className="col-span-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-1 mx-2 text-sm rounded-md text-white font-semibold font-['Times New Roman'] uppercase bg-blue-600">
                    Add Skill
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap w-fit">
              {tskills.map((skill, index) => (
                <div
                  key={index}
                  className="text-white bg-blue-600 mx-1 my-1 rounded-md">
                  <div className="flex w-fit">
                    <div className="px-2 py-1">{skill}</div>
                    <button onClick={() => handleRemoveSkill1(skill)}>
                      <i className="fa-solid fa-xmark px-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col rounded-md shadow-sm transition ease-in-out border-3">
              <div className="flex flex-col p-1">
                <label
                  className="text-gray-900 font-semibold p-1"
                  htmlFor="job">
                  <i className="px-1 fa-solid fa-wrench"></i>
                  Soft skills
                </label>
                <form
                  onSubmit={handleAddSkill2}
                  className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="sskill"
                    className="col-span-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-1 mx-2 text-sm rounded-md text-white font-semibold font-['Times New Roman'] uppercase bg-blue-600">
                    Add Skill
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap w-fit">
              {sskills.map((skill, index) => (
                <div
                  key={index}
                  className="text-white bg-blue-600 mx-1 my-1 rounded-md">
                  <div className="flex w-fit">
                    <div className="px-2 py-1">{skill}</div>
                    <button onClick={() => handleRemoveSkill2(skill)}>
                      <i className="fa-solid fa-xmark px-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Skills;
