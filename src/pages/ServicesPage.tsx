import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Flame,
  Network,
  Wrench,
  Zap,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Building2,
  HelpCircle,
} from 'lucide-react';
import { SERVICES, FAQS, PERSONAL_INFO } from '../data/portfolioData';
import { EstimatorModal } from '../components/EstimatorModal';
import { CompanyCard } from '../components/CompanyCard';

export const ServicesPage: React.FC = () => {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Flame':
        return Flame;
      case 'Network':
        return Network;
      case 'Wrench':
        return Wrench;
      case 'Zap':
        return Zap;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Workflow':
        return Workflow;
      default:
        return Smartphone;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <EstimatorModal isOpen={isEstimatorOpen} onClose={() => setIsEstimatorOpen(false)} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span>Solutions & Services</span>
              <span className="text-slate-600">/</span>
              <span>International Delivery</span>
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Specialized Flutter Mobile & Architecture Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Targeted software engineering and technology operations tailored for international startups, founders, and enterprises. Each engagement focuses on measurable business value and maintainable architecture.
            </p>
          </div>

          <button
            onClick={() => setIsEstimatorOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-5 py-3 text-xs font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-all shrink-0"
          >
            <Calculator className="h-4 w-4" />
            <span>Scope & Timeline Estimator</span>
          </button>
        </div>

        {/* Note on Individual vs Team Delivery (Prompt requirement) */}
        <div className="mt-8 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 text-xs text-slate-400">
          <div className="flex items-start gap-2.5">
            <Building2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
            <div>
              <strong className="text-slate-200">Delivery Scope Note:</strong> Focused Flutter mobile development, code audits, and architectural integrations are performed directly by me. Larger full-stack web platforms, large-scale design systems, or multi-disciplinary enterprise implementations are delivered through the wider engineering team at{' '}
              <a
                href={PERSONAL_INFO.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline font-medium"
              >
                KorvenzaTech
              </a>
              , which I coordinate as Chief Operating Officer.
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-12 space-y-8">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0c1017] p-6 sm:p-8 transition-all hover:border-emerald-500/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Info & Description */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-slate-900 text-emerald-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-emerald-400">0{index + 1}</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Business Value Highlight */}
                    <div className="mt-5 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Direct Business Value
                      </div>
                      <p className="mt-1 text-sm text-slate-200 font-medium">
                        {service.businessValue}
                      </p>
                    </div>

                    <div className="mt-4 text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">Ideal For:</span> {service.idealFor}
                    </div>
                  </div>

                  {/* Right Column: Key Deliverables & Action */}
                  <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Included Deliverables
                      </div>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                      <Link
                        to="/contact"
                        state={{ projectType: service.title }}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:brightness-110 active:scale-95"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <span className="text-xs text-slate-300">Milestone-based</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Transparency & FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Everything you need to know about working with me directly or via KorvenzaTech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-800 bg-[#0c1017] p-6 space-y-2">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-white">{faq.q}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Card Integration */}
        <div className="mt-20">
          <CompanyCard />
        </div>
      </div>
    </div>
  );
};
