import { Link } from "react-router-dom";
import { FaDumbbell, FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <header
      className="
      bg-gradient-to-tr from-black via-gray-950 to-black sticky top-0 z-10 "
    >
      <nav className=" navbar container  ">
        <div className="wrapper flex items-center justify-between py-4 text-white  text-nowrap ">
          {/* Logo Section */}
          <Link to={"/"} className=" flex items-center gap-2 ">
            <FaDumbbell className=" text-4xl text-primary " />
            <span className=" text-2xl font-bold "> FITNESXIA</span>
          </Link>

          <div className=" items-center gap-8 lg:flex hidden ">
            {/* Navigation Menu */}
            <ul className="flex text-sm font-medium space-x-10 ">
              <li className="text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Program</li>
              <li className="hover:text-primary cursor-pointer">Membership</li>
              <li className="hover:text-primary cursor-pointer">
                Testimonials
              </li>
            </ul>

            {/* Register */}
            <button className="btn-primary">Sign Up</button>
          </div>
          {/* Burger Menu and User  */}
          <div className="flex lg:hidden items-center text-2xl space-x-8 ">
            <GiHamburgerMenu />
            <FaUser />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
