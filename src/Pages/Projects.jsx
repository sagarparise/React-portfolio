import Title from "../Component/Title";
// import { useGetProjects } from "../Component/GetProjects";
import { motion } from "framer-motion";
import { projects } from "../data";
const Projects = () => {
  return (
    <div className="section-dark overflow-x-hidden" id="projects">
      <section className="container">
        <Title title="Projects" />
        <div className="row row-gap-4 justify-content-center">
          {projects.map((project, index) => {
            return (
              <div key={project.id} className="col-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`card mb-3 project-card d-flex ${
                    index % 2 ? " flex-row" : " flex-row-reverse"
                  }
                  `}
                >
                  <div
                    className="project-img overflow-hidden p-3 border rounded overflow-hidden"
                    style={{ maxWidth: "500px" , height:"300px" , borderColor: '#075985'}}
                  >
                  <img
                      src={project.img}
                      className="card-img "
                      alt={project.title}
                      style={{ height: "-webkit-fill-available" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body text-light p-4 ">
                    <a href={project.repoUrl} target="_blank">
                      <h5 className="">{project.title}</h5>
                    </a>
                    <p style={{fontSize:".9rem"}}>{project.description}</p>
                    <div className="d-flex gap-2">
                      <a href={project.repoUrl} className="btn" target="_blank">
                        View Code
                      </a>
                      <a href={project.liveDemo} className="btn" target="_blank">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
