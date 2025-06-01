import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "ABOUT ME" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="flex space-x-6">
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`nav-link ${location.pathname === path ? "active" : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
