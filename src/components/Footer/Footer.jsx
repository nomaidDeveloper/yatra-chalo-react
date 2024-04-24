import React from "react";
import FooterLogo from "../../assets/yclogo.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-2 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
                {/* TravelloGo */}
              </h1>
              <p className="text-sm mt-2">
                Yatra Chalo helps you travel anywhere in the world easily and safely. It makes planning your trip simple and worry-free. Whether you've traveled a lot or it's your first trip, Yatra Chalo makes everything easy. You can book where to stay, how to get there, and find all the info you need for your trip. Come join us and see how Yatra Chalo makes traveling fun and stress-free!
              </p>
              <br />
              <div className="flex items-center gap-3 ">
                <FaLocationArrow />
                <p>Indore, Madhya Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 9981380628</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-center">
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-center mb-3 text-center">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3 implinks">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              @copyright 2024 All rights reserved || Made with ❤️ by Nomaid Developer
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
