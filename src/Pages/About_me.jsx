import Lottie from "lottie-react";
import Title from "../Component/Title";
import animationData from "../assets/Animation - 1700169099201.json";
import { motion } from "framer-motion";

const About_me = () => {
  return (
    <div className="section-trans overflow-x-hidden" id="about_me">
      <section className="container">
        <Title title="About me" />
        <div className="d-flex justify-content-center align-items-center gap-2 flex-column flex-lg-row text-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="img order-1 order-lg-0 rounded d-none d-lg-block about-img"
          >
            <Lottie animationData={animationData} />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <p className="text-start text-justify" >
              Hi, I'm <span className="about-name fw-bold">Sagar Parise</span>, a passionate <span className="about-name fw-bold">MERN Stack Developer</span> who loves
              turning ideas into reality through code. With a strong foundation
              in web development, I specialize in building modern, responsive,
              and user-friendly applications that are fast, secure, and
              scalable. 
              <br />
              <span className="about-name fw-bold">
                (2019- 2023) Civil Engineering
                <br />
                Sant Gadge Baba Amravati University
              </span>
              <br />I transitioned into the tech
              world, driven by my passion for problem-solving and innovation. I
              enjoy crafting stylish websites, intuitive web services, and
              robust online stores, ensuring seamless user experiences with
              clean and efficient code.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3">
              {[
                {
                  text: "Download CV",
                  link: "https://drive.google.com/file/d/1bdRU2lxwEl_Mhv17tgg0bgItebv4Zvd3/view?usp=sharing",
                },
                {
                  text: "Get in touch",
                  link: "#contact",
                },
                {
                  text: "Show Skills",
                  link: "#skills",
                },
              ].map((item, index) => (
                <div key={index} className="me-0 me-lg-4">
                  <a href={item.link} target="_blank">
                    <button type="button" className="btn">
                      {item.text}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About_me;
