import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="text-xl font-bold tracking-wider text-emerald-400 font-mono">{"<RejoThomas />"}</span>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <li><a href="#about" className="hover:text-emerald-400 transition cursor-pointer">About</a></li>
            <li><a href="#skills" className="hover:text-emerald-400 transition cursor-pointer">Skills</a></li>
            <li><a href="#projects" className="hover:text-emerald-400 transition cursor-pointer">Projects</a></li>
            <li><a href="#contact" className="hover:text-emerald-400 transition cursor-pointer">Contact</a></li>
          </ul>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-md text-sm transition font-medium">
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 md:py-28 flex flex-col justify-center min-h-[70vh]">
        <p className="text-emerald-400 font-mono text-sm sm:text-base mb-3 tracking-wide">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 mb-2">Rejo Thomas.</h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-500 mb-6">MCA Student & Developer.</h2>
        <p className="text-slate-400 max-w-xl leading-relaxed mb-8">
          I&apos;m a Master of Computer Applications student building full-stack
          applications and exploring machine learning. I enjoy turning ideas
          into working software.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-md transition shadow-md shadow-emerald-500/10">
            View My Work
          </a>
          <a href="#contact" className="border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 px-6 py-3 rounded-md transition">
            Get In Touch
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-emerald-400 font-mono text-lg">01.</span> About Me
        </h2>
        <p className="text-slate-400 leading-relaxed max-w-3xl">
          I&apos;m currently pursuing my Master of Computer Applications (MCA), focused
          on building practical, real-world software. My project work spans full-stack
          web development and machine learning.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-emerald-400 font-mono text-lg">02.</span> Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Python", "Machine Learning", "Data Analysis"].map((skill) => (
            <span key={skill} className="bg-slate-900/60 border border-slate-800/80 text-slate-300 px-4 py-2 rounded-md text-sm font-mono shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS — now a separate client component with loading state */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
          <span className="text-emerald-400 font-mono text-lg">03.</span> Academic Projects
        </h2>
        <ProjectsSection />
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900 text-center">
        <p className="text-emerald-400 font-mono mb-3">04. What&apos;s Next?</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed text-sm sm:text-base">
          I&apos;m open to new internship opportunities and technical collaborations.
        </p>
        <a href="mailto:rejothomas538@gmail.com" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-md transition shadow-md shadow-emerald-500/10">
          Say Hello
        </a>
        <div className="flex justify-center gap-6 mt-10 text-slate-500 text-sm font-mono">
          <a href="https://github.com/rejothomas1" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">GitHub</a>
          <a href="https://linkedin.com/in/rejo-thomas11" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">LinkedIn</a>
          <a href="mailto:rejothomas538@gmail.com" className="hover:text-emerald-400 transition">Email</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="font-mono text-xs text-center sm:text-left">
            © 2026 Rejo Thomas.
          </p>
          <div className="flex gap-6 font-mono text-xs">
            <a href="https://github.com/rejothomas1" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">GitHub Profile</a>
            <a href="https://linkedin.com/in/rejo-thomas11" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">LinkedIn Profile</a>
            <a href="mailto:rejothomas538@gmail.com" className="hover:text-emerald-400 transition">Contact Email</a>
          </div>
        </div>
      </footer>

    </main>
  );
}