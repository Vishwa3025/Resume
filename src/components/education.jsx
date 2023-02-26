import React, { useState } from "react";

const Education = (props) => {
  const [educationOpen, setEducationOpen] = useState(false);

  const toggleDropdown3 = () => {
    setEducationOpen(!educationOpen);
  };
  return (
    <div>
      <button
        className="font-bold p-1 my-8 text-lg w-full text-start flex justify-between"
        onClick={toggleDropdown3}>
        Education
        <i
          className={`px-4 py-2 hover:scale-[1.3] transition duration-300 ease-in-out fa-solid fa-circle-chevron-${
            educationOpen ? "up" : "down"
          }`}
        />
      </button>
      {educationOpen && (
        <>
          <div className="flex flex-col rounded-md shadow-sm transition ease-in-out border-3">
            <div className="flex flex-col p-1">
              <label className="text-gray-900 p-1" htmlFor="job">
                <i class="fa-solid fa-regular fa-graduation-cap"></i>
                Graduation
              </label>
              <button className="px-5 py-1 mx-2 rounded-md text-white bg-blue-700">
                Add Education
              </button>
              <div className="flex">
                <input
                  type="text"
                  name="job"
                  className="w-full px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Education;
