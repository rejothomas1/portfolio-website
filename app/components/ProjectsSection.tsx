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
      <div className="flex flex-col items-center justify-center py-16 text-slate-400">
        <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-mono">Waking up the server, please wait...</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 hover:border-emerald-500/30 transition flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech_stack.split(", ").map((t) => (
                <span key={t} className="text-xs font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">{t}</span>
              ))}
            </div>
          </div>
          <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition inline-flex items-center gap-1 mt-auto">
            View Code
          </a>
        </div>
      ))}
    </div>
  );
}