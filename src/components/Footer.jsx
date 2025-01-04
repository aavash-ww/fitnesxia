import { BsTelegram } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import {
  companyList,
  categoriesList,
  helpList,
  contactList,
} from "../data/footerData";

function Footer() {
  return (
    <footer className="footer-section bg-bgLight ">
      <div className="container  divide-y-2 divide-gray-500  pt-12 pb-4">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1.4fr] gap-4">
          {/*Company */}
          <div>
            {companyList.map((el) => (
              <div key={el.title}>
                <h3 className="text-sm font-semibold mb-4">{el.title}</h3>
                <ul>
                  {el.list.map((li, idx) => (
                    <li key={idx} className="text-xs font-normal mb-2">
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/*Categories */}
          <div>
            {categoriesList.map((el) => (
              <div key={el.title}>
                <h3 className="text-sm font-semibold mb-4">{el.title}</h3>
                <ul>
                  {el.list.map((li, idx) => (
                    <li className="text-xs font-normal mb-2" key={idx}>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/*Help */}
          <div>
            {helpList.map((el) => (
              <div key={el.title}>
                <h3 className="text-sm font-semibold mb-4">{el.title}</h3>
                <ul>
                  {el.list.map((li, idx) => (
                    <li className="text-xs font-normal mb-2" key={idx}>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/*Contacts */}
          <div>
            {contactList.map((el) => (
              <div key={el.title}>
                <h3 className="text-sm font-semibold mb-4">{el.title}</h3>
                <ul>
                  {el.list.map((li, idx) => {
                    const IconComponent = el.icons[idx];
                    return (
                      <li
                        className="flex items-center gap-1 text-xs font-normal mb-2.5"
                        key={idx}
                      >
                        <IconComponent className="text-xl text-primary" />
                        {li}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          {/*Subscribe News letter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              Subscribe Our Newsletter
            </h3>
            {/* Input */}
            <div className="relative">
              <BsTelegram className=" absolute right-6 inset-y-2 text-2xl text-primary" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[92%] rounded-3xl p-2 "
              />
            </div>
            <p className="text-sm px-2 mt-2 ">
              Never Miss an Update & News to your email
            </p>
          </div>
        </div>
        {/* Copyrights Section */}
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <FaDumbbell className="text-3xl text-primary" />
            <p className="text-xl font-bold">FITNESXIA</p>
          </div>

          <p className="text-xs text-gray-500">
            @2023 DesingAxen. All Copyrights Reserved
          </p>

          <div className="flex items-center gap-2">
            <FaFacebook />
            <FaSquareInstagram />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
