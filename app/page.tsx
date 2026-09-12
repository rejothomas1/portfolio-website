import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent-15">

      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-90 border-b border-line">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-5">
          <span className="font-serif text-lg text-foreground">
            Rejo Thomas<span className="text-accent">.</span>
          </span>
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-7 font-mono text-sm text-muted">
              <li><a href="#about" className="hover:text-foreground transition">about</a></li>
              <li><a href="#skills" className="hover:text-foreground transition">skills</a></li>
              <li><a href="#projects" className="hover:text-foreground transition">projects</a></li>
              <li><a href="#contact" className="hover:text-foreground transition">contact</a></li>
            </ul>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-line px-4 py-1.5 text-foreground hover:border-accent hover:text-accent transition"
            >
              resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-[1.4fr_1fr] gap-12 items-start hero-in">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-foreground">
              I build software that organizes and predicts.
            </h1>
            <p className="mt-6 text-muted max-w-md leading-relaxed">
              I&apos;m Rejo Thomas, an MCA student. Recent work includes a scheduling
              system that removes manual timetable conflicts, and a machine learning
              model that studies cricket match outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-accent text-[#0F2438] font-medium px-5 py-2.5 hover:opacity-90 transition"
              >
                See the projects
              </a>
              <a
                href="mailto:rejothomas538@gmail.com"
                className="border border-line text-foreground px-5 py-2.5 hover:border-accent2 hover:text-accent2 transition"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="border border-line bg-panel-60 p-6 font-mono text-sm space-y-4">
            <div>
              <p className="text-muted mb-1">Role</p>
              <p className="text-foreground">MCA Student &amp; Developer</p>
            </div>
            <div>
              <p className="text-muted mb-1">Focus</p>
              <p className="text-foreground">Full-stack development, ML</p>
            </div>
            <div>
              <p className="text-muted mb-1">Status</p>
              <p className="text-accent2 flex items-center gap-2">
                <span className="cursor-blink">●</span> Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[200px_1fr] gap-10">
          <h2 className="font-serif text-2xl text-foreground">About</h2>
          <p className="text-muted leading-relaxed max-w-2xl">
            I&apos;m pursuing a Master of Computer Applications, focused on building
            complete, working systems rather than isolated exercises. My timetable
            generator replaced a manual scheduling process with automatic
            conflict-checking across subjects, teachers, and available hours. My
            cricket prediction project applies data analysis and machine learning
            to historical match data to model likely outcomes. This portfolio
            itself is a full-stack application, with a Python backend and a real
            database serving the content you&apos;re reading right now.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[200px_1fr] gap-10">
          <h2 className="font-serif text-2xl text-foreground">Skills</h2>
          <div className="space-y-5 max-w-2xl">
            <div>
              <p className="font-mono text-xs text-muted mb-1">Languages</p>
              <p className="text-foreground">HTML, CSS, JavaScript, PHP, Python</p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-1">Data &amp; Database</p>
              <p className="text-foreground">MySQL, Data Analysis</p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-1">Applied</p>
              <p className="text-foreground">Machine Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[200px_1fr] gap-10">
          <h2 className="font-serif text-2xl text-foreground">Projects</h2>
          <div className="max-w-2xl">
            <ProjectsSection />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[200px_1fr] gap-10">
          <h2 className="font-serif text-2xl text-foreground">Contact</h2>
          <div className="max-w-2xl">
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m open to internships and entry-level roles in software
              development. The fastest way to reach me is by email.
            </p>
            <ul className="font-mono text-sm space-y-2 mb-8">
              <li>
                <a href="mailto:rejothomas538@gmail.com" className="text-accent2 hover:text-accent transition">
                  rejothomas538@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/rejothomas1" target="_blank" rel="noopener noreferrer" className="text-accent2 hover:text-accent transition">
                  github.com/rejothomas1
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/rejo-thomas11" target="_blank" rel="noopener noreferrer" className="text-accent2 hover:text-accent transition">
                  linkedin.com/in/rejo-thomas11
                </a>
              </li>
            </ul>
            <a
              href="mailto:rejothomas538@gmail.com"
              className="inline-block bg-accent text-[#0F2438] font-medium px-6 py-2.5 hover:opacity-90 transition"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line">
        <div className="max-w-5xl mx-auto px-6 py-8 font-mono text-xs text-muted">
          © 2026 Rejo Thomas — built with Next.js, FastAPI, and a live database.
        </div>
      </footer>

    </main>
  );
}