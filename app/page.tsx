import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-3 tracking-tight">
              Aaron Lewis
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
                Senior Backend & Platform Engineer
              </p>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
              Financial & Regulated Systems
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a 
              href="mailto:aaronglewis@outlook.com" 
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-1.5 group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              aaronglewis@outlook.com
            </a>
            <a 
              href="https://www.linkedin.com/in/aaronlewisdev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-1.5 group"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <span className="text-slate-500 dark:text-slate-500 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Swansea, United Kingdom
            </span>
          </div>
        </header>

        {/* TODO Navigation */}
        {/* <nav className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-slate-900 dark:text-slate-100 font-medium">
                CV
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                Projects
              </Link>
            </li>
          </ul>
        </nav> */}

        {/* Summary Section */}
        <section className="mb-16 mt-8">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              Senior backend-focused software engineer with extensive experience designing and delivering secure, 
              cloud-native financial and eligibility platforms in highly regulated environments. Proven track record 
              building event-driven, transactional microservices and decisioning systems that determine financial 
              outcomes and handle sensitive data at scale. Experienced operating under strict compliance, audit, 
              and availability requirements, with a strong interest in fintech, payments, and digital asset platforms.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Professional Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-800"></div>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600"></div>
            
            <div className="space-y-10">
              {/* Opencast - Main Role */}
              <div className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 shadow-lg ring-4 ring-white dark:ring-slate-900"></div>
                
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                        Software Development Consultant
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                        <a 
                          href="https://opencastsoftware.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                        >
                          Opencast | B Corp™
                          <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mt-2 sm:mt-0">
                      2022 - Present
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Delivered backend platforms where correctness directly impacted financial eligibility, entitlement, and downstream payment outcomes, requiring high confidence in data integrity and decision logic.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Led development of event-driven, transactional microservices using Java, Kotlin, Spring Boot, and WebFlux, operating under strict governance and audit requirements.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Owned the design and delivery of secure API platforms integrating third-party services, enforcing authentication, authorisation, and encryption for financially sensitive data.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Architected and operated asynchronous pipelines using AWS SNS, SQS, EventBridge, Lambda, and Step Functions to ensure scalability, resilience, and traceability.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Established and maintained compliant cloud infrastructure using Terraform, embedding security, observability, and operational controls by default.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Acted as a senior technical presence within teams: mentoring engineers, leading refinement and architectural discussions, and maintaining delivery standards aligned to regulatory expectations.</span>
                    </li>
                  </ul>
                  
                  {/* Swarm Energy */}
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      <a 
                        href="https://help.swarm.eco/portal/en/home" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        Swarm Energy Limited
                        <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </h4>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Developed cloud-native microservices performing daily cost and usage calculations, continuously ingesting high-volume device data to drive downstream automation and financial outcomes.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Implemented secure key management and encryption using AWS KMS, Auth0, and Spring Security to protect commercially sensitive credentials.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Built webhook-driven ingestion pipelines using API Gateway, EventBridge, and Lambda, ensuring reliable integration with third-party providers.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Designed infrastructure using Terraform to support scalable, fault-tolerant, business-critical production workloads.</span>
                      </li>
                    </ul>
                  </div>

                  {/* DWP Projects */}
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      <a 
                        href="https://www.gov.uk/government/organisations/department-for-work-pensions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        Financial Eligibility & Decisioning Platforms (DWP)
                        <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </h4>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Designed and delivered backend services underpinning financial eligibility, entitlement, and case-management workflows, replacing legacy systems with modern microservice architectures.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Built rules-driven decisioning APIs using Node.js and Java, subject to governance, audit, and regulatory approval.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Migrated critical workflows from monolithic systems to event-driven architectures, improving scalability, maintainability, and operational resilience.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Assumed technical leadership responsibilities during delivery-critical phases, including architectural ownership and cross-team coordination.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0">▹</span>
                        <span>Work recognised via government award shortlisting, contributing to subsequent successful programme bids.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CDSM */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 shadow-lg ring-4 ring-white dark:ring-slate-900"></div>
                
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                        Full-Stack Software Engineer
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                        <a 
                          href="https://thinqi.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5 group"
                        >
                          CDSM Ltd.
                          <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 mt-2 sm:mt-0">
                      2021 - 2022
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Contributed to backend and frontend development for large-scale migration from legacy systems to modern microservice architectures.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Delivered new services adhering to TDD principles and modern agile delivery practices.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Participated in stakeholder demonstrations and technical walkthroughs, communicating complex system behaviour clearly to non-technical audiences.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* DVLA */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 shadow-lg ring-4 ring-white dark:ring-slate-900"></div>
                
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                        Full-Stack Software Engineer Intern
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                        <a 
                          href="https://www.gov.uk/apply-driver-digital-tachograph-card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1.5 group"
                        >
                          Driver and Vehicle Licensing Agency
                          <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 mt-2 sm:mt-0">
                      2019 - 2020
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-purple-500 dark:text-purple-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Key contributor to the delivery of a flagship learning management platform, supporting weekly production releases.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-500 dark:text-purple-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Balanced rapid feature delivery with technical quality through code reviews, collaboration with QA, and close alignment with product design.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-500 dark:text-purple-400 mt-1.5 flex-shrink-0">▸</span>
                      <span>Conducted exploratory technical spikes to inform architectural decisions and continuous improvement.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Skills
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-800"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                Core Backend & Platform
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Kotlin', 'Spring Boot', 'WebFlux', 'Event-Driven Architecture', 'Microservices'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 hover:scale-105 hover:shadow-sm transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                Cloud & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS Lambda', 'SNS/SQS', 'EventBridge', 'API Gateway', 'Terraform', 'Docker'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium border border-indigo-200/50 dark:border-indigo-800/50 hover:scale-105 hover:shadow-sm transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                Security & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Secure REST APIs', 'Auth0', 'AWS KMS', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200/50 dark:border-purple-800/50 hover:scale-105 hover:shadow-sm transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                Engineering Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TDD', 'BDD', 'Agile Delivery', 'Regulated Environments'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium border border-green-200/50 dark:border-green-800/50 hover:scale-105 hover:shadow-sm transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Node.js', 'React', 'CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 text-amber-700 dark:text-amber-300 rounded-lg text-sm font-medium border border-amber-200/50 dark:border-amber-800/50 hover:scale-105 hover:shadow-sm transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                Other Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C, C++', 'C#, .NET', 'Ruby, Rails', 'PHP, Laravel'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-sm transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accolades & Education Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Accolades & Certs */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Accolades & Certifications
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:scale-125 transition-transform"></div>
                  <p className="text-slate-700 dark:text-slate-300 flex-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">AWS Certified Cloud Practitioner</span> <span className="text-slate-500 dark:text-slate-500">(CLF-C02)</span>
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-125 transition-transform"></div>
                  <p className="text-slate-700 dark:text-slate-300 flex-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">LFC131:</span> Green Software for Practitioners
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-125 transition-transform"></div>
                  <p className="text-slate-700 dark:text-slate-300 flex-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">Excellence Scholarship</span> for Education
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 group-hover:scale-125 transition-transform"></div>
                  <p className="text-slate-700 dark:text-slate-300 flex-1">
                    <span className="font-bold text-slate-900 dark:text-slate-100">DWP Project Award Nomination</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Education
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700"></div>
              </div>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-blue-500 dark:border-blue-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 ring-4 ring-white dark:ring-slate-800"></div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    BSc Computer Science, First-Class Honours (80%)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Swansea University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TODO Projects Preview Section */}
        {/* <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
            <Link 
              href="/projects" 
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Project Name
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Brief description of the project and what it does.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                  Tech 1
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                  Tech 2
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
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Another Project
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Brief description of another project.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                  Tech 1
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                  Tech 2
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
        </section> */}

        {/* Footer */}
        <footer className="pt-12 mt-12 border-t border-slate-200/50 dark:border-slate-700/50 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Aaron Lewis. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}

