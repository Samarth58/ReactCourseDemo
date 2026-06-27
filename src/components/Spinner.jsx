

const Spinner = ({ className = '' }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-indigo-600 border-t-transparent shadow-md"></div>
    </div>
  );
};

export default Spinner;
