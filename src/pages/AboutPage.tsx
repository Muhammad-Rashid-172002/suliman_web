import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Code2,
  Building2,
  GitBranch,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  ArrowRight,
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, WORK_PROCESS } from '../data/portfolioData';
import { CompanyCard } from '../components/CompanyCard';
import { portfolioImages } from '../assets/images';
import { SocialLinks } from '../components/SocialLinks';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span>About Me</span>
            <span className="text-slate-600">/</span>
            <span>Suliman Khan</span>
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Leading Operations, Built on Engineering
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A developer-first Chief Operating Officer combining deep technical mastery of Flutter mobile development with disciplined operational governance at KorvenzaTech.
          </p>
        </div>

        {/* Biography & Photo Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <div className="rounded-2xl border border-slate-800 bg-[#0c1017] p-7 sm:p-8 space-y-5">
              <h2 className="text-xl font-bold text-white tracking-tight">Professional Biography</h2>
              
              <p className="text-slate-300">
                I am <strong className="text-white">Suliman Khan</strong>, Chief Operating Officer at{' '}
                <a
                  href={PERSONAL_INFO.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-0.5"
                >
                  KorvenzaTech
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                . I lead day-to-day operations, delivery, and client partnerships, and I remain a hands-on Flutter developer. My technical background helps me understand software requirements, while my operations role focuses on organized workflows, effective collaboration, quality standards, and reliable project execution.
              </p>

              <p className="text-slate-300">
                I am interested in building useful digital products, solving real business problems, and collaborating with international clients to turn ideas into practical software solutions.
              </p>

              <p className="text-slate-400 text-sm">
                Rather than treating software engineering as an isolated coding exercise, I view every line of code as an investment toward a sustainable business outcome. This perspective enables me to anticipate edge cases early, maintain uncompromised architectural hygiene, and avoid costly rework down the line.
              </p>
            </div>

            {/* COO Responsibilities Breakdown */}
            <div className="rounded-2xl border border-slate-800 bg-[#0c1017] p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-slate-900 text-emerald-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">COO Responsibilities at KorvenzaTech</h3>
                  <div className="text-xs text-emerald-400">Operational Excellence & Client Delivery</div>
                </div>
              </div>

              <p className="text-sm text-slate-300">
                In my capacity as Chief Operating Officer at KorvenzaTech, my core operational focus areas include:
              </p>

              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                  <span><strong>Day-to-day Operations:</strong> Managing project workflows, team communication cadences, and development velocity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                  <span><strong>Delivery Coordination:</strong> Structuring milestone commitments, sprint scoping, and quality acceptance criteria.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                  <span><strong>Workflow Improvement:</strong> Standardizing Git review protocols, CI/CD pipelines, and coding standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                  <span><strong>Client Communication:</strong> Acting as a transparent technical liaison for international founders and enterprise teams.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                  <span><strong>Engineering Collaboration:</strong> Working side-by-side with backend and frontend specialists to ensure seamless multi-platform delivery.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Headshot, Credentials & Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0c1017]">
              <img
                src={portfolioImages.portrait}
                alt="Suliman Khan, Chief Operating Officer of KorvenzaTech"
                width={1086}
                height={1448}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover object-[center_20%]"
              />
              <div className="p-6">
                <div className="text-base font-bold text-white">{PERSONAL_INFO.name}</div>
                <div className="text-xs text-emerald-400 font-medium">Chief Operating Officer · KorvenzaTech</div>
                
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Experience:</span>
                    <span className="font-semibold text-white">{PERSONAL_INFO.experienceYears}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Education:</span>
                    <span className="font-semibold text-white">{PERSONAL_INFO.education}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Company:</span>
                    <a
                      href={PERSONAL_INFO.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      {PERSONAL_INFO.companyName}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Position:</span>
                    <span className="font-semibold text-white">Chief Operating Officer (COO)</span>
                  </div>
                </div>

                <SocialLinks variant="list" className="mt-5" />
              </div>
            </div>

            {/* Academic Qualifications */}
            <div className="rounded-2xl border border-slate-800 bg-[#0c1017] p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Academic Foundation</h3>
              </div>
              <div className="text-sm text-slate-300">
                <div className="font-semibold text-white">Bachelor of Science in Software Engineering (BSSE)</div>
                <div className="text-xs text-slate-400 mt-1">
                  Rigorous foundation in algorithms, data structures, object-oriented system design, software quality assurance, and project management.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Expertise Deep-Dive */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Skillset</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Technical Expertise & Engineering Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_DATA.map((group, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-[#0c1017] p-6">
                <h3 className="text-base font-bold text-white pb-3 border-b border-slate-800">
                  {group.category}
                </h3>
                <div className="mt-4 space-y-4">
                  {group.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-xs font-mono text-emerald-400">{skill.level}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering & Delivery Process */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Development & Delivery Approach
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              How I structure technical requirements and operations to ensure seamless delivery from discovery to App Store release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {WORK_PROCESS.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-800 bg-[#0c1017]/80 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-400">STEP {step.step}</span>
                  <h3 className="text-sm font-bold text-white mt-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Affiliation Card */}
        <div className="mt-16">
          <CompanyCard />
        </div>

        {/* Inquiry Call to Action */}
        <div className="mt-16 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-slate-900 to-slate-950 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Interested in collaborating on your next mobile product?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Let’s discuss your technical architecture, timeline, and operational requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-700 px-6 py-3 text-sm font-semibold text-slate-950 hover:brightness-110 shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
