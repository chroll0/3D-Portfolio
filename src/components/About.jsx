import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[240px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[270px] flex justify-evenly items-center flex-col cursor-pointer"
        >
          <img src={icon} alt={title} className=" w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} tracking-wide`}>Overview</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a self-taught junior frontend developer with a solid programming
        foundation. I have gained valuable skills and knowledge in frontend
        development, making me well-prepared to seek job opportunities and apply
        my expertise in a professional setting. I made a transition from a
        career in law to pursue my true passion for programming. Now I'm
        dedicated to continuous learning and growth in my web development
        career.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
