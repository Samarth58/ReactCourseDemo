import { Link } from 'react-router-dom';

const Hero = ({ title = "Become a React Dev", subtitle = "Find the React job that fits your skills and needs" }) => {
  return (
    <section className="bg-slate-900 text-white py-24 sm:py-32 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-6 mb-12 shadow-2xl overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/20 mix-blend-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              {title}
            </span>
          </h1>
          <p className="my-6 text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              to="/jobs" 
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
