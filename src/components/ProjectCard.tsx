import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { TiltCard } from './TiltCard';

interface ProjectCardProps {
  project: Project;
  /** Large, horizontal layout used for the lead project. */
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const accent = project.brand.accent;

  return (
    <TiltCard
      as="article"
      max={featured ? 3 : 5}
      className={`group relative flex h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b1013] shadow-[0_30px_60px_-40px_rgba(0,0,0,0.9)] hover:border-white/15 ${
        featured ? 'flex-col lg:flex-row' : 'flex-col'
      }`}
    >
      {/* Real product screenshots */}
      <Link
        to={`/projects/${project.slug}`}
        className={`relative block ${featured ? 'lg:flex lg:w-[58%] lg:shrink-0 lg:items-center lg:bg-[#06080b]' : ''}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectVisual project={project} className="w-full" priority={featured} />
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1013] to-transparent ${
            featured ? 'lg:hidden' : ''
          }`}
        />
        <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 py-1 pl-1 pr-3 backdrop-blur-md">
          <span className="h-5 w-5 rounded-full" style={{ background: accent }} />
          <span className="text-[11px] font-semibold text-white">{project.name}</span>
          <span className="text-[11px] text-white/55">· {project.category}</span>
        </div>
      </Link>

      {/* Content */}
      <div className={`relative flex flex-1 flex-col p-6 sm:p-7 ${featured ? 'lg:p-10' : ''}`}>
        <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: accent }}>
          {project.tagline}
        </div>

        <h3 className={`mt-2 font-bold tracking-tight text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus:outline-none">
            {project.name}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.summary}</p>

        <dl className="mt-5 grid grid-cols-3 divide-x divide-white/[0.06] rounded-xl border border-white/[0.06] bg-white/[0.02]">
          {project.facts.map((f) => (
            <div key={f.label} className="px-3 py-3">
              <dt className="sr-only">{f.label}</dt>
              <dd className="text-base font-extrabold tracking-tight text-white">{f.value}</dd>
              <dd className="mt-0.5 text-[11px] leading-tight text-slate-400">{f.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 space-y-1.5">
          {project.features.slice(0, featured ? 4 : 3).map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-x-2 gap-y-1 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-slate-400">
            {project.techStack.slice(0, 5).map((tech, idx, arr) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < arr.length - 1 && <span className="text-slate-700" aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
              <span>View project</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                style={{ color: accent }}
              />
            </span>

            <div className="relative z-10 flex items-center gap-2">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-white/25 hover:text-white"
                title="Source code on GitHub"
                aria-label={`${project.name} source code on GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-white/25 hover:text-white"
                  title="Open live demo"
                  aria-label={`Open ${project.name} live demo`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </TiltCard>
  );
};
