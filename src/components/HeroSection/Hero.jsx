import banner from "./images/banner.jpg";
import { IoMdPlayCircle } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";

function Hero() {
  return (
    <section
      className=" 
        hero-section relative bg-[url('./assets/images/hero.jpg')]  bg-cover bg-top bg-no-repeat  min-h-[100vh] max-w-full  "
    >
      <div className=" container pt-20 text-white space-y-6 ">
        {/* Banner Heading  */}
        <h1 className="text-5xl font-extrabold leading-[1.5]  ">
          GET HEALTHY BODY <br /> WITH THE PERFECT <br />{" "}
          <span className="inline-flex items-center">
            EXCERCISES{" "}
            <img
              src={banner}
              alt=""
              className="w-32 object-cover h-14 rounded-full ml-4"
            />{" "}
          </span>
        </h1>
        {/* Banner Description */}
        <p>
          We are always there to help you to make a healthy body <br /> and mind
          through the power of fitness.
        </p>
        {/* Banner Buttons */}
        <div className="flex gap-4 items-center">
          <button className="btn-primary">Get Started</button>
          <IoMdPlayCircle className="size-12 text-gray-500 " />
          <span className="text-md font-semibold">Watch Video</span>
        </div>

        <div className="flex divide-x-2  divide-gray-500 items-center ">
          {/* Expert Trainers */}
          <div className=" pr-4 ">
            <h3 className="text-3xl font-bold ">105+</h3>
            <p className="text-sm font-medium ">Expert Trainers</p>
          </div>
          {/* Members Joined */}
          <div className=" px-4 ">
            <h3 className="text-3xl font-bold">970+</h3>
            <p className="text-sm font-medium">Members Joined</p>
          </div>
          {/* Fitness Programs */}
          <div className=" px-4 ">
            <h3 className="text-3xl font-bold">135+</h3>
            <p className="text-sm font-medium">Fitness Programs</p>
          </div>
        </div>
      </div>
      {/* Calorie Badge */}
      <div className="badge  bottom-24 right-1/4 ">
        <div className="badge-wrapper">
          <p className="text-[8px] ">Today&apos;s Calories</p>
          <h2 className="text-2xl font-semibold mb-2 ">150 cal</h2>
          <p className="flex items-center text-[10px] gap-1 ">
            <TbActivityHeartbeat className="text-orange size-4" />{" "}
            <span className="text-orange">+2.75%</span> This week
          </p>
        </div>
        <IoStatsChart className="size-16 text-orange " />
      </div>
    </section>
  );
}

export default Hero;
