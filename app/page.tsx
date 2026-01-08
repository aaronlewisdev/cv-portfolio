import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Aaron Lewis
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
            Senior Backend & Platform Engineer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mb-4">
            Financial & Regulated Systems
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
            <a href="mailto:aaronglewis@outlook.com" className="hover:text-slate-900 dark:hover:text-slate-200">
              aaronglewis@outlook.com
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/aaronlewisdev/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-slate-200">
              LinkedIn
            </a>
            <span>•</span>
            <span>Swansea, United Kingdom</span>
          </div>
        </header>

        {/* Navigation */}
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
        <section className="mb-6 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Senior backend-focused software engineer with extensive experience designing and delivering secure, 
            cloud-native financial and eligibility platforms in highly regulated environments. Proven track record 
            building event-driven, transactional microservices and decisioning systems that determine financial 
            outcomes and handle sensitive data at scale. Experienced operating under strict compliance, audit, 
            and availability requirements, with a strong interest in fintech, payments, and digital asset platforms.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Opencast - Main Role */}
            <div className="border-l-2 border-slate-300 dark:border-slate-600 pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Software Development Consultant
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Opencast | B Corp™
                  </p>
                </div>
                <span className="text-slate-500 dark:text-slate-500 text-sm mt-1 sm:mt-0">
                  2022 - Present
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mt-3">
                <li>Delivered backend platforms where correctness directly impacted financial eligibility, entitlement, and downstream payment outcomes, requiring high confidence in data integrity and decision logic.</li>
                <li>Led development of event-driven, transactional microservices using Java, Kotlin, Spring Boot, and WebFlux, operating under strict governance and audit requirements.</li>
                <li>Owned the design and delivery of secure API platforms integrating third-party services, enforcing authentication, authorisation, and encryption for financially sensitive data.</li>
                <li>Architected and operated asynchronous pipelines using AWS SNS, SQS, EventBridge, Lambda, and Step Functions to ensure scalability, resilience, and traceability.</li>
                <li>Established and maintained compliant cloud infrastructure using Terraform, embedding security, observability, and operational controls by default.</li>
                <li>Acted as a senior technical presence within teams: mentoring engineers, leading refinement and architectural discussions, and maintaining delivery standards aligned to regulatory expectations.</li>
              </ul>
              
              {/* Swarm Energy */}
              <div className="mt-4 pt-4">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Swarm Energy Limited
                </h4>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                  <li>Developed cloud-native microservices performing daily cost and usage calculations, continuously ingesting high-volume device data to drive downstream automation and financial outcomes.</li>
                  <li>Implemented secure key management and encryption using AWS KMS, Auth0, and Spring Security to protect commercially sensitive credentials.</li>
                  <li>Built webhook-driven ingestion pipelines using API Gateway, EventBridge, and Lambda, ensuring reliable integration with third-party providers.</li>
                  <li>Designed infrastructure using Terraform to support scalable, fault-tolerant, business-critical production workloads.</li>
                </ul>
              </div>

              {/* DWP Projects */}
              <div className="mt-4 pt-4">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Financial Eligibility & Decisioning Platforms (DWP)
                </h4>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                  <li>Designed and delivered backend services underpinning financial eligibility, entitlement, and case-management workflows, replacing legacy systems with modern microservice architectures.</li>
                  <li>Built rules-driven decisioning APIs using Node.js and Java, subject to governance, audit, and regulatory approval.</li>
                  <li>Migrated critical workflows from monolithic systems to event-driven architectures, improving scalability, maintainability, and operational resilience.</li>
                  <li>Assumed technical leadership responsibilities during delivery-critical phases, including architectural ownership and cross-team coordination.</li>
                  <li>Work recognised via government award shortlisting, contributing to subsequent successful programme bids.</li>
                </ul>
              </div>
            </div>

            {/* CDSM */}
            <div className="border-l-2 border-slate-300 dark:border-slate-600 pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Full-Stack Software Engineer
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    CDSM Ltd.
                  </p>
                </div>
                <span className="text-slate-500 dark:text-slate-500 text-sm mt-1 sm:mt-0">
                  2021 - 2022
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mt-3">
                <li>Contributed to backend and frontend development for large-scale migration from legacy systems to modern microservice architectures.</li>
                <li>Delivered new services adhering to TDD principles and modern agile delivery practices.</li>
                <li>Participated in stakeholder demonstrations and technical walkthroughs, communicating complex system behaviour clearly to non-technical audiences.</li>
              </ul>
            </div>

            {/* DVLA */}
            <div className="border-l-2 border-slate-300 dark:border-slate-600 pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Full-Stack Software Engineer Intern
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Driver and Vehicle Licensing Agency
                  </p>
                </div>
                <span className="text-slate-500 dark:text-slate-500 text-sm mt-1 sm:mt-0">
                  2019 - 2020
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mt-3">
                <li>Key contributor to the delivery of a flagship learning management platform, supporting weekly production releases.</li>
                <li>Balanced rapid feature delivery with technical quality through code reviews, collaboration with QA, and close alignment with product design.</li>
                <li>Conducted exploratory technical spikes to inform architectural decisions and continuous improvement.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Core Backend & Platform
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Java
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Kotlin
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Spring Boot
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  WebFlux
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Event-Driven Architecture
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Microservices
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Cloud & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  AWS Lambda
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  SNS/SQS
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  EventBridge
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  API Gateway
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Terraform
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Docker
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Security & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Secure REST APIs
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Auth0
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  AWS KMS
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  MongoDB
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Engineering Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  TDD
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  BDD
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Agile Delivery
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Regulated Environments
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm">
                  CSS
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Other Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">
                  C, C++
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">
                  C#, .NET
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">
                  Ruby, Rails
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm">
                  PHP, Laravel
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Accolades & Education Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accolades & Certs */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                Accolades & Certifications
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-slate-700 dark:text-slate-300">•</span>
                  <p className="ml-3 text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">AWS Certified Cloud Practitioner</span> (CLF-C02)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-700 dark:text-slate-300">•</span>
                  <p className="ml-3 text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">LFC131:</span> Green Software for Practitioners
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-700 dark:text-slate-300">•</span>
                  <p className="ml-3 text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">Excellence Scholarship</span> for Education
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-700 dark:text-slate-300">•</span>
                  <p className="ml-3 text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">DWP Project Award Nomination</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                Education
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    BSc Computer Science, First-Class Honours (80%)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    Swansea University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
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
        <footer className="pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Aaron Lewis. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

