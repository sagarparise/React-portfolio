import { motion } from "framer-motion";

const Title = (title) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 250 }}
      exit={{ y: -100, opacity: 0 }}
      data-title={title.title}
      className="title"
    >
      <h1 className="fw-bold">{title.title}</h1>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 250 }}
        exit={{ width: 0, opacity: 0 }}
        className="title-underline rounded"
      ></motion.div>
    </motion.div>
  );
};

export default Title;
