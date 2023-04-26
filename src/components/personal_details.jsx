import React, { useState } from "react";

const PersonalDetails = (props) => {
  const [personalDetailsOpen, setPersonalDetailsOpen] = useState(false);

  const toggleDropdown1 = () => {
    setPersonalDetailsOpen(!personalDetailsOpen);
  };

  return (
    <>
      <button
        className="font-black p-1 text-lg w-full text-start flex justify-between my-8 uppercase font-['Catamaran']"
        onClick={toggleDropdown1}>
        Personal Details
        <i
          className={`px-4 py-2 hover:scale-[1.3] transition duration-300 ease-in-out text-xs fa-solid fa-chevron-${
            personalDetailsOpen ? "up" : "down"
          }`}
        />
      </button>
      {personalDetailsOpen && (
        <div className="transition duration-500 ease-in-out ">
          <div className="flex flex-col rounded-md shadow-sm font-['Catamaran']">
            <div className="p-1">
              <label className="text-gray-900 p-1 font-semibold" htmlFor="job">
                Job Title / Current Position
              </label>
              <input
                type="text"
                name="job"
                className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none"
                onChange={props.onChange}
              />
            </div>
            <div className="flex">
              <div className="p-2 flex flex-col">
                <label
                  className="text-gray-900 p-1 font-semibold"
                  htmlFor="firstname">
                  <i className="fas fa-user px-1 text-gray-900" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-[75%] px-3 py-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
              <div className="p-2 flex flex-col">
                <label
                  className="text-gray-900 font-semibold p-1"
                  htmlFor="lastname">
                  <i className="fas fa-user px-1 text-gray-900" />
                  Second Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-[75%] px-3 py-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="p-1">
              <label className="text-gray-900 font-semibold p-1" htmlFor="job">
                <i class="fa-solid fa-envelope px-1"></i>
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full px-3 py-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                onChange={props.onChange}
              />
            </div>
            <div className="flex">
              <div className="p-2 flex flex-col">
                <label
                  className="text-gray-900 p-1 font-semibold"
                  htmlFor="firstname">
                  <i className="fas fa-location-dot px-1 text-gray-900" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-[80%] px-3 py-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
              <div className="p-2 flex flex-col">
                <label
                  className="text-gray-900 p-1 font-semibold"
                  htmlFor="lastname">
                  <i className="fas fa-phone px-1 text-gray-900" />
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-[85%] px-3 py-1 border border-gray-300 shadow-md rounded-md focus:outline-none"
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="p-1">
              <label className="text-gray-900 p-1 font-semibold" htmlFor="job">
                About Me
              </label>
              <textarea
                type="text"
                name="about"
                className="w-full px-3 py-1 resize-width border border-gray-300 shadow-md rounded-md focus:outline-none"
                rows={5}
                onChange={props.onChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalDetails;
