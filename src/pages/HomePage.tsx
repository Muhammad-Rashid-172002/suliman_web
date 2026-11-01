import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  Globe2,
  Handshake,
  Repeat,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SERVICES } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { CompanyCard } from '../components/CompanyCard';
import { EstimatorModal } from '../components/EstimatorModal';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';
import { BrandLogo } from '../components/BrandLogo';
import { SocialLinks } from '../components/SocialLinks';
import { LogoEmblem3D } from '../components/LogoEmblem3D';
import { portfolioImages } from '../assets/images';

const MANDATE = [
  {
    icon: BarChart3,
    title: 'Operational Excellence',
    desc: 'Clear workflows, delivery cadences, and accountability so every project runs predictably from kickoff to launch.',
  },
  {
    icon: Compass,
    title: 'Business Strategy',
    desc: 'Translating company goals into priorities, capacity plans, and engagement models that grow KorvenzaTech sustainably.',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    desc: 'Building focused, cross-functional teams — setting expectations, removing blockers, and developing people.',
  },
  {
    icon: ShieldCheck,
    title: 'Delivery Governance',
    desc: 'Code review standards, QA gates, and release discipline that protect quality without slowing momentum.',
  },
  {
    icon: Cpu,
    title: 'Technology & Innovation',
    desc: 'Engineering-literate decisions on stack, architecture, and AI-enabled tooling — grounded in hands-on Flutter work.',
  },
  {
    icon: Handshake,
    title: 'Client Partnerships',
    desc: 'Transparent communication with international founders and enterprises, from scoping to long-term support.',
  },
];

const OPERATING_RHYTHM = [
  { k: '01', t: 'Set direction', d: 'Quarterly priorities and measurable outcomes agreed with leadership and clients.', icon: Target },
  { k: '02', t: 'Align teams', d: 'Weekly planning, clear owners, and a single source of truth for every milestone.', icon: Users },
  { k: '03', t: 'Deliver', d: 'Two-week sprints with demos, QA acceptance, and release readiness reviews.', icon: Repeat },
  { k: '04', t: 'Review & improve', d: 'Retrospectives, delivery metrics, and process changes that compound over time.', icon: BarChart3 },
];

export const HomePage: React.FC = () => {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

  return (
    <div className="relative overflow-hidden">
      <EstimatorModal isOpen={isEstimatorOpen} onClose={() => setIsEstimatorOpen(false)} />

      {/* ------------------------------------------------------------------ */}
      {/* Executive hero                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28">
        <div className="bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-48 right-[-10%] h-[620px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.16),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[-15%] h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(148,163,184,0.07),transparent)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Copy */}
            <div className="flex flex-col items-start lg:col-span-7">
              <div
                {...rise(0)}
                className="rise inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1 pr-4 text-xs text-slate-300 backdrop-blur-md"
              >
                <BrandLogo size={24} decorative />
                <span className="font-semibold text-white">Chief Operating Officer</span>
                <span className="text-slate-600">·</span>
                <span className="text-emerald-400">KorvenzaTech</span>
              </div>

              <h1
                {...rise(0.08)}
                className="rise mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="text-gradient-silver">{PERSONAL_INFO.name}</span>
              </h1>

              <p
                {...rise(0.16)}
                className="rise mt-4 font-serif text-2xl italic leading-snug text-emerald-200/90 sm:text-3xl"
              >
                Operations that turn strategy into shipped software.
              </p>

              <p {...rise(0.22)} className="rise mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {PERSONAL_INFO.supportingHeadline}
              </p>
              <p {...rise(0.26)} className="rise mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                {PERSONAL_INFO.heroBio}
              </p>

              <div {...rise(0.32)} className="rise mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/leadership"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-[#03140c] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all hover:brightness-110 active:scale-[0.98]"
                >
                  <span>Leadership & Operations</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-100 transition-all hover:border-white/25 hover:bg-white/[0.06] active:scale-[0.98]"
                >
                  View Projects
                </Link>
                <button
                  onClick={() => setIsEstimatorOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-3.5 text-xs font-medium text-emerald-300 transition-colors hover:text-white"
                  title="Interactive timeline and sprint calculator"
                >
                  <Calculator className="h-4 w-4" />
                  <span>Estimate a project</span>
                </button>
              </div>

              {/* Direct contact */}
              <div {...rise(0.36)} className="rise mt-6 flex flex-wrap items-center gap-3">
                <SocialLinks />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm text-slate-400 underline-offset-4 transition-colors hover:text-emerald-300 hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Credentials */}
              <dl
                {...rise(0.4)}
                className="rise mt-10 grid w-full max-w-xl grid-cols-3 divide-x divide-white/[0.07] border-y border-white/[0.07]"
              >
                {[
                  { v: PERSONAL_INFO.experienceYears, l: 'Professional experience', icon: Building2 },
                  { v: 'BS', l: 'Software Engineering', icon: GraduationCap },
                  { v: 'Global', l: 'Open to international clients', icon: Globe2 },
                ].map((c) => (
                  <div key={c.l} className="px-4 py-4 first:pl-0">
                    <dd className="flex items-center gap-2 text-xl font-extrabold text-white sm:text-2xl">{c.v}</dd>
                    <dt className="mt-1 text-[11px] leading-tight text-slate-400 sm:text-xs">{c.l}</dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Portrait — layered 3D composition */}
            <div
              className="settle relative mx-auto w-full max-w-[420px] lg:col-span-5"
            >
              <TiltCard max={6} className="relative rounded-[28px]">
                {/* Back plate for depth */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[34px] border border-white/[0.06] bg-gradient-to-br from-emerald-500/10 via-transparent to-white/[0.03]"
                  style={{ transform: 'translateZ(-40px)' }}
                />

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1317] shadow-[0_60px_120px_-50px_rgba(0,0,0,1)]">
                  <img
                    src={portfolioImages.portrait}
                    alt="Suliman Khan, Chief Operating Officer of KorvenzaTech"
                    width={1086}
                    height={1448}
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover object-[center_22%]"
                  />
                  {/* Cinematic grade + caption */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080b] via-[#06080b]/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent_55%,rgba(6,8,11,0.55))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400">
                      Chief Operating Officer
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">{PERSONAL_INFO.name}</div>
                    <a
                      href={PERSONAL_INFO.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto mt-1 inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white"
                    >
                      KorvenzaTech · korvenzatech.com
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Floating 3D emblem */}
                <div
                  className="absolute -left-6 top-10 hidden sm:block"
                  style={{
                    transform: 'translateZ(60px)',
                    translate: 'calc(var(--px, 0) * -18px) calc(var(--py, 0) * -18px)',
                    transition: 'translate .6s cubic-bezier(.16,1,.3,1)',
                  }}
                >
                  <LogoEmblem3D size={92} />
                </div>

                {/* Floating focus chip */}
                <div
                  className="glass-panel absolute -right-4 bottom-28 hidden rounded-2xl px-4 py-3 shadow-[0_30px_50px_-25px_rgba(0,0,0,0.9)] sm:block"
                  style={{
                    transform: 'translateZ(80px)',
                    translate: 'calc(var(--px, 0) * 22px) calc(var(--py, 0) * 22px)',
                    transition: 'translate .6s cubic-bezier(.16,1,.3,1)',
                  }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Focus</div>
                  <div className="mt-1.5 space-y-1 text-xs font-medium text-white">
                    {['Operations', 'Strategy', 'Delivery'].map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Executive mandate                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-y border-white/[0.06] bg-[#0a0e12] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Executive Mandate</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">What I own as COO</h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              The operating backbone of KorvenzaTech — people, process, and delivery — informed by real engineering experience.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MANDATE.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05} className="h-full">
                <TiltCard
                  max={4}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 hover:border-emerald-500/25"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/0 blur-2xl transition-colors duration-500 group-hover:bg-emerald-500/15" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0d1317] text-emerald-400 shadow-inner">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-white">{m.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{m.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Delivered products                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Selected Work</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Products & platforms</h2>
              <p className="mt-3 max-w-xl text-sm text-slate-400">
                Applications from my GitHub — FinTech, ERP and SaaS platforms. Every visual is a real screenshot of the running product.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <span>All case studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Operating rhythm                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative border-t border-white/[0.06] bg-gradient-to-b from-[#0a0e12] to-[#06080b] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Operating Rhythm</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">How KorvenzaTech runs, week to week</h2>
            <p className="mt-3 text-base text-slate-400">
              A simple, repeatable cadence that keeps strategy, teams, and clients aligned.
            </p>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent md:block"
            />
            {OPERATING_RHYTHM.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.08} className="h-full">
                <div className="relative h-full rounded-2xl border border-white/[0.07] bg-[#0b1013] p-6">
                  <div className="flex items-center justify-between">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-[#06080b] text-emerald-400">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-xs text-slate-500">{s.k}</span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Dual perspective                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">The Dual Perspective</span>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Engineer by training. <span className="font-serif font-normal italic text-emerald-200">Operator by role.</span>
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Most projects fail from gaps between business leaders and engineers. I sit on both sides of that table.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: Building2,
                title: 'COO at KorvenzaTech',
                sub: 'Strategy, people & governance',
                body: 'Guiding operational execution, capacity planning, client communication, and quality assurance — so development milestones map directly to business goals and launch dates.',
                points: [
                  'Structured sprints with clear owners and milestones',
                  'Transparent reporting and demos for international clients',
                  'Access to KorvenzaTech’s full engineering team',
                ],
              },
              {
                icon: Code2,
                title: 'Hands-on engineering',
                sub: 'Credible technical judgement',
                body: 'Building Flutter mobile apps and React / TypeScript web platforms myself — which keeps estimates realistic and technical trade-offs honest.',
                points: [
                  'Flutter & Dart for cross-platform mobile',
                  'React, TypeScript and Express for web platforms',
                  'Firebase, REST APIs and AI (Gemini) integrations',
                ],
              },
            ].map((col, i) => (
              <Reveal key={col.title} delay={i * 0.1} className="h-full">
                <TiltCard max={3} className="relative h-full rounded-2xl border border-white/[0.07] bg-[#0b1013] p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#06080b] text-emerald-400">
                      <col.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{col.title}</h3>
                      <div className="text-xs font-medium text-emerald-400">{col.sub}</div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-slate-300">{col.body}</p>
                  <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-6 text-sm text-slate-300">
                    {col.points.map((p) => (
                      <div key={p} className="flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Services                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-white/[0.06] bg-[#0a0e12] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Engagements</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">How we can work together</h2>
              <p className="mt-3 max-w-xl text-sm text-slate-400">
                Direct engagements or full-team delivery through KorvenzaTech — always with clear scope and accountable timelines.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
              <span>All services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 0.06} className="h-full">
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#06080b]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/25 hover:shadow-[0_30px_60px_-40px_rgba(16,185,129,0.5)]">
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.shortDesc}</p>
                    <div className="mt-4 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3 text-xs text-slate-400">
                      <span className="font-semibold text-slate-200">Business value:</span> {service.businessValue}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="text-xs font-medium text-emerald-400">Production-ready</span>
                    <Link to="/contact" className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white">
                      <span>Inquire</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Company                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Company</span>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Leadership at KorvenzaTech</h2>
          </Reveal>
          <Reveal>
            <CompanyCard />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Final CTA                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-t border-white/[0.06] py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.13),transparent)]"
        />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 flex justify-center">
            <LogoEmblem3D size={72} />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let’s build something <span className="font-serif font-normal italic text-emerald-200">dependable</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            Launching a new product, scaling an existing one, or bringing operational discipline to your engineering
            team — let’s discuss what success looks like for you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 px-7 py-3.5 text-base font-semibold text-[#03140c] shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all hover:brightness-110 active:scale-95"
            >
              <span>Start a conversation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setIsEstimatorOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-white/25 hover:text-white"
            >
              <Calculator className="h-4 w-4 text-emerald-400" />
              <span>Scope & cost estimator</span>
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
