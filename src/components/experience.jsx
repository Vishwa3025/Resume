import { useState } from "react";

const ResumeBuilder = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    setSkills([...skills, skill]);
    setSkill("");
  };

  const deleteSkill = (index) => {
    setSkills(skills.filter((skill, i) => i !== index));
  };

  const SkillsList = ({ skills, deleteSkill }) => {
    return (
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => deleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <SkillsList skills={skills} deleteSkill={deleteSkill} />
    </div>
  );
};

export default ResumeBuilder;
