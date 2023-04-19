import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Education = () => {
  const dispatch = useDispatch();
  const edu = useSelector((state) => state.education);

  const [educationOpen, setEducationOpen] = useState(false);

  const toggleDropdown3 = () => {
    setEducationOpen(!educationOpen);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const institution = event.target.institution.value;
    const from = event.target.from.value;
    const to = event.target.to.value;
    const specialization = event.target.specialization.value;
    const edu = { institution, from, to, specialization };
    dispatch({ type: "ADD_EDU", payload: edu });
    event.target.reset();
  }

  function handleRemoveEducation(edu) {
    dispatch({ type: "REMOVE_EDU", payload: edu });
  }

  return (
    <div className="">
      <button
        className="font-bold p-1 text-lg w-full text-start flex justify-between my-8 uppercase font-['Cormorant Garamond',serif]"
        onClick={toggleDropdown3}>
        Education
        <i
          className={`px-4 py-2 hover:scale-[1.3] transition duration-300 ease-in-out text-xs fa-solid fa-chevron-${
            educationOpen ? "up" : "down"
          }`}
        />
      </button>
      {educationOpen && (
        <>
          <form
            onSubmit={handleSubmit}
            className="shadow-lg rounded-md px-2 my-2">
            <div className="p-1">
              <label
                className="text-gray-900 text-lg p-1"
                htmlFor="institution">
                <i class="px-1 fa-sharp fa-solid fa-building-columns"></i>
                Institution
              </label>
              <input
                type="text"
                name="institution"
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
              <label
                className="text-gray-900 text-lg p-1"
                htmlFor="specialization">
                <i class="px-1 fa-solid fa-graduation-cap"></i>
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <button
              className="px-4 py-1 mx-1 my-2 text-lg rounded-md text-white bg-blue-700"
              type="submit">
              Add Education
            </button>

            {edu.map((ed, index) => (
              <div>
                <div
                  className="p-2 m-2 rounded-md text-white uppercase text-sm bg-blue-500"
                  key={index}>
                  {index + 1}
                  {". "}
                  {ed.institution}
                  <button onClick={() => handleRemoveEducation(ed)}>
                    <i class="fa-solid fa-trash text-black px-1"></i>
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

export default Education;
