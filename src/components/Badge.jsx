

const Badge = ({ children, type = 'default' }) => {
  const typeStyles = {
    default: 'bg-slate-100 text-slate-800',
    fullTime: 'bg-emerald-100 text-emerald-800',
    partTime: 'bg-indigo-100 text-indigo-800',
    remote: 'bg-blue-100 text-blue-800',
    contract: 'bg-amber-100 text-amber-800',
  };

  const selectedStyle = typeStyles[type] || typeStyles.default;

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${selectedStyle}`}>
      {children}
    </span>
  );
};

export default Badge;
