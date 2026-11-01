import React from 'react';
import { ArrowUpRight, CheckCircle2, Globe } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CompanyCardProps {
  variant?: 'featured' | 'compact' | 'hero';
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ variant = 'featured' }) => {
  if (variant === 'hero') {
    return (
      <div className="group relative overflow-hidden rounded-xl border border-emerald-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950/90 p-5 shadow-lg shadow-emerald-950/20 backdrop-blur-md transition-all hover:border-emerald-500/40">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <BrandLogo size={46} decorative />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Executive Role</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">Technology Leadership</span>
              </div>
              <h3 className="text-base font-bold text-white mt-0.5">
                COO at <span className="text-white hover:text-emerald-300 transition-colors">KorvenzaTech</span>
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                {PERSONAL_INFO.companyTagline}
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-slate-950 hover:shadow-md hover:shadow-emerald-500/20 active:scale-95 whitespace-nowrap"
          >
            <span>Visit KorvenzaTech</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-[#0f172a]/80 to-[#0b1120] p-6 sm:p-8 backdrop-blur-md shadow-xl">
      {/* Decorative gradient corner glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-green-700/10 blur-3xl" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          {/* Company wordmark */}
          <div className="flex items-center gap-3 mb-3">
            <BrandLogo size={56} glow decorative />
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {PERSONAL_INFO.companyName}
              </span>
              <span className="ml-2 text-xs font-medium text-emerald-400">
                Official Company Profile
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            "{PERSONAL_INFO.companyDescription}"
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              Cross-Platform Mobile Engineering
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              Enterprise Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              Global Software Delivery
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <a
            href={PERSONAL_INFO.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-700 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
          >
            <Globe className="h-4 w-4" />
            <span>Visit Official Website</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href={PERSONAL_INFO.companyServicesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white active:scale-[0.98]"
          >
            <span>Explore Company Services</span>
            <ArrowUpRight className="h-4 w-4 text-emerald-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
