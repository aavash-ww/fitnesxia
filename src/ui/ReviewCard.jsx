import { FaCircleArrowRight, FaCircleArrowLeft, FaStar } from "react-icons/fa6";
import avatarimg1 from "../assets/images/avatarimg1.jpg";

function ReviewCard() {
  return (
    <div className="review-card relative bg-[#464646] rounded-xl shadow-xl space-y-4 p-6">
      {/*Avatar(Profile) */}
      <div className="avatar flex gap-4 items-center ">
        <img
          src={avatarimg1}
          className="rounded-full size-[52px] object-cover "
          alt=""
        />
        <div>
          <h3 className="font-semibold">Aavash Thapa</h3>
          <p className="text-xs">Happy Customer</p>
        </div>
      </div>
      {/*Review Stars */}
      <div className="text-yellow-500 flex text-xl mb-4">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      {/*Description */}
      <p className="text-xs leading-6">
        I&apos;ve been coming to this gym for 3 year now and I&apos;ve never
        been in better shape. The trainers are amazing and they always push me
        be my best. I&apos;m so glad to this gym.
      </p>
      {/*Slide Left */}
      <FaCircleArrowLeft  className="absolute bottom-[50%] -left-2 text-xl text-blue-900 "/>
      {/* Slide Right */}
      <FaCircleArrowRight className="absolute bottom-[50%] -right-2 text-xl text-red-500 " />
      
    </div>
  );
}

export default ReviewCard;
