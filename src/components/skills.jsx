import React, { useState } from "react";

const Skills = (props) => {
  const [skillsOpen, setSkillsOpen] = useState(false);

  const [techSkill, setTechSkill] = useState("");
  const [techSkills, setTechSkills] = useState([]);

  const [softSkill, setSoftSkill] = useState("");
  const [softSkills, setSoftSkills] = useState([]);

  const toggleDropdown2 = () => {
    setSkillsOpen(!skillsOpen);
  };

  const addTechSkill = () => {
    setTechSkills([...techSkills, techSkill]);
    props.sendElement(techSkill);
    setTechSkill("");
  };

  const addSoftSkill = () => {
    setSoftSkills([...softSkills, softSkill]);
    setSoftSkill("");
  };

  const deleteTechSkill = (index) => {
    setTechSkills(techSkills.filter((skill, i) => i !== index));
  };

  const deleteSoftSkill = (index) => {
    setSoftSkills(softSkills.filter((skill, i) => i !== index));
  };

  const handleKeyDown1 = (event) => {
    if (event.keyCode === 13) {
      // props.sendElement(techSkill);
      addTechSkill();
    }
  };

  const handleKeyDown2 = (event) => {
    if (event.keyCode === 13) {
      addSoftSkill();
    }
  };

  const SkillsList1 = ({ techSkills, deleteTechSkill }) => {
    return (
      <div className="flex flex-wrap w-fit">
        {techSkills.map((skill, index) => (
          <div
            key={index}
            className="text-white bg-blue-700 mx-1 my-1 rounded-md">
            <div className="flex w-fit">
              <div className="px-2 py-1">{skill}</div>
              <button onClick={() => deleteTechSkill(index)}>
                <i className="fa-solid fa-xmark px-1"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const SkillsList2 = ({ softSkills, deleteSoftSkill }) => {
    return (
      <div className="flex flex-wrap w-fit">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="text-white bg-blue-700 mx-1 my-1 rounded-md">
            <div className="flex w-fit">
              <div className="px-2 py-1">{skill}</div>
              <button onClick={() => deleteSoftSkill(index)}>
                <i className="fa-solid fa-xmark px-1"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <button
        className="font-bold p-1 my-8 text-xl w-full text-start flex justify-between font-['Montserrat']"
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
                <i className="px-1 fa-solid fa-wrench"></i>
                Technical skills
              </label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="tskill"
                  className="col-span-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
                  value={techSkill}
                  onChange={(e) => setTechSkill(e.target.value)}
                  onKeyDown={handleKeyDown1}
                />
                <button
                  onClick={addTechSkill}
                  className="px-2 mx-2 rounded-md text-white bg-blue-700">
                  Add Skill
                </button>
                <section className="col-span-3">
                  <div className="w-fit m-1">
                    <SkillsList1
                      techSkills={techSkills}
                      deleteTechSkill={deleteTechSkill}
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-md shadow-sm transition ease-in-out border-3">
            <div className="flex flex-col p-1">
              <label className="text-gray-900 p-1" htmlFor="job">
                <i className="px-1 fa-solid fa-wrench"></i>
                Soft skills
              </label>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name=""
                  className="col-span-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
                  value={softSkill}
                  onChange={(e) => setSoftSkill(e.target.value)}
                  onKeyDown={handleKeyDown2}
                />
                <button
                  onClick={addSoftSkill}
                  className="px-2 mx-2 rounded-md text-white bg-blue-700">
                  Add Skill
                </button>
                <section className="col-span-3">
                  <div className="w-fit m-1">
                    <SkillsList2
                      softSkills={softSkills}
                      deleteSoftSkill={deleteSoftSkill}
                    />
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
