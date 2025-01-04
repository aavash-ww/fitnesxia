import freetrialimg from "../assets/images/freetrialimg.jpg";
import { GiWeightLiftingUp } from "react-icons/gi";

function FreeTiralSection() {
  return (
    <section className=" free-trail-section bg-bgLight py-16 ">
      <div className="container flex items-center ">
        {/* Image Section */}
        <div className=" image-section relative w-1/2 ">
          <img
            src={freetrialimg}
            className="w-auto h-80 rounded-3xl object-cover "
            alt="TrainerImg"
          />
          {/* Trainer Badge */}
          <div className="badge bottom-10 -right-3">
            <GiWeightLiftingUp className="text-orange size-10 " />
            <p className="text-sm font-medium">
              Professional <br /> Trainer
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className=" text-section max-w-sm space-y-6 ml-12 ">
          <h1 className="text-4xl font-bold leading-[3rem] ">
            Get Ready To Reach <br /> Your Fitness Goals
          </h1>
          <p className="text-sm leading-5 ">
            We are a gym that is committed to helping people reach their fitness
            goals. We offer a variety of theirs programs and services to fit
            your needs, whether you are a experienced athlete.
          </p>
          <p className="text-sm leading-5 ">
            We believe that everyone should have access to the benefits of
            exercise make it happen.
          </p>
          <button className="btn-primary">Free Trial Today</button>
        </div>
      </div>
    </section>
  );
}

export default FreeTiralSection;
