import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project1 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/YingfeiHong01/Recsys2022Challenge_Dressipy"
          target="_blank"
          rel="noreferrer"
        >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Created personalized and inspiring product discovery experience and increased the retailer's revenue
        </p>
      </a>
      </div>
      <img 
        src= '../assets/dressipy.png'
        alt = 'project'
      />
    </motion.div>
  );
};

const Project2 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/YingfeiHong01/data_visualization"
          target="_blank"
          rel="noreferrer"
        >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Dynamic visualization of both spatial and temporal data
        </p>
      </a>
      </div>
      <img 
        src= '../assets/data_vis.png'
        alt = 'project'
      />
    </motion.div>
  );
};

const Project3 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/YingfeiHong01/IEEE-CIS-Fraud-Detection"
          target="_blank"
          rel="noreferrer"
        >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Reduced the fraud loss and increased the revenue for hundreds of businesses
        </p>
      </a>
      </div>
      <img 
        src= '../assets/Vesta.png'
        alt = 'project'
      />
    </motion.div>
  );
};

const Project4 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/YingfeiHong01/Data1030-FinalProject"
          target="_blank"
          rel="noreferrer"
        >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Predicted churning customers, gave insights about customer management, and reduced the customer loss
        </p>
      </a>
      </div>
      <img 
        src= '../assets/Customer.png'
        alt = 'project'
      />
    </motion.div>
  );
};

const Project5 = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/YingfeiHong01/yingfei_blog"
          target="_blank"
          rel="noreferrer"
        >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Provided tutorials for machine learning algorithms and built machine learning models from scratch
        </p>
      </a>
      </div>
      <img 
        src= '../assets/Community.png'
        alt = 'project'
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          A data science passionate that has used the skills and knowledge across different industries and dealt with various different problems
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project1 title="Recommendation System" />
          <Project2 title="Data Visualization" />
          <Project3 title="Fraud Detection" />

         

          {/* ROW 2 */}
          <Project4 title="Churn Prediction" />
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
          </div> 
          <Project5 title="Community Contribution" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
