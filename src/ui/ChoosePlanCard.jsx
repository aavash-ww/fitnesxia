import choosePlanData from "../data/choosePlanData";
import { GiCheckMark } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";

function ChoosePlanCard() {
  return (
    <div className="plan-card grid lg:grid-cols-3 md:grid-cols-1 gap-6  items-center ">
      {choosePlanData.map((plan, index) => (
        <div
          key={index}
          className={`

            ${index == 1 ? "bg-orange plan-card-enterprise" : "bg-[#464646]"} 
            px-4 py-4  rounded-2xl  text-center`}
        >
          {/*Plan Type */}
          <p className="uppercase text-sm font-semibold ">{plan.type}</p>
          <div className="mx-10">
            {/* Pricing */}
            <div className="flex items-center my-8 text-center">
              <span className="flex items-center text-5xl leading-5 font-semibold ">
                <FaDollarSign /> {plan.price}
              </span>
              <span className="font-normal">/Per Month</span>
            </div>
            {/* Plan Lists */}
            <ul >
              {plan.list.map((point, idx) => {
                const targetedList =
                  (plan.type === "Discover" || plan.type === "Professional") &&
                  idx >= plan.list.length - 2;

                return (
                  <li
                    key={idx}
                    className={`${targetedList ? "text-[#8b8787f5]" : ""} 
                    flex items-center gap-4 mb-6 text-sm font-normal `}
                  >
                    <GiCheckMark className="text-xl " />
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
          {/*Plan Button */}
          <button
            className={`${
              plan.type === "Enterprise" ? "text-orange bg-white" : ""
            }  
            border border-white bg-transparent px-16 py-2 rounded-full  shadow-xl`}
          >
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChoosePlanCard;
