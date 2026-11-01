import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  GitPullRequest,
  Users,
  Target,
  ShieldCheck,
  Code2,
  Workflow,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { PERSONAL_INFO, LEADERSHIP_INFO } from '../data/portfolioData';
import { CompanyCard } from '../components/CompanyCard';
import { portfolioImages } from '../assets/images';
import { TiltCard } from '../components/TiltCard';
import { BrandLogo } from '../components/BrandLogo';
import { SocialLinks } from '../components/SocialLinks';

const PILLAR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  GitPullRequest,
  CheckCircle2,
  Users,
  Target,
};

export const LeadershipPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span>Corporate Leadership</span>
            <span className="text-slate-600">/</span>
            <span>Operations Governance</span>
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {LEADERSHIP_INFO.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {LEADERSHIP_INFO.subtitle}
          </p>
        </div>

        {/* Executive Profile Spotlight */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-[#0c1017]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <BrandLogo size={30} decorative />
                <span className="rounded-md border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-bold text-emerald-300">
                  COO — Chief Operating Officer
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-300">
                  Company: <strong className="text-white">KorvenzaTech</strong>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Suliman Khan
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {LEADERSHIP_INFO.overview}
              </p>

              {/* Technical developer background integration */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Code2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">The Engineering Advantage:</span> Because my primary technical role is as a <strong>Flutter Developer</strong>, I understand real code requirements, API contracts, dependencies, and state boundaries. This hands-on background ensures that operational estimates, sprint deadlines, and architectural choices at KorvenzaTech are grounded in realistic software reality.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <SocialLinks variant="pills" />
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl">
                <img
                  src={portfolioImages.portrait}
                  alt="Suliman Khan, Chief Operating Officer of KorvenzaTech"
                  width={1086}
                  height={1448}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover object-[center_20%]"
                />
                <div className="p-3 text-center bg-slate-950/90 text-xs">
                  <span className="font-semibold text-white">Suliman Khan</span>
                  <div className="text-[11px] text-emerald-400">Chief Operating Officer · KorvenzaTech</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Leadership */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Operations Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How I Support Project Execution & Product Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP_INFO.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[pillar.icon] ?? Workflow;
              return (
              <TiltCard
                key={idx}
                max={4}
                className="group relative rounded-2xl border border-white/[0.07] bg-[#0b1013] p-6 sm:p-7 space-y-3 hover:border-emerald-500/25"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#06080b] text-emerald-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
              </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Official Company Profile Card (Mandatory Prompt Element) */}
        <div className="mt-16">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Official Organization Card
          </div>
          <CompanyCard />
        </div>

        {/* How KorvenzaTech Engagements Work */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-[#0c1017] p-8 sm:p-10">
          <div className="max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Working with Me & KorvenzaTech
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              When international clients partner with us, they benefit from direct technical leadership. You aren't passed to a non-technical account manager; your project is governed with engineering rigor from day one.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Direct Accountability:</strong>
                  Weekly demos, recorded walkthroughs, and clear milestone progress without hidden delays.
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Flexible Engagement:</strong>
                  Direct individual Flutter development or full-team KorvenzaTech multi-platform engineering.
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={PERSONAL_INFO.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-700 px-5 py-2.5 text-xs font-bold text-slate-950 hover:brightness-110"
              >
                <span>Visit KorvenzaTech Official Website</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white hover:border-emerald-500/50"
              >
                <span>Inquire About Collaboration</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
