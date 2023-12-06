import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { Tilt } from "react-tilt";

const SkillCard = ({ index, title, description }) => {
  return (
    <Tilt className=" xs:w-[250px] w-[85%]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] min-h-[300px] p-8 flex justify-start items-center flex-col"
        >
          <h3 className="text-white text-[20px] font-bold text-center capitalize min-h-[60px] tracking-wider">
            {title}
          </h3>
          <p className="text-[13px] text-center mt-6 tracking-wider">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Experience</p>
        <h2 className={`${styles.sectionHeadText} tracking-wide`}>Skills</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I specialize in developing and maintaining web applications using
        React.js and Next.js, alongside various related technologies. I am
        dedicated to collaborating with cross-functional teams to collectively
        craft high-quality products. My commitment extends to implementing
        responsive design principles, ensuring seamless compatibility across
        different browsers. Furthermore, I am always ready to engage in code
        reviews, offering valuable and constructive feedback to my fellow
        developers. My goal is to contribute to the creation of exceptional
        digital experiences while continuously improving and refining my craft.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 xs:justify-start justify-center">
        {skills.map((skill, index) => (
          <SkillCard key={`skill-${index}`} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
