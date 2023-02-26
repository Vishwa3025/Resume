import React, { useState } from "react";

const PersonalDetails = (props) => {
  const [personalDetailsOpen, setPersonalDetailsOpen] = useState(false);

  const toggleDropdown1 = () => {
    setPersonalDetailsOpen(!personalDetailsOpen);
  };

  return (
    <>
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
    </>
  );
};

export default PersonalDetails;
