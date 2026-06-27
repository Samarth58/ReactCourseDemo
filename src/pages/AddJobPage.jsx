import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);
    toast.success('Job Added Successfully');
    return navigate('/jobs');
  };

  const inputClasses = "w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow";
  const labelClasses = "block text-sm font-semibold text-slate-700 mb-2";

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white px-8 py-10 shadow-sm rounded-2xl border border-slate-200">
        <form onSubmit={submitForm} className="space-y-8">
          <div className="border-b border-slate-100 pb-5">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight text-center">
              Post a New Job
            </h2>
            <p className="text-center text-slate-500 mt-2 text-sm">
              Fill in the details below to list your job opening on our board.
            </p>
          </div>

          {/* Job Info Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800">Job Specification</h3>
            
            <div>
              <label htmlFor="type" className={labelClasses}>
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className={inputClasses}
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div>
              <label htmlFor="title" className={labelClasses}>
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className={inputClasses}
                placeholder="e.g. Senior React Developer"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="description" className={labelClasses}>
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                className={inputClasses}
                rows="5"
                placeholder="Include duties, tech stack, and benefits..."
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="salary" className={labelClasses}>
                  Salary Range
                </label>
                <select
                  id="salary"
                  name="salary"
                  className={inputClasses}
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - $60K">$50K - $60K</option>
                  <option value="$60K - $70K">$60K - $70K</option>
                  <option value="$70K - $80K">$70K - $80K</option>
                  <option value="$80K - $90K">$80K - $90K</option>
                  <option value="$90K - $100K">$90K - $100K</option>
                  <option value="$100K - $125K">$100K - $125K</option>
                  <option value="$125K - $150K">$125K - $150K</option>
                  <option value="$150K - $175K">$150K - $175K</option>
                  <option value="$175K - $200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className={labelClasses}>
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className={inputClasses}
                  placeholder="e.g. Remote / Boston, MA"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6"></div>

          {/* Company Info Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800">Company Information</h3>

            <div>
              <label htmlFor="company" className={labelClasses}>
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className={inputClasses}
                placeholder="e.g. Acme Tech Inc"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="company_description" className={labelClasses}>
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className={inputClasses}
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact_email" className={labelClasses}>
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className={inputClasses}
                  placeholder="recruiter@acme.com"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contact_phone" className={labelClasses}>
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className={inputClasses}
                  placeholder="(Optional)"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ease-in-out shadow-md hover:shadow-indigo-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 cursor-pointer text-center"
              type="submit"
            >
              Add Job Opening
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobPage;
