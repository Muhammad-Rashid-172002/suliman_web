import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SOCIAL_LINKS = [
  {
    id: 'email',
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Suliman Khan',
    href: PERSONAL_INFO.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: PERSONAL_INFO.githubHandle,
    href: PERSONAL_INFO.github,
    icon: Github,
    external: true,
  },
] as const;

interface SocialLinksProps {
  /** `icons`: square icon buttons. `pills`: icon + label. `list`: stacked rows showing the address/handle. */
  variant?: 'icons' | 'pills' | 'list';
  className?: string;
}

/** Suliman's verified contact channels — single source for every page. */
export const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'icons', className = '' }) => {
  if (variant === 'list') {
    return (
      <ul className={`space-y-2.5 ${className}`}>
        {SOCIAL_LINKS.map((s) => (
          <li key={s.id}>
            <a
              href={s.href}
              {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition-all hover:border-emerald-500/40 hover:bg-white/[0.04]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#06080b] text-emerald-400">
                <s.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">{s.label}</span>
                <span className="block truncate text-sm font-medium text-slate-100 group-hover:text-white">{s.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((s) => (
        <a
          key={s.id}
          href={s.href}
          {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          aria-label={s.id === 'email' ? `Email Suliman Khan at ${PERSONAL_INFO.email}` : `Suliman Khan on ${s.label}`}
          title={s.id === 'email' ? PERSONAL_INFO.email : `${s.label}: ${s.value}`}
          className={
            variant === 'pills'
              ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-white'
              : 'flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-300'
          }
        >
          <s.icon className="h-4 w-4" />
          {variant === 'pills' && <span>{s.label}</span>}
        </a>
      ))}
    </div>
  );
};
