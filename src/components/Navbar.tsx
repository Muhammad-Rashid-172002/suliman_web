import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SocialLinks } from './SocialLinks';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#06080b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
            aria-label="Suliman Khan Homepage"
          >
            <BrandLogo size={42} decorative className="transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3" />
            <div>
              <div className="text-base font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Chief Operating Officer <span className="text-slate-600">·</span>{' '}
                <span className="text-emerald-400">KorvenzaTech</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-emerald-400 to-green-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Prominent company link */}
          <a
            href={PERSONAL_INFO.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-slate-700/60 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-emerald-500/40 hover:bg-slate-800 hover:text-white"
            title="Visit KorvenzaTech Official Website"
          >
            <BrandLogo size={16} decorative />
            <span className="font-semibold text-emerald-400">KorvenzaTech</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
          </a>

          {/* Primary CTA */}
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-700 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Let's Discuss a Project</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PERSONAL_INFO.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 rounded border border-slate-800 bg-slate-900 px-2 py-1 text-xs font-medium text-emerald-400"
          >
            KorvenzaTech
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-[#0c1017] px-4 pt-3 pb-6 lg:hidden">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    active
                      ? 'bg-emerald-500/10 text-emerald-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href={PERSONAL_INFO.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300"
            >
              <div className="flex items-center gap-3">
                <BrandLogo size={32} decorative />
                <div className="flex flex-col">
                <span className="font-semibold text-white">KorvenzaTech</span>
                <span className="text-xs text-slate-400">Official Company Website</span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-emerald-400" />
            </a>

            <SocialLinks variant="pills" />

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-700 p-3 text-center text-sm font-semibold text-slate-950"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Let's Discuss a Project</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
