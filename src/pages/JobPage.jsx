import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaMoneyBillWave, FaEnvelope, FaPhone } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner.jsx';
import Badge from '../components/Badge.jsx';
import EmptyState from '../components/EmptyState.jsx';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setFetchError(false);
        const res = await fetch(`/api/jobs/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );

    if (!confirm) return;

    deleteJob(jobId);
    toast.success('Job deleted successfully');
    navigate('/jobs');
  };

  if (loading) {
    return (
      <div className="py-24">
        <Spinner className="my-10" />
      </div>
    );
  }

  if (fetchError || !job) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <EmptyState 
          message="Job Not Found" 
          subMessage="The job listing you are looking for does not exist or failed to load."
          actionLink="/jobs"
          actionText="Back to Job Listings"
        />
      </div>
    );
  }

  // Determine badge type based on job type string
  let badgeType = 'default';
  if (job.type === 'Full-Time') badgeType = 'fullTime';
  if (job.type === 'Part-Time') badgeType = 'partTime';
  if (job.type === 'Remote') badgeType = 'remote';
  if (job.type === 'Contract') badgeType = 'contract';

  return (
    <>
      <div className="mb-8">
        <Link
          to="/jobs"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1"
        >
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="mb-4">
              <Badge type={badgeType}>{job.type}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              {job.title}
            </h1>
            <div className="flex items-center text-rose-600 font-medium">
              <FaMapMarkerAlt className="mr-2 text-lg" />
              <span>{job.location}</span>
            </div>
          </div>

          {/* Description & Salary Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Job Description
              </h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Salary & Benefits
              </h3>
              <p className="text-emerald-600 font-semibold flex items-center text-xl">
                <FaMoneyBillWave className="mr-2" />
                {job.salary} / Year
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Info Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-6">
              Company Info
            </h3>
            
            <h4 className="text-xl font-bold text-indigo-600 mb-2">{job.company.name}</h4>
            <p className="text-slate-600 leading-relaxed text-sm mb-6">
              {job.company.description}
            </p>

            <div className="border-t border-slate-100 my-6"></div>

            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Contact Email
                </h5>
                <a 
                  href={`mailto:${job.company.contactEmail}`}
                  className="text-slate-700 hover:text-indigo-600 font-medium break-all flex items-center text-sm transition-colors"
                >
                  <FaEnvelope className="mr-2 text-slate-400" />
                  {job.company.contactEmail}
                </a>
              </div>

              {job.company.contactPhone && (
                <div>
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Contact Phone
                  </h5>
                  <a 
                    href={`tel:${job.company.contactPhone}`}
                    className="text-slate-700 hover:text-indigo-600 font-medium flex items-center text-sm transition-colors"
                  >
                    <FaPhone className="mr-2 text-slate-400" />
                    {job.company.contactPhone}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Manage Actions Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-6">
              Manage Listing
            </h3>
            
            <div className="space-y-3">
              <Link
                to={`/edit-job/${job.id}`}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-4 rounded-xl block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                Edit Job
              </Link>
              <button
                onClick={() => onDeleteClick(job.id)}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white text-center font-bold py-3 px-4 rounded-xl block transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 cursor-pointer"
              >
                Delete Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { JobPage as default };
