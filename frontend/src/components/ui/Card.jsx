const Card = ({ children, className = "" }) => {
  return <div className={`retro-border p-4 ${className}`}>{children}</div>;
};
