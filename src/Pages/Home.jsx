import { useTypewriter, Cursor } from "react-simple-typewriter";
import HomeSocial from "../Component/HomeSocial";
import MobileHomeSocial from "../Component/MobileHomeSocial";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1700167698291.json";
import animationData1 from "../assets/Animation - 1741366770013.json";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const homeTitle = useTypewriter({
    words: ["frontend Developer", "Backend Developer","MERN Stack Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  const welcomeTitle = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" overflow-x-hidden">
      <HomeSocial />
      <section
        className="page-container container d-grid place-items-center"
        id="home"
      >
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="welcome">
              <motion.h6
                variants={welcomeTitle}
                initial={"hidden"}
                whileInView={"visible"}
                exit={{ x: "-100%", opacity: 0 }}
              >{`Hi There, it's`}</motion.h6>
              <motion.h1
                variants={welcomeTitle}
                initial={"hidden"}
                whileInView={"visible"}
                transition={{ delay: 0.1 }}
                exit={{ x: "-100%", opacity: 0 }}
                className="homeName mb-2"
              >{`SAGAR PARISE`}</motion.h1>
              <motion.h3
                variants={welcomeTitle}
                initial={"hidden"}
                whileInView={"visible"}
                transition={{ delay: 0.2 }}
                exit={{ x: "-100%", opacity: 0 }}
              >
                {`I'm a ${homeTitle[0]}`}
                <Cursor cursorStyle="|" />
              </motion.h3>
              {[
                "Passionate about designing and building intuitive web interfaces. I enjoy turning creative concepts into functional, interactive experiences that enhance user engagement.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  variants={welcomeTitle}
                  initial={"hidden"}
                  whileInView={"visible"}
                  transition={{ delay: 0.25 + index * 0.05 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  className="text-justify"
                >
                  {text}
                </motion.p>
              ))}
              <MobileHomeSocial />
              <div className="d-flex gap-3 mt-4 btn-container justify-content-lg-start justify-content-center align-items-center">
                <motion.a
                  variants={welcomeTitle}
                  initial={"hidden"}
                  whileInView={"visible"}
                  transition={{ delay: 0.38 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  href="https://drive.google.com/file/d/1bdRU2lxwEl_Mhv17tgg0bgItebv4Zvd3/view?usp=sharing"
                  target="_blank"
                >
                  <button className="button rounded" type="button">
                    <span className="button__text">Download CV</span>
                    <span className="button__icon">
                      <FaDownload className="text-light" />
                    </span>
                  </button>
                </motion.a>
                {[
                  {
                    text: "Contact me",
                    link: "#contact",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={welcomeTitle}
                    initial={"hidden"}
                    whileInView={"visible"}
                    transition={{ delay: 0.35 + index * 0.03 }}
                    exit={{ x: "-100%", opacity: 0 }}
                  >
                    <a href={item.link}>
                      <button type="button" className="btn">
                        {item.text}
                      </button>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 second-col">
            <motion.div
              initial={{ x: "130%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "130%", opacity: 0 }}
              className="mt-5"
            >
              <Lottie animationData={animationData1} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
