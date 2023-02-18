import React from "react";
import { MdPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const Output = (props) => {
  return (
    <div className="flex justify-center font-['Montserrat']">
      <div className="flex border-4 w-[610px]">
        <div className="cv_side w-1/3 px-3 py-3 bg-gray-100">
          {/* Name */}

          <div className="w-fit uppercase border-2 font-bold text-blue-700 text-xl">
            {props.inputData.firstName}
            <br />
            {props.inputData.lastName}
          </div>

          {/* Job Title */}

          <div className="uppercase border-2 text-base w-[70%] my-1">
            {props.inputData.job}
          </div>

          {/* Contact */}

          <section>
            <h2 className="uppercase font-bold my-1">Contact</h2>
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

          <section>
            <h2 className="uppercase font-bold my-3 w-[60%]">
              professional skills
            </h2>
            <div className="grid grid-cols-3 gap-1 text-xs">
              <div>Microsoft</div>
              <div>Microsoft</div>
              <div>Microsoft</div>
              <div>Microsoft</div>
              <div>Microsoft</div>
            </div>
          </section>
        </div>
        <div className="cv_main w-2/3 bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Output;
