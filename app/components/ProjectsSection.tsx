"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_link: string;
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-backend-5i8c.onrender.com/projects", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="font-mono text-sm text-muted">
        Connecting to server<span className="cursor-blink">_</span> projects
        will appear shortly.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="border border-line bg-panel p-6">
          <h3 className="font-serif text-lg text-foreground mb-2">{project.title}</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
          <p className="font-mono text-xs text-muted mb-4">
            Stack: <span className="text-foreground">{project.tech_stack}</span>
          </p>
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent2 hover:text-accent transition"
          >
            View source
          </a>
        </div>
      ))}
    </div>
  );
}