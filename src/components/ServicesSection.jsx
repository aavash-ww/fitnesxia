import servicesData from "../data/servicesData";
import serviceimg from "../assets/images/serviceimg.png";
import { GoCheckCircleFill } from "react-icons/go";
import { GiHeartBeats } from "react-icons/gi";
import { RiFireFill } from "react-icons/ri";

function ServicesSection() {
  return (
    <section className="services bg-bgLight py-16">
      <div
        className="container flex justify-between lg:gap-24 md:gap-12
      "
      >
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-[3rem] mb-6">
            Why Should People Choose Fitnesxia Services
          </h1>
          {/* Bullet Points */}
          {servicesData.map((el, index) => (
            <div key={index} className="mb-3">
              <div className="flex items-center gap-2 mb-1 ">
                <GoCheckCircleFill className="text-orange" />{" "}
                <h1 className="text-lg font-semibold">{el.title}</h1>
              </div>
              <p className="text-[13px] leading-5 pr-14 ">{el.description}</p>
            </div>
          ))}
          <button className="btn-primary mt-2">Join Today</button>
        </div>
        {/* Image Section */}
        <div className="flex-1  ">
          <div
            className="
          bg-orange size-80 rounded-full mx-auto mt-24 relative 
          "
          >
            <div className="absolute bottom-[1%] left-[15%] ">
              <img
                src={serviceimg}
                alt=""
                className="w-auto h-112  "
              />
            </div>
            {/* Badge Heart-rate */}
            <div className="badge -right-24 top-8">
                <GiHeartBeats className="size-9 text-red-500"/>
                <div>
                  <h2 className="font-medium text-xl">70 bpm </h2>
                  <p className="font-light">Heart Rate</p>
                </div> 
            </div>
            {/* Badge Fat Burn */}
            <div className="badge bottom-[4%] ">
                <RiFireFill className="size-10 text-orange"/>
                <div>
                  <h2 className="font-medium text-xl">24%</h2>
                  <p className="font-light">Fat Burn</p>
                </div> 
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
