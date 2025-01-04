import { BsCameraReelsFill } from "react-icons/bs";
import { FaHubspot } from "react-icons/fa6";
import { SiMapbox } from "react-icons/si";

function PartnerSection() {
  return (
    <section className="partner-section bg-bgDark text-white ">
      <div className="container flex justify-between py-8">
        <div >
          <h3 className="text-3xl font-bold ">970k+ More</h3>
          <p className=" font-medium ">Trusted Companies Partner</p>
        </div>

        <div className="flex space-x-8 font-arquette">
          {/* videoask */}
          <div className="flex items-center gap-2 text-4xl font-medium leading-4 font-arquette ">
            <BsCameraReelsFill />
            <p>videoask</p>
          </div>
          {/* hubspot */}
          <div className="flex items-center text-4xl relative">
            <p className="">Hubsp</p> <FaHubspot />
            <p>t</p>
          </div>
          {/* mapbox */}
          <div className="flex items-center gap-2 text-4xl font-arquette">
            <SiMapbox />
            <p>mapbox</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
