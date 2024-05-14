import { useState } from "react";
import { PROJECTS } from "../constants";
import ProjectDetails from "../components/ProjectDetails";
import { motion } from "framer-motion";
function Projects() {
  const [project, setProject] = useState(null);
  function onCloseProject() {
    setProject(null);
  }
  function onOpenProject(project) {
    setProject(project);
  }
  return (
    <div id="projects" className=" border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {PROJECTS.map((project) => (
          <div
            onClick={() => onOpenProject(project)}
            key={project.id}
            className="flex  h-[490px] w-[330px] cursor-pointer flex-col gap-3.5 overflow-hidden rounded-[10px] px-5 py-[26px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] transition-all duration-[0.5s] ease-[ease-in-out] hover:-translate-y-2.5 hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110 supports-[display:grid]:col-span-1 supports-[display:grid]:grid md:inset-x-1/4 md:inset-y-auto"
          >
            <img
              src={project.image}
              className=" h-[180px] w-full rounded-[10px] shadow-[0_0_16px_2px_rgba(0,0,0,0.3)]"
            />
            <div className=" mt-1  flex w-full flex-wrap items-center gap-2">
              {project.tags.map((tag, index) => (
                <span
                  className="rounded-[10px] bg-slate-900 px-2 py-0.5 text-xs font-normal text-purple-500 "
                  key={index}
                >
                  {tag} &nbsp;{" "}
                </span>
              ))}
            </div>
            <div className="flex w-full flex-col gap-0 px-0.5 py-0">
              <div className="line-clamp-2 max-w-full overflow-hidden text-ellipsis text-xl font-semibold">
                {project.title}
              </div>
              <div className="ml-0.5 text-xs font-normal">{project.date}</div>
              <div className="mt-2 line-clamp-3 max-w-full overflow-hidden font-normal">
                {project.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {project && (
        <ProjectDetails project={project} onCloseModal={onCloseProject} />
      )}
    </div>
  );
}

export default Projects;
