import { Link } from 'react-router-dom';

const ViewAllJobs = () => {
  return (
    <section className="max-w-lg mx-auto my-12 px-6">
      <Link
        to="/jobs"
        className="block bg-slate-900 hover:bg-slate-800 text-white text-center py-4 px-6 rounded-xl font-bold transition-colors shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
