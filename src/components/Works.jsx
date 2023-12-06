import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (e) => {
    setHoveredElement(e);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const isHovered = (e) => hoveredElement === e;

  return (
    <motion.div variants={fadeIn("up", spring, index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full h-full rounded-md"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-[83%] object-fill rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-between items-end mt-0 mb-4 m-7 card-img_hover">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer
              ${isHovered("link") ? "green-gradient" : "black-gradient"}`}
              onMouseEnter={() => handleMouseEnter("link")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={demo}
                alt="demo link"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer
              ${isHovered("github") ? "green-gradient" : "black-gradient"}`}
              onMouseEnter={() => handleMouseEnter("github")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={github}
                alt="github"
                className="w-[78%] h-[78%] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase my expertise and experience through real-world
          examples. While only a select few are featured here, you can visit my
          <a
            href="https://github.com/chroll0?tab=repositories"
            target="_blank"
            className="text-white hover:text-secondary"
          >
            {" "}
            GitHub{" "}
          </a>
          profile to explore additional projects. Each project is succinctly
          described and includes links to both code repositories and live demos.
          They underscore my proficiency in problem-solving, versatility with
          various technologies, and adept project management.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
