import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <FaExclamationTriangle className="text-amber-500 text-6xl mb-6 animate-bounce" />
      <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">404 Not Found</h1>
      <p className="text-slate-500 text-lg mb-8 max-w-md">This page does not exist or has been moved to another URL.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFoundPage
