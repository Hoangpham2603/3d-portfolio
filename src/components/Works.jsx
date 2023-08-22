import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../HOC";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
              onClick={() => window.open(demo, "_blank")}
            >
              {/* <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              /> */}
              <span className="text-[10px]">Demo</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
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
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum est
          doloribus non minima et delectus nihil iure ratione, earum enim, id
          doloremque, eligendi aliquid expedita assumenda laborum animi.
          Repudiandae quod explicabo consequatur numquam natus laborum dolorum
          cupiditate aut accusamus ipsa, sed tempore quae ipsam veniam
          voluptatibus laboriosam aliquam in deleniti nesciunt, accusantium
          necessitatibus impedit suscipit. Tempora neque earum officia libero,
          hic necessitatibus accusantium minima repellendus nam culpa eos est
          enim commodi, suscipit labore blanditiis numquam iure quis rem quidem
          accusamus unde autem nemo! Odio voluptas voluptates at, pariatur
          blanditiis non, ab, perferendis eveniet ratione eaque sit similique
          numquam doloremque porro.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((proj, index) => (
          <ProjectCard key={`project-${index}`} {...proj} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
