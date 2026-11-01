import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Layers,
  MessageSquare,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectVisual } from '../components/ProjectVisual';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';

type View = 'desktop' | 'desktopAlt' | 'mobile';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = PROJECTS.findIndex((p) => p.slug === slug || p.id === slug);
  const project = PROJECTS[index];
  const [view, setView] = useState<View>('desktop');

  if (!project) {
    return (
      <div className="py-24 text-center">
        <div className="mx-auto max-w-md px-4">
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
          <p className="mt-2 text-sm text-slate-400">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to projects</span>
          </Link>
        </div>
      </div>
    );
  }

  const accent = project.brand.accent;
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const views: { id: View; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'desktop', label: 'Overview', icon: Monitor },
    { id: 'desktopAlt', label: 'Detail', icon: Layers },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${accent}22, transparent)` }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>All projects</span>
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-[0.16em]" style={{ color: accent }}>
                {project.category}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{project.tagline}</span>
            </div>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{project.summary}</p>
          </div>

          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110"
                style={{ background: accent, boxShadow: `0 12px 30px -12px ${accent}` }}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live demo</span>
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100 transition-all hover:border-white/25"
            >
              <Github className="h-4 w-4" />
              <span>Source code</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Screenshot showcase */}
        <div className="mt-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div role="tablist" aria-label="Screenshots" className="inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
              {views.map((v) => (
                <button
                  key={v.id}
                  role="tab"
                  aria-selected={view === v.id}
                  onClick={() => setView(v.id)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    view === v.id ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <v.icon className="h-3.5 w-3.5" />
                  {v.label}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-500">Screenshots captured from the running application</span>
          </div>

          <TiltCard
            max={2.5}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#06080b] shadow-[0_50px_100px_-50px_rgba(0,0,0,1)]"
          >
            {view === 'mobile' ? (
              <div
                className="flex aspect-[16/10] items-center justify-center gap-6 p-6"
                style={{ background: `radial-gradient(80% 80% at 50% 0%, ${accent}26, transparent 70%), #0a0d10` }}
              >
                <div className="device-phone h-full" style={{ aspectRatio: '430 / 930', padding: 6 }}>
                  <div className="device-phone__screen bg-black">
                    <img
                      src={project.shots.mobile}
                      alt={`${project.name} mobile interface`}
                      className="block h-full w-full object-cover object-top"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <ProjectVisual project={project} alt={view === 'desktopAlt'} priority />
            )}
          </TiltCard>
        </div>

        {/* Facts */}
        <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.facts.map((f) => (
            <div key={f.label} className="rounded-xl border border-white/[0.07] bg-[#0b1013] px-5 py-4">
              <dd className="text-2xl font-extrabold tracking-tight text-white">{f.value}</dd>
              <dt className="mt-1 text-xs text-slate-400">{f.label}</dt>
              <span className="mt-3 block h-0.5 w-8 rounded-full" style={{ background: accent }} />
            </div>
          ))}
        </dl>

        {/* Overview + features */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-white/[0.07] bg-[#0b1013] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.overview}</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="h-full rounded-2xl border border-white/[0.07] bg-[#0b1013] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">Key features</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Engineering */}
        <Reveal>
          <div className="mt-6 rounded-2xl border border-white/[0.07] bg-[#0b1013] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#06080b]" style={{ color: accent }}>
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Engineering highlights</h2>
                <p className="text-xs text-slate-400">From the published source code</p>
              </div>
            </div>
            <div className="space-y-3">
              {project.engineering.map((detail) => (
                <div
                  key={detail}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 text-sm text-slate-300"
                >
                  <Code2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Technology stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer CTA */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-[#0b1013] p-6 transition-all hover:border-white/20"
          >
            <div>
              <div className="text-xs text-slate-500">Next project</div>
              <div className="mt-1 text-lg font-bold text-white">{next.name}</div>
              <div className="text-xs text-slate-400">{next.tagline}</div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
          </Link>
          <Link
            to="/contact"
            className="group flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-transparent p-6 transition-all hover:border-emerald-500/60"
          >
            <div>
              <div className="text-xs text-emerald-400">Work together</div>
              <div className="mt-1 text-lg font-bold text-white">Discuss a similar product</div>
              <div className="text-xs text-slate-400">Scope, timeline and delivery plan</div>
            </div>
            <MessageSquare className="h-5 w-5 text-emerald-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};
