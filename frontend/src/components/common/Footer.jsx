import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-200 border-t-2 border-primary-900 p-4 mt-auto">
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="https://github.com" className="retro-button">
          <Github size={16} className="inline mr-2" />
          GitHub
        </a>
        <a href="https://linkedin.com" className="retro-button">
          <Linkedin size={16} className="inline mr-2" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
