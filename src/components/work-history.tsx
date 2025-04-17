import ProjectCard from './project-card';

import workData from '../data/work.json';

const WorkHistory = () => {
  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      <h2 className="text-3xl font-bold mb-8 sm:mb-8 text-center text-neutral-900 dark:text-neutral-100">
        Work History
      </h2>
      <ul className="space-y-6 sm:space-y-10">
        {workData.map((job: Website.WorkHistory, idx) => (
          <li
            key={idx}
            className="border border-neutral-800 rounded-lg p-3 sm:p-6 shadow bg-white dark:bg-neutral-900 dark:border-neutral-700"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 sm:mb-2">
              <div>
                <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {job.role}
                </span>
                <span className="text-neutral-400 dark:text-neutral-400">
                  {' '}
                  @{' '}
                </span>
                <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {job.employer}
                </span>
              </div>
              <div className="text-sm text-neutral-400 dark:text-neutral-400 mt-1 md:mt-0">
                {job.from} – {job.to || 'Present'}
              </div>
            </div>
            <div className="text-sm text-neutral-400 dark:text-neutral-400 mb-2 sm:mb-4">
              {job.location}
            </div>
            {job.blurb && (
              <div className="mb-2 sm:mb-4 text-base text-neutral-400 dark:text-neutral-400 italic whitespace-pre-line">
                {job.blurb}
              </div>
            )}
            <ul className="space-y-3 sm:space-y-6">
              {job.projects.map((project, pIdx) => (
                <ProjectCard key={pIdx} project={project} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkHistory;
