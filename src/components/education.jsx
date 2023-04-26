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
        className="font-black p-1 text-lg w-full text-start flex justify-between my-8 uppercase font-['Catamaran']"
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
          <div className="transition-all duration-300 ease-in-out">
            <form
              onSubmit={handleSubmit}
              className="shadow-lg rounded-md px-2 my-2 font-['Catamaran']">
              <div className="p-1">
                <label
                  className="text-gray-900 font-semibold text-lg p-1"
                  htmlFor="institution">
                  <i class="px-1 fa-sharp fa-solid fa-building-columns"></i>
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  className="w-full px-3 py-1 my-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                />
              </div>
              <div className="flex">
                <div className="p-2 flex flex-col">
                  <label
                    className="text-gray-900 font-semibold p-1"
                    htmlFor="from">
                    <i class="fa-solid fa-calendar px-1"></i>
                    From
                  </label>
                  <input
                    type="text"
                    name="from"
                    className="w-full px-3 py-1 my-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                  />
                </div>
                <div className="p-2 flex flex-col">
                  <label
                    className="text-gray-900 font-semibold p-1"
                    htmlFor="to">
                    <i class="fa-solid fa-calendar px-1"></i>
                    To
                  </label>
                  <input
                    type="text"
                    name="to"
                    className="w-full px-3 py-1 my-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-1">
                <label
                  className="text-gray-900 font-semibold text-lg p-1"
                  htmlFor="specialization">
                  <i class="px-1 fa-solid fa-graduation-cap"></i>
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  className="w-full px-3 py-1 my-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                />
              </div>
              <button
                className="md:px-3 lg:px-1 xl:px-3 md:py-2 lg:py-1 xl:py-2 my-5 lg:text-xs xl:text-sm w-auto rounded-md text-white font-semibold font-['Catamaran'] uppercase bg-blue-600"
                type="submit">
                Add Education
              </button>

              {edu.map((ed, index) => (
                <div>
                  <div
                    className="p-1 m-2 flex rounded-md text-white uppercase text-xs font-['Catamaran']"
                    key={index}>
                    <div className="font-bold text-black py-1">
                      {ed.institution}
                    </div>
                    <button onClick={() => handleRemoveEducation(ed)}>
                      <div className="bg-red-400 p-1 rounded-md shadow-xl mx-2">
                        <i class="fa-solid fa-trash text-white px-1"></i>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Education;
