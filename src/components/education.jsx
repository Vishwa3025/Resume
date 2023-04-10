import React, { useState } from "react";

const Education = (props) => {
  const [educationOpen, setEducationOpen] = useState(false);
  const [educationList, setEducationList] = useState([]);

  const toggleDropdown3 = () => {
    setEducationOpen(!educationOpen);
  };

  const handleAddEducation = () => {
    setEducationList([
      ...educationList,
      { institution: "", from: "", to: "", specialization: "" },
    ]);
  };
  // console.log(educationList);

  const handleDeleteEducation = (index) => {
    const newList = [...educationList];
    newList.splice(index, 1);
    setEducationList(newList);
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const newList = [...educationList];
    newList[index][name] = value;
    setEducationList(newList);
  };

  return (
    <div className="font-['Montserrat']">
      <button
        className="font-bold p-1 my-8 text-xl w-full text-start flex justify-between font-['Montserrat']"
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
          <button
            className="px-5 py-1 mx-1 text-lg rounded-md text-white bg-blue-700"
            onClick={handleAddEducation}>
            Add Education
          </button>
          {educationList.map((education, index) => (
            <div
              className=" border border-blue-600 rounded-md px-2 my-2"
              key={index}>
              <div className="p-1">
                <label className="text-gray-900 text-lg p-1" htmlFor="job">
                  <i class="px-1 fa-sharp fa-solid fa-building-columns"></i>
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  value={education.institution}
                  className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
                  onChange={(e) => handleEducationChange(e, index)}
                  onInput={props.onChange}
                />
              </div>
              <div className="flex">
                <div className="p-2 flex flex-col">
                  <label className="text-gray-900 p-1" htmlFor="firstname">
                    <i class="fa-solid fa-calendar px-1"></i>
                    From
                  </label>
                  <input
                    type="text"
                    name="from"
                    value={education.from}
                    className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
                    onChange={(e) => handleEducationChange(e, index)}
                    onInput={props.onChange}
                  />
                </div>
                <div className="p-2 flex flex-col">
                  <label className="text-gray-900 p-1" htmlFor="lastname">
                    <i class="fa-solid fa-calendar px-1"></i>
                    To
                  </label>
                  <input
                    type="text"
                    name="to"
                    value={education.to}
                    className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
                    onChange={(e) => handleEducationChange(e, index)}
                    onInput={props.onChange}
                  />
                </div>
              </div>

              <div className="p-1">
                <label className="text-gray-900 text-lg p-1" htmlFor="job">
                  <i class="px-1 fa-solid fa-graduation-cap"></i>
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={education.specialization}
                  className="w-full px-3 py-1 my-1 border border-gray-300 rounded-md focus:outline-none"
                  onChange={(e) => handleEducationChange(e, index)}
                  onInput={props.onChange}
                />
              </div>
              <button
                className="px-4 py-1 mx-1 my-2 text-lg rounded-md text-white bg-blue-700"
                onClick={() => handleDeleteEducation(index)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Education;
