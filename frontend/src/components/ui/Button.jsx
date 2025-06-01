const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button className="retro-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
