import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage from './pages/JobPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} />
      <Route path ='*' element ={<NotFoundPage/>}/>
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