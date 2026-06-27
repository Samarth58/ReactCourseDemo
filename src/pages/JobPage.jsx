import { useLoaderData, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowLeft, FaMapMarkerAlt, FaMoneyBillWave, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import staticJobsData from '../data/jobs.json';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const job = useLoaderData();

  const onDeleteClick = async (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?');
    if (!confirm) return;

    const result = await deleteJob(jobId);
    // result === false means demo mode — toast already shown in App.jsx
    if (result === false) return;

    toast.success('Job deleted successfully');
    navigate('/jobs');
  };

  if (!job) {
    return (
      <div className="text-center py-20 text-slate-500">
        <p className="text-xl">Job not found.</p>
        <Link to="/jobs" className="mt-4 inline-block text-indigo-600 hover:underline">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <Link
          to="/jobs"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-1">{job.type}</p>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-3">{job.title}</h1>
            <div className="flex items-center text-rose-600 font-medium">
              <FaMapMarkerAlt className="mr-2" />
              {job.location}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">Job Description</h3>
            <p className="text-slate-600 leading-relaxed">{job.description}</p>
            <div className="flex items-center text-emerald-600 font-semibold pt-2">
              <FaMoneyBillWave className="mr-2" />
              {job.salary} / Year
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FaBuilding className="text-indigo-500" /> Company Info
            </h3>
            <h2 className="text-xl font-bold text-slate-900">{job.company.name}</h2>
            <p className="text-slate-500 mt-2 text-sm">{job.company.description}</p>

            <div className="border-t border-slate-100 my-4" />

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <FaEnvelope className="text-indigo-400" />
                <a href={`mailto:${job.company.contactEmail}`} className="hover:text-indigo-600 break-all">
                  {job.company.contactEmail}
                </a>
              </div>
              {job.company.contactPhone && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <FaPhone className="text-indigo-400" />
                  <a href={`tel:${job.company.contactPhone}`} className="hover:text-indigo-600">
                    {job.company.contactPhone}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Manage Job</h3>
            <Link
              to={`/edit-job/${job.id}`}
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors mb-3"
            >
              Edit Job
            </Link>
            <button
              onClick={() => onDeleteClick(job.id)}
              className="block w-full text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`);
    if (!res.ok) throw new Error('API unavailable');
    return await res.json();
  } catch (error) {
    // API unavailable — fall back to static JSON
    const job = staticJobsData.jobs.find((j) => String(j.id) === String(params.id));
    return job ?? null;
  }
};

export default JobPage;
