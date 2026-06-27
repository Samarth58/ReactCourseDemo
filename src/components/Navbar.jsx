import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const linkClasses = ({ isActive }) => {
    return isActive
      ? 'bg-indigo-600 text-white rounded-md px-3 py-2 text-sm font-medium transition-colors'
      : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md px-3 py-2 text-sm font-medium transition-colors';
  };

  const mobileLinkClasses = ({ isActive }) => {
    return isActive
      ? 'bg-indigo-600 text-white block rounded-md px-3 py-2 text-base font-medium transition-colors'
      : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 block rounded-md px-3 py-2 text-base font-medium transition-colors';
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
            {/* Logo */}
            <NavLink className="flex flex-shrink-0 items-center mr-4 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded outline-none" to="/">
              <img className="h-8 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-slate-900 text-xl font-bold ml-2 tracking-tight">
                React Jobs
              </span>
            </NavLink>
            
            {/* Desktop Menu */}
            <div className="hidden md:ml-auto md:block">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClasses}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClasses}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClasses}>
                  Add Job
                </NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <NavLink to="/" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>
              Jobs
            </NavLink>
            <NavLink to="/add-job" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>
              Add Job
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
