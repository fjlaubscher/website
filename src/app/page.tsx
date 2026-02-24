import WorkHistory from '@/components/work-history';

export default function Home() {
  return (
    <>
      <section className="w-full max-w-4xl mx-auto text-lg mb-8">
        <h2 className="text-3xl font-bold mb-8 w-full text-center">About</h2>
        <p className="mb-4">
          I'm a{' '}
          <span className="font-semibold text-primary-light dark:text-primary-dark">
            Senior Full-stack Engineer
          </span>{' '}
          at Toptal with 13 years of experience building and maintaining robust
          web applications.
        </p>
        <p className="mb-4">
          I've delivered software across a range of industries and team
          structures—from high-growth startups to established
          enterprises—solving real-world problems with clean, scalable
          solutions.
          <br />
          On the front end, I focus on React, TypeScript, and CSS Modules.
          <br />
          On the back end, I usually reach for Node.js, but when performance or
          architecture call for it, I lean on .NET.
        </p>
        <p>
          With over 7 years of remote work experience, I thrive in distributed
          teams and bring a reliable, self-directed work ethic to every project.
        </p>
      </section>
      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 w-full text-center">
          Work History
        </h2>
        <WorkHistory />
      </section>
    </>
  );
}
