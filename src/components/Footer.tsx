import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { BrandLogo } from './BrandLogo';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06080b] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <BrandLogo size={40} decorative />
              <span className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-400 leading-relaxed">
              Chief Operating Officer at{' '}
              <a
                href={PERSONAL_INFO.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                KorvenzaTech
                <ArrowUpRight className="h-3 w-3" />
              </a>
              . Leading operations, delivery, and client partnerships — with a hands-on Flutter engineering background.
            </p>

            {/* Availability indicator */}
            <div className="mt-5 flex items-center gap-2.5 text-xs text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for International Client Projects & Advisory</span>
            </div>

            {/* Contact channels */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-emerald-300"
            >
              <Mail className="h-4 w-4 text-emerald-400" />
              {PERSONAL_INFO.email}
            </a>
            <SocialLinks className="mt-4" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-emerald-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-emerald-400">About Me</Link>
              </li>
              <li>
                <Link to="/projects" className="transition-colors hover:text-emerald-400">Projects Showcase</Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-emerald-400">Services</Link>
              </li>
              <li>
                <Link to="/leadership" className="transition-colors hover:text-emerald-400">Leadership & COO</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-emerald-400">Contact & Inquiry</Link>
              </li>
            </ul>
          </div>

          {/* Technical Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">Core Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="transition-colors hover:text-emerald-400">Flutter Mobile Apps</Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-emerald-400">Firebase Integration</Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-emerald-400">REST API Integration</Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-emerald-400">Bug Fixing & Audits</Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-emerald-400">Performance Profiling</Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-emerald-400">Sprint Coordination</Link>
              </li>
            </ul>
          </div>

          {/* Company portal */}
          <div>
            <div className="flex items-center gap-2.5">
              <BrandLogo size={28} decorative />
              <h3 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">KorvenzaTech</h3>
            </div>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Software engineering, mobile applications, web platforms, and modern digital solutions.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={PERSONAL_INFO.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300"
              >
                Official Website
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <div>
                <a
                  href={PERSONAL_INFO.companyServicesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white"
                >
                  Explore Company Services
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Verification banner & copyright */}
        <div className="mt-12 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="text-slate-400">
            Suliman Khan · Chief Operating Officer (COO) at KorvenzaTech
          </div>

          <div>
            © {new Date().getFullYear()} Suliman Khan. All rights reserved. Technology leadership via{' '}
            <a
              href={PERSONAL_INFO.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 underline underline-offset-2"
            >
              KorvenzaTech
            </a>.
          </div>
        </div>
      </div>
    </footer>
  );
};
