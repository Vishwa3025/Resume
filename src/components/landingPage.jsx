import React from "react";
import { Link } from "react-router-dom";
import i from "../assests/img.png";
import "../App.css";
import icon from "../assests/cv.png";

const LandingPage = () => {
  return (
    <>
      <section>
        <div className="flex py-5 md:text-xl lg:text-3xl font-semibold mt-5 tracking-wide py-5 px-20 font-['Catamaran']">
          <div>
            <img
              src={icon}
              className="md:my-2 lg:my-1 md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]"
              alt=""
              srcset=""
            />
          </div>
          <div className="mx-2 mt-3">Resume Builder</div>
        </div>
      </section>

      <section className="flex p-5 ">
        <div className="w-1/2 md:px-10 lg:py-3 lg:px-10 xl:p-10">
          <div className="font-semibold font-['Catamaran']">
            <div className="lg:mt-12 xl:mt-16 py-1 md:text-2xl lg:text-[27px] xl:text-4xl">
              Resume Builder (and CV Formate)
            </div>
            <div className=" py-1 md:text-base lg:text-[27px] xl:text-4xl">
              Create Dream and Aspirations for
            </div>
            <div className=" py-1 md:text-base lg:text-[28px] xl:text-4xl">
              A Better Job
            </div>
          </div>

          <div className="md:text-sm lg:text-base xl:text-lg font-['Catamaran']">
            <div className="font-medium mt-10">
              Your dream job is just a few clicks away with our intuitive resume
              builder.
            </div>
            <div className="font-medium">
              Stand out from the crowd with a stunning resume that showcases
              your unique skills and experience. Your professional future starts
              here <span className="font-bold">!!</span>
            </div>
          </div>

          <div>
            <Link to="/design">
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Get Placed Now !!</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 lg:p-10">
          <img src={i} alt="" />
        </div>

        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
