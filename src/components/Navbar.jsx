import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsGithub,
} from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, profileImg } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("false");
  const [profileVisible, setProfileVisible] = useState("false");

  const variants = {
    hidden: {
      y: "-110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
    },
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 mr-4"
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          </Link>
          <div
            className="cursor-pointer z-20 "
            onClick={() => {
              setToggle(true);
              setProfileVisible(!profileVisible);
            }}
          >
            <p className="text-white text-[18px] font-bold transition hover:text-secondary">
              Saba Antadze
            </p>
          </div>
        </div>
        {/* {!profileVisible ? (
            <BsArrowLeftCircleFill className="text-white hover:text-secondary transition duration-150 w-5 h-5" />
          ) : (
            <BsArrowRightCircleFill className="text-white hover:text-secondary transition duration-150 w-5 h-5" />
          )} */}

        {/* info modal window */}
        <motion.div
          className={
            "p-6 black-gradient absolute top-[4.5rem] lg:left-28 max-w-[250px] z-10 rounded-xl flex flex-col gap-6"
          }
          initial="hidden"
          animate={profileVisible ? "hidden" : "visible"}
          variants={variants}
        >
          <div className=" w-full flex justify-center flex-col items-center">
            <img
              className="w-[60%] h-auto rounded-full"
              src={profileImg}
              alt="profile"
            />
            <h2 className="text-white text-[18px] font-bold mt-3 tracking-wider">
              Saba Antadze
            </h2>
          </div>
          <div className="text-white text-[12px] tracking-wide flex flex-col gap-4">
            <h4 className="text-[16px] italic tracking-wider flex justify-center">
              Details
            </h4>
            <div className="flex justify-start">
              <MdEmail className="w-3.5 h-3.5 mr-2" />
              <p>sabantadze@gmail.com</p>
            </div>
            <div className="flex justify-start">
              <MdPhone className="w-3.5 h-3.5 mr-2" />
              <p>+995 598 787 261</p>
            </div>
            <div className="flex justify-start">
              <AiFillLinkedin className="w-3.5 h-3.5 mr-2" />
              <a
                className="hover:text-secondary"
                href="https://www.linkedin.com/in/saba-antadze-296966264/"
                target="_blank"
              >
                Profile | Saba Antadze
              </a>
            </div>
            <div className="flex justify-start">
              <BsGithub className="w-3.5 h-3.5 mr-2" />
              <a
                className="hover:text-secondary"
                href="https://github.com/chroll0"
                target="_blank"
              >
                Profile | chroll0 (Saba Antadze)
              </a>
            </div>
            <div className="flex justify-start">
              <MdLocationPin className="w-3.5 h-3.5 mr-2" />
              <p>
                Nino Zhvania ST. 10, <br />
                Tbilisi 0179, <br />
                Georgia
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <a
              href="https://drive.google.com/file/d/1huTPazJP7A97QUdReW5TSShoLysQKF8E/view"
              target="_blank"
            >
              <button className="text-[16px] uppercase text-white font-bold tracking-[1.5px] shadow-md shadow-primary hover:shadow-xl bg-tertiary rounded-xl outline-none py-3 px-8">
                Resume
              </button>
            </a>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-[14px] capitalize hover:tracking-wider transition-all">
              <a href="#contact">contact me</a>
            </p>
          </div>
        </motion.div>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium tracking-wide cursor-pointer uppercase transition duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className={`${
              !toggle ? "w-[23px]  h-[23px]" : "w-[28px] h-[28px]"
            } cursor-pointer object-contain`}
            onClick={() => {
              setProfileVisible(true);
              setToggle(!toggle);
            }}
          />

          <motion.div
            initial="hidden"
            animate={toggle ? "hidden" : "visible"}
            variants={variants}
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-16 right-6 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-secondary" : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px] uppercase tracking-wide`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
