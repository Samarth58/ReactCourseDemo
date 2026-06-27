import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomePage from './pages/HomePage.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage, { jobLoader } from './pages/JobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import EditJobPage from './pages/EditJobPage.jsx';

const DEMO_MSG = 'Live editing is disabled in demo mode';

// Add New Job
const addJob = async (newJob) => {
  try {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newJob),
    });
    if (!res.ok) throw new Error('API unavailable');
  } catch (error) {
    toast.info(DEMO_MSG);
    return false;
  }
};

// Delete Job
const deleteJob = async (id) => {
  try {
    const res = await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('API unavailable');
  } catch (error) {
    toast.info(DEMO_MSG);
    return false;
  }
};

// Update Job
const updateJob = async (job) => {
  try {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    });
    if (!res.ok) throw new Error('API unavailable');
  } catch (error) {
    toast.info(DEMO_MSG);
    return false;
  }
};

// Router defined once at module level (NOT inside the component)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route
        path='/edit-job/:id'
        element={<EditJobPage updateJobSubmit={updateJob} />}
      />
      <Route
        path='/jobs/:id'
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App