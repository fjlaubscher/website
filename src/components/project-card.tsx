'use client';
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ProjectCard = ({ project }: { project: Website.WorkProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4 border border-neutral-200 dark:border-neutral-700 cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
      aria-expanded={isOpen}
      tabIndex={0}
      role="button"
    >
      <div className="flex items-center gap-2 w-full text-left focus:outline-none">
        <span className="font-medium text-neutral-900 dark:text-neutral-100">
          {project.name}
        </span>
        <span className="ml-auto text-xs text-neutral-400">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div className="text-xs text-neutral-400 dark:text-neutral-400 flex flex-wrap gap-2 items-center mt-2">
        {project.tech.map((tech, tIdx) => (
          <span
            key={tIdx}
            className="inline-block rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        aria-hidden={!isOpen}
      >
        <div className="text-sm text-neutral-700 dark:text-neutral-400">
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
