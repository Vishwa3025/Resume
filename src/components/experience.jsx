import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Experience = () => {
  const dispatch = useDispatch();
  const exp = useSelector((state) => state.experience);

  const [experienceOpen, setExperienceOpen] = useState(false);

  const toggleDropdown3 = () => {
    setExperienceOpen(!experienceOpen);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const company = event.target.company.value;
    const from = event.target.from.value;
    const to = event.target.to.value;
    const jobRole = event.target.jobRole.value;
    const description = event.target.description.value;
    const exp = { company, from, to, jobRole, description };
    dispatch({ type: "ADD_EXP", payload: exp });
    event.target.reset();
  }

  function handleRemoveExperience(exp) {
    dispatch({ type: "REMOVE_EXP", payload: exp });
  }

  return (
    <div className="">
      <button
        className="font-bold p-1 my-8 text-lg w-full text-start flex justify-between  uppercase font-['Cormorant Garamond',serif]"
        onClick={toggleDropdown3}>
        Experience
        <i
          className={`px-4 py-2 hover:scale-[1.3] transition duration-300 ease-in-out text-xs fa-solid fa-chevron-${
            experienceOpen ? "up" : "down"
          }`}
        />
      </button>
      {experienceOpen && (
        <>
          <form
            onSubmit={handleSubmit}
            className="shadow-lg rounded-md px-2 my-2">
            <div className="p-1">
              <label className="text-gray-900 text-lg p-1" htmlFor="company">
                <i class="px-1 fa-sharp fa-solid fa-building-columns"></i>
                Company Name
              </label>
              <input
                type="text"
                name="company"
                className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex">
              <div className="p-2 flex flex-col">
                <label className="text-gray-900 p-1" htmlFor="from">
                  <i class="fa-solid fa-calendar px-1"></i>
                  From
                </label>
                <input
                  type="text"
                  name="from"
                  className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
              <div className="p-2 flex flex-col">
                <label className="text-gray-900 p-1" htmlFor="to">
                  <i class="fa-solid fa-calendar px-1"></i>
                  To
                </label>
                <input
                  type="text"
                  name="to"
                  className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>

            <div className="p-1">
              <label className="text-gray-900 text-lg p-1" htmlFor="jobRole">
                <i class="px-1 fa-solid fa-graduation-cap"></i>
                Job Role
              </label>
              <input
                type="text"
                name="jobRole"
                className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <div className="p-1">
              <label className="text-gray-900 p-1 font-semibold" htmlFor="job">
                <i class="fa-solid fa-pen-nib px-1"></i>
                Description
              </label>
              <textarea
                type="text"
                name="description"
                className="w-full px-3 py-1 resize-width border border-gray-300 rounded-md focus:outline-none"
                rows={5}
              />
            </div>
            <button
              className="px-4 py-1 mx-1 my-2 text-lg rounded-md text-white bg-blue-700"
              type="submit">
              Add Experience
            </button>

            {exp.map((ex, index) => (
              <div>
                <div
                  className="p-2 m-2 rounded-md text-white uppercase text-sm bg-blue-500"
                  key={index}>
                  {index + 1}
                  {". "}
                  {ex.company}
                  <button onClick={() => handleRemoveExperience(ex)}>
                    <i class="fa-solid fa-trash text-black px-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </form>
        </>
      )}
    </div>
  );
};

export default Experience;
