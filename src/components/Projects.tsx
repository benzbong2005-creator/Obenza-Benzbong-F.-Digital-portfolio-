import React, { useState } from 'react';
import { ExternalLink, Code2, Sparkles, Check, ArrowUpRight, Layers, Eye, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Featured IT Projects
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Hands-on technical solutions engineered to solve real organizational bottlenecks and showcase practical programming skills.
          </p>
        </div>

        {/* Project Modern Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-xs">
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-medium text-blue-200">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Inspect Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata (anti-slop zero pill rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>Torres Capitol College IT Project</span>
                    <span aria-hidden="true">·</span>
                    <span>Academic & Portfolio</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Clean Technology List (Unboxed metadata style) */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-600 font-mono">
                      {project.technologies.map((tech, i) => (
                        <span key={tech} className="flex items-center gap-2">
                          <span>{tech}</span>
                          {i < project.technologies.length - 1 && <span className="text-slate-300">/</span>}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 text-xs font-semibold text-blue-600 hover:text-white hover:bg-blue-600 rounded-xl border border-blue-200 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details & Specs</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-left">
            {/* Modal Header Image */}
            <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-bold text-blue-300 tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Technical Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Status: <strong className="text-slate-800">{selectedProject.status}</strong>
                </span>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                >
                  Close Project View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
