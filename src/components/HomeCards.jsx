import Card from './Card.jsx';
import { Link } from 'react-router-dom';

const HomeCards = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card bg="bg-white border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">For Developers</h2>
            <p className="text-slate-500 mb-6">
              Browse our React jobs and start your career today with top employers.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-3 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Browse Jobs
            </Link>
          </Card>
          
          <Card bg="bg-indigo-50 border border-indigo-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">For Employers</h2>
            <p className="text-slate-600 mb-6">
              List your job to find the perfect developer for your tech stack.
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-5 py-3 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
