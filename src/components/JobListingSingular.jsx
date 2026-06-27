import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import Badge from './Badge.jsx';

const JobListingSingular = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;
  if (!showFullDescription && description.length > 100) {
    description = description.substring(0, 100) + '...';
  }

  // Determine badge type based on job type string
  let badgeType = 'default';
  if (job.type === 'Full-Time') badgeType = 'fullTime';
  if (job.type === 'Part-Time') badgeType = 'partTime';
  if (job.type === 'Remote') badgeType = 'remote';
  if (job.type === 'Contract') badgeType = 'contract';

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out border border-slate-200 hover:-translate-y-1 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <Badge type={badgeType}>{job.type}</Badge>
          <h3 className="text-xl font-bold text-slate-800 mt-3">{job.title}</h3>
        </div>

        <div className="mb-4 text-slate-600 flex-grow">
          {description}
          <button 
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="text-indigo-600 ml-1 hover:text-indigo-800 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1"
          >
            {showFullDescription ? 'Less' : 'More'}
          </button>
        </div>

        <div className="flex items-center text-emerald-600 font-semibold mb-4">
          <FaMoneyBillWave className="mr-2" />
          {job.salary} / Year
        </div>

        <div className="border-t border-slate-100 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-auto">
          <div className="text-rose-600 font-medium mb-3 md:mb-0 flex items-center">
            <FaMapMarkerAlt className="text-lg mr-2" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-center text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListingSingular;
