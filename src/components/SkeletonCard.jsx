

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200 animate-pulse">
      {/* Top section: badge and type */}
      <div className="h-4 bg-slate-200 rounded w-1/4 mb-4"></div>
      
      {/* Title */}
      <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
      
      {/* Description lines */}
      <div className="space-y-2 mb-6">
        <div className="h-3 bg-slate-200 rounded w-full"></div>
        <div className="h-3 bg-slate-200 rounded w-full"></div>
        <div className="h-3 bg-slate-200 rounded w-5/6"></div>
      </div>
      
      {/* Salary */}
      <div className="h-4 bg-slate-200 rounded w-1/2 mb-6"></div>
      
      <div className="border-t border-slate-100 my-4"></div>
      
      {/* Bottom section: Location and Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="h-4 bg-slate-200 rounded w-1/3 mb-4 md:mb-0"></div>
        <div className="h-10 bg-slate-200 rounded-lg w-full md:w-32"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
