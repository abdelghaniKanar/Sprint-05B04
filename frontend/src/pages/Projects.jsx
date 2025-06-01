import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("latest");

  const projects = [
    {
      id: 1,
      title: "Calculator",
      type: "web application",
      description: "Lorem ipsum...",
    },
    {
      id: 2,
      title: "Task Manager",
      type: "web application",
      description: "Lorem ipsum...",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="pixel-font text-3xl">
          made
          <br />
          with code
        </h1>
        <div className="space-x-4">
          <button
            className={`retro-button ${
              filter === "latest" ? "bg-primary-300" : ""
            }`}
            onClick={() => setFilter("latest")}
          >
            Latest
          </button>
          <button
            className={`retro-button ${
              filter === "oldest" ? "bg-primary-300" : ""
            }`}
            onClick={() => setFilter("oldest")}
          >
            Oldest
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="retro-border p-4">
            <h3 className="font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-primary-600 mb-2">{project.type}</p>
            <p className="mb-4">{project.description}</p>
            <button className="retro-button">read more</button>
          </div>
        ))}
      </div>
    </div>
  );
};
