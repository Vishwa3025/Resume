import React from "react";
import { MdPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";

const Output = (props) => {
  const tskill = useSelector((state) => state.technicalskills);
  const sskill = useSelector((state) => state.softskills);
  const edu = useSelector((state) => state.education);
  const exp = useSelector((state) => state.experience);

  return (
    <div className="font-['Montserrat']">
      <div className="flex w-[610px]">
        <div className="cv_side w-1/3 px-3 py-3 bg-gray-400">
          {/* Name */}

          <div className="w-fit uppercase tracking-wide text-white font-bold text- text-xl">
            {props.inputData.firstName}
            <br />
            {props.inputData.lastName}
          </div>

          {/* Job Title */}

          <div className="uppercase text-base w-fit my-1">
            {props.inputData.job}
          </div>

          {/* Contact */}

          <section>
            <h2 className="uppercase text-red-900 font-bold my-1">Contact</h2>
            <div className="flex flex-col text-xs">
              <div className="flex">
                <div className="p-0.5 m-0.5">
                  <MdPhone />
                </div>
                {props.inputData.phone}
              </div>
              <div className="flex">
                <div className="p-0.5 m-0.5">
                  <HiMail />
                </div>
                {props.inputData.email}
              </div>
              <div className="flex">
                <div className="p-0.5 m-0.5">
                  <MdLocationOn />
                </div>
                {props.inputData.location}
              </div>
            </div>
          </section>

          {/* Skills */}

          <section className="">
            <h2 className="uppercase text-red-900 font-bold my-3 w-[60%]">
              professional skills
            </h2>
            <div className="flex flex-wrap w-fit">
              {tskill.map((skill, index) => (
                <div className="text-black bg-white mx-1 my-1 rounded-md">
                  <div className="flex w-fit" key={index}>
                    <div className="px-2 py-1">{skill}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="uppercase text-red-900 font-bold my-3 w-[60%]">
              soft skills
            </h2>
            <ol>
              {sskill.map((skill, index) => (
                <li key={index}>
                  {index + 1}. {skill}
                </li>
              ))}
            </ol>
          </section>
        </div>
        <div className="cv_main w-2/3 bg-white px-3 py-3">
          {/* About */}

          <section className="pb-1 border-b-2 w-full">
            <h2 className="uppercase font-bold font-['Cormorant Garamond'] text-red-700 tracking-wide m-1 w-[60%]">
              about
            </h2>
            <div className="text-sm ml-1">{props.inputData.about}</div>
          </section>

          {/* Education */}

          <section className="pb-1 border-b-2 w-full">
            <h2 className="uppercase font-bold text-red-700 tracking-wide m-1 w-[60%]">
              Education
            </h2>
            <div className="ml-1 font-['Cormorant Garamond']">
              {edu.map((ed, index) => (
                <div key={index}>
                  <div className="text-lg">
                    {ed.from} {"-"} {ed.to}
                  </div>
                  <div className="text-md font-semibold uppercase">
                    {ed.institution}
                  </div>
                  <div className="text-md mb-4">{ed.specialization}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}

          <section className="pb-1 border-b-2 w-full">
            <h2 className="uppercase font-bold text-red-700 tracking-wide m-1 w-[60%]">
              Experience
            </h2>
            <div className="ml-1 font-['Cormorant Garamond']">
              {exp.map((ex, index) => (
                <div key={index}>
                  <div className="text-lg font-semibold uppercase ">
                    {ex.company}
                  </div>
                  <div className="text-md">
                    {ex.from} {"-"} {ex.to}
                  </div>
                  <div className="text-md font-semibold">{ex.jobRole}</div>
                  <div className="text-sm mb-3">{ex.description}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Output;
