import { social } from "../data";
import Title from "../Component/Title";
import { motion } from "framer-motion";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import sent from "../assets/Animation - 1700172183132.json"

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvawlqw");
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
    <div className="section-trans overflow-x-hidden" id="contact">
      <section className="container">
        <Title title="Contact" />
        <div className="row justify-content-center d-flex gap-4 row-gap-0">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            exit={{ x: "-100vw" }}
            className="col col-lg-4 my-3 rounded contact-cont p-4 flex-grow-1"
          >
            <div className="contact-info">
              <div className="contact-name">
                <div className="sm-title">
                  <h3>Email</h3>
                </div>
                <p>
                  <a href="mailto:hagerelroby.az2020@gmail.com">
                      sagarparise01@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-name">
                <div className="sm-title mt-4">
                  <h3>Phone</h3>
                </div>
                <p>
                  <a href={""}>+91 9623503848</a>
                </p>
              </div>
              <div className="d-flex gap-3 mt-3">
                {social.map((item, index) => {
                  return (
                    <motion.span
                      key={item.id}
                      variants={welcomeTitle}
                      initial={"hidden"}
                      whileInView={"visible"}
                      transition={{ delay: index * 0.03 }}
                      exit={{ x: -100, opacity: 0 }}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        className="fs-2 p-2 rounded contact-icon"
                      >
                        {item.icon}
                      </a>
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            exit={{ x: "100vw" }}
            className="col-lg-7 my-3 rounded contact-cont p-4 flex-grow-1"
          >
            <div className="contact-form">
              <div className="sm-title">
                <h3>Get In Touch</h3>
              </div>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows="5"
                        className="form-control"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 d-flex">
                    <div className="send">
                      <button
                        className="btn"
                        type="submit"
                        disabled={state.submitting}
                      >
                        <span>{state.submitting ? "Submitting..." : "Submit"}</span>
                      </button>
                    </div>
                    {state.succeeded && <p className="d-flex gap-2 justify-content-center align-items-center m-0 ps-3"><Lottie style={{height:40}} loop={false} animationData={sent} /> Your message sent successfully</p>}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
