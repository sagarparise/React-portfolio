import { FaBars } from "react-icons/fa";
import { navPages } from "../data";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        headerRef.current.style.height = "60px";
      } else {
        headerRef.current.style.height = "80px";
      }
    });
  }, []);
  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="navbar navbar-expand-lg position-sticky top-0"
      ref={headerRef}
      style = {{
        transition:"height .2s",
        borderBottom: "1px solid white",
      }}
    >
      <div className="container">
        <div className="navbar-brand logo fw-bold">
          <h2 className="">Portfolio</h2>
        </div>
        <button
          className="navbar-toggler text-light bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse rounded-bottom" id="myNavbar">
          <ul className="navbar-nav ms-auto">
            {navPages.map((page) => {
              const { id, name, link } = page;
              return (
                <li key={id} className="nav-item py-2">
                  <a className="nav-link px-0" href={link}>
                    <span>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
