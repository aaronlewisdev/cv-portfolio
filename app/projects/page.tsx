import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-6">
          <Link 
            href="/" 
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-4 inline-block"
          >
            ← Back to CV
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Projects
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            A collection of my work and projects
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-8 pb-4 border-b border-slate-200 dark:border-slate-700">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                CV
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-slate-900 dark:text-slate-100 font-medium">
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Project Name
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Project description goes here. Describe what the project does, 
              the problem it solves, and key features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                Technology 1
              </span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                Technology 2
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                GitHub →
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                Live Demo →
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Another Project
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Another project description.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                Technology 1
              </span>
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                Technology 2
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                GitHub →
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                Live Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

