const Input = ({ type = "text", placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="retro-input w-full"
      {...props}
    />
  );
};
