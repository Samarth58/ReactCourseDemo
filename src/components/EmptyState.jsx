import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';

const EmptyState = ({ message = "No jobs found.", subMessage = "Try checking back later or tweaking your search.", actionLink = null, actionText = "Go Home" }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-sm border border-slate-200 text-center">
      <FaExclamationCircle className="text-slate-300 w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-slate-800 mb-2">{message}</h3>
      <p className="text-slate-500 mb-6">{subMessage}</p>
      {actionLink && (
        <Link 
          to={actionLink}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
