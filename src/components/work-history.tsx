import ProjectCard from './project-card';

import workData from '../data/work.json';

const WorkHistory = () => {
  return (
    <div className="flex flex-col gap-8">
      {workData.map((job: Website.WorkHistory, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-4 border border-neutral-200 rounded-lg p-4 shadow bg-white dark:bg-neutral-900 dark:border-neutral-700"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {job.role} @ {job.employer}
              </span>
              <div className="hidden text-sm text-neutral-700 dark:text-neutral-400 md:block">
                {job.location}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-blue-700 dark:text-blue-400">
                {job.from} - {job.to}
              </div>
              <div className="text-sm text-neutral-700 dark:text-neutral-400 md:hidden">
                {job.location}
              </div>
            </div>
          </div>
          <p className="italic whitespace-pre-line">{job.blurb}</p>
          {job.projects.length > 0 ? (
            <div className="flex flex-col gap-4">
              {job.projects.map((project, pIdx) => (
                <ProjectCard key={pIdx} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
