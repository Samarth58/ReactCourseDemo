import { useState, useEffect } from 'react';
import JobListingSingular from './JobListingSingular.jsx';
import SkeletonCard from './SkeletonCard.jsx';
import EmptyState from './EmptyState.jsx';

const JobListing = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setFetchError(false);
        const res = await fetch(isHome ? '/api/jobs?_limit=3' : '/api/jobs');
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-slate-50 px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center tracking-tight">
          {isHome ? 'Latest Jobs' : 'Browse All Jobs'}
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show multiple skeleton cards while loading */}
            {Array.from({ length: isHome ? 3 : 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : fetchError || jobs.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <EmptyState 
              message={fetchError ? "Failed to load jobs." : "No jobs found."}
              subMessage={fetchError ? "There was an error communicating with the server." : "Check back later for new opportunities."}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <JobListingSingular key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
