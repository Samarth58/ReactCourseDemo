

const Card = ({ children, bg = 'bg-slate-100' }) => {
  return (
    <div className={`${bg} p-8 rounded-2xl shadow-sm transition-shadow hover:shadow-md`}>
      {children}
    </div>
  );
};

export default Card;
