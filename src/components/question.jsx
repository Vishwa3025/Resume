import React, { useState } from "react";
import Output from "./output";

const Question = (props) => {
  const [personalDetailsOpen, setPersonalDetailsOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  const toggleDropdown1 = () => {
    setPersonalDetailsOpen(!personalDetailsOpen);
  };
  const toggleDropdown2 = () => {
    setSkillsOpen(!skillsOpen);
  };

  return (
    <div>
      <div className="uppercase">
        <div className="text-2xl font-bold p-2">cv settings</div>
        <button className="py-1 px-3 rounded-md drop-shadow-sm mx-4 my-6 border">
          RESET CV
        </button>
        <button className="py-1 px-3 rounded-md drop-shadow-sm my-6 mx-3 border">
          CLEAR CV
        </button>
      </div>
      <button
        className="font-bold p-1 text-lg w-full text-start flex justify-between my-8"
        onClick={toggleDropdown1}>
        Personal Details
        <i
          className={`px-4 py-2 fa-solid fa-circle-chevron-${
            personalDetailsOpen ? "up" : "down"
          }`}
        />
      </button>
      {personalDetailsOpen && (
        <>
          <div className="flex flex-col rounded-md shadow-sm">
            <div className="p-1">
              <label className="text-gray-900 p-1" htmlFor="job">
                Job Title / Current Position
              </label>
              <input
                type="text"
                name="job"
                className="w-full px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                onChange={props.onChange}
              />
            </div>
            <div className="flex">
              <div className="p-2 flex flex-col">
                <label className="text-gray-900 p-1" htmlFor="firstname">
                  <i className="fas fa-user px-1 text-gray-900" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-[75%] px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
              <div className="p-2 flex flex-col">
                <label className="text-gray-900 p-1" htmlFor="lastname">
                  <i className="fas fa-user px-1 text-gray-900" />
                  Second Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-[75%] px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="p-1">
              <label className="text-gray-900 p-1" htmlFor="job">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                onChange={props.onChange}
              />
            </div>
            <div className="flex">
              <div className="p-2 flex flex-col">
                <label className="text-gray-900 p-1" htmlFor="firstname">
                  <i className="fas fa-location-dot px-1 text-gray-900" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-[80%] px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
              <div className="p-2 flex flex-col">
                <label className="text-gray-900 p-1" htmlFor="lastname">
                  <i className="fas fa-phone px-1 text-gray-900" />
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-[85%] px-3 py-1 border border-gray-200 rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="p-1">
              <label className="text-gray-900 p-1" htmlFor="job">
                About Me
              </label>
              <textarea
                type="text"
                name="about"
                className="w-full px-3 py-1 resize-width border border-gray-200 rounded-md focus:outline-none"
                rows={5}
                onChange={props.onChange}
              />
            </div>
          </div>
        </>
      )}
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
                  name="job"
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
    </div>
  );
};

export default Question;
