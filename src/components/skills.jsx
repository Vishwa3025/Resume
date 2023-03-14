import React, { useState } from "react";

const Skills = (props) => {
  const [skillsOpen, setSkillsOpen] = useState(false);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const toggleDropdown2 = () => {
    setSkillsOpen(!skillsOpen);
  };

  const addSkill = () => {
    setSkills([...skills, skill]);
    setSkill("");
  };

  const deleteSkill = (index) => {
    setSkills(skills.filter((skill, i) => i !== index));
  };

  const SkillsList = ({ skills, deleteSkill }) => {
    return (
      <div className="grid grid-cols-3 gap-4 bg-white">
        <div className="text-black bg-blue-700 rounded-md">
          {skills.map((skill, index) => (
            <div className="flex" key={index}>
              <div className="px-2 py-1">{skill}</div>
              <button onClick={() => deleteSkill(index)}>
                <i class="px-1 fa-sharp fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        className="font-bold p-1 my-8 text-lg w-full text-start flex justify-between"
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
          <div className="flex flex-col rounded-md shadow-sm transition ease-in-out border-3">
            <div className="flex flex-col p-1">
              <label className="text-gray-900 p-1" htmlFor="job">
                <i class="px-1 fa-solid fa-wrench"></i>
                Skills
              </label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name=""
                  className="col-span-2 px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
                <button
                  onClick={addSkill}
                  className="px-3 mx-2 rounded-md text-white bg-blue-700">
                  Add Skill
                </button>
                <section className="col-span-3">
                  <div className="w-fit m-1 ">
                    <SkillsList skills={skills} deleteSkill={deleteSkill} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Skills;
