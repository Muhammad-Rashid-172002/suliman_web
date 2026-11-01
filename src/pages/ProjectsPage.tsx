import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ProjectCategory } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';

type Filter = 'All' | ProjectCategory;
const FILTERS: Filter[] = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);
  const [lead, ...rest] = filtered;

  return (
    <div className="relative py-12 sm:py-16">
      <div className="bg-grid-fade pointer-events-none absolute inset-x-0 top-0 h-[520px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Portfolio</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Products & platforms
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Applications published on my GitHub — from a FinTech wallet to multi-portal ERP systems. Every visual
              below is a real screenshot of the running product.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-100 transition-all hover:border-white/25 lg:self-auto"
          >
            <Github className="h-4 w-4" />
            <span>github.com/{PERSONAL_INFO.githubHandle}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-5" role="tablist" aria-label="Filter projects">
          {FILTERS.map((cat) => {
            const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(cat)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  active
                    ? 'bg-white text-slate-950'
                    : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All projects' : cat}
                <span className={active ? 'text-slate-500' : 'text-slate-600'}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Lead project */}
        {lead && (
          <Reveal key={`lead-${lead.id}`} className="mt-10">
            <ProjectCard project={lead} featured />
          </Reveal>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 0.08} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
