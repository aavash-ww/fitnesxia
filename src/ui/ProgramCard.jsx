import { HiArrowNarrowRight } from "react-icons/hi";
import programData from "../data/programData";

function ProgramCard() {
  return (
    <div className="program-card grid lg:grid-cols-4 md:grid-cols-2 gap-8">
      {programData.map((el, index) => (
        <div
          key={index}
          className={`
            p-4 rounded-2xl shadow-xl hover:bg-orange ${
              index == 2 ? "bg-orange" : "bg-[rgba(70,70,70,255)]"
            }
            `}
        >
          <div className="text-5xl font-bold mb-3">{el.icon}</div>
          <h1 className="text-xl font-semibold mb-3">{el.title}</h1>
          <p className="text-xs leading-5 mb-4">{el.description}</p>
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-sm">Learn more</p> <HiArrowNarrowRight />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgramCard;
