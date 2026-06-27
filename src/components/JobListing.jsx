import React from 'react'
import JobListingSingular from './JobListingSingular.jsx'
import { useState, useEffect } from 'react'
import Spinner from './Spinner.jsx'
import staticJobsData from '../data/jobs.json'

const JobListing = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        if (!res.ok) throw new Error('API unavailable');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        // API unavailable (production/demo) — fall back to static JSON
        const allJobs = staticJobsData.jobs;
        setJobs(isHome ? allJobs.slice(0, 3) : allJobs);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Latest Jobs' : 'Browse All Jobs'}
          </h2>

          {loading ? (
            <Spinner loading={loading}></Spinner>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListingSingular key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default JobListing
