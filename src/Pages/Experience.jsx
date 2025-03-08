import Lottie from "lottie-react";
import Title from "../Component/Title";
import animationData from "../assets/Animation - 1741367968867.json";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="section-trans overflow-x-hidden" id="about_me">
      <section className="container">
        <Title title="Experience" />
        <div className="d-flex align-items-start gap-4 flex-column flex-lg-row text-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="img order-1 order-lg-0 rounded d-none d-lg-block about-img "
            style={{
              marginInline: "10px",
            }}
          >
            <Lottie animationData={animationData} />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <p className="text-start">
              <span className="about-name fw-bold">
                Junior Software Engineer
                <br />
              </span>
              <div className=" d-flex justify-content-between align-items-start">
                <span className="about-name fw-bold">
                  HiMedia Labortaries Pvt Ltd
                </span>
                <span className="about-name fw-bold">July 2024 - Present</span>
              </div>
              As a Junior Software Engineer at HiMedia Laboratories Pvt Ltd, I
              specialize in PHP, SQL, MERN stack, and AWS, working on various
              aspects of web development. My role involves building and
              maintaining server-side logic using PHP & Node.js, ensuring secure
              and high-performance applications. I also focus on designing and
              optimizing SQL databases for efficient data management. In
              addition, I develop dynamic, responsive, and user-friendly web
              applications using the MERN stack, delivering seamless user
              experiences. My work also includes AWS integration, utilizing
              services like S3 and EC2 to implement scalable cloud solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
