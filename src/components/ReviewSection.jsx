import ReviewCard from "../ui/ReviewCard";
import AvatarGroupButton from "../ui/AvatarGroupButton";
import { FaStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

function ReviewSection() {
  return (
    <section className="review-section bg-bgDark py-20 ">
      <div className="container flex gap-x-32">
        {/* Clients Review */}
        <div className="space-y-6 ">
          <h2 className="text-4xl font-bold  leading-[3rem] ">
            What Our Happy Clients <br /> Say About Us
          </h2>
          
          <p className="text-sm leading-6 pr-32">
            I&apos;ve been a member of Fitness Within for about 6 months now and
            I absolutely love it! The trainers are so motivate and they really
            help to reach fitness goals.
          </p>
          <div className="flex gap-20 items-center">
            <AvatarGroupButton  />
            <div className="flex gap-2 ">
                <FaStar className="text-xl text-yellow-500" />
                <p className="font-normal">4.9(450 Reviews)</p>
            </div>

          </div>
            <div className="flex items-center text-2xl font-semibold text-gray-500 gap-2">
                <IoStar/> 
                Trustpilot
            </div>
        </div>
        {/* Review Card */}
        <div >
            <ReviewCard/>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
