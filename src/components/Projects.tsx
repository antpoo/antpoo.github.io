import React from "react";
import { HashLink } from "react-router-hash-link";
import GithubButton from "./GithubButton";
import { projects } from "./projects/project_data";
import { ChevronDoubleDownIcon, ChevronDoubleRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <CodeBracketIcon className="inline-block w-10 text-pink-600" />
        <h1 className="my-2 text-3xl font-bold">Projects</h1>
        <p className="my-6 text-center">
          Go to my GitHub repository or scroll down to see the projects that I've made.
        </p>
        <a
          href="https://github.com/antpoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubButton />
        </a>
        <HashLink smooth to="/projects#projects">
          <ChevronDoubleDownIcon className="inline-block w-10 mt-10 mb-32 text-pink-600 animate-bounce" />
        </HashLink>
      </div>

      <div id="projects" className="flex-col pt-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex mb-4 border border-pink-600 border-solid rounded-md"
          >
            <div className="flex-1 p-4">
              <img
                src={`/project_images/${project.image}`}
                alt={project.name}
                className="w-full h-auto my-4"
              />
              <ul className="flex flex-wrap items-center">
                {project.tech.map((tech, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <img
                      key={index}
                      src={`/code_icons/${tech}`}
                      alt={tech}
                      className="mx-5 w-9 h-9"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 p-4">
              <h2 className="my-2 text-xl font-bold">{project.name}</h2>
              <p className="mb-10">{project.description}</p>
              <div className="flex justify-end">
                <a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-pink-600 hover:underline group"
                >
                  GitHub Repo
                  <ChevronDoubleRightIcon className="w-4 mx-2 group-hover:animate-bounce-horizontal" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
