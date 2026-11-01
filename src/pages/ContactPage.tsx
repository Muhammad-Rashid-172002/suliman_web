import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Globe,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  description?: string;
}

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const prefill = (location.state as any) || {};

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    projectType: prefill.projectType || 'Flutter Mobile App Development',
    budgetRange: prefill.budgetRange || '$5,000 - $10,000',
    timeline: prefill.timeline || '4 - 8 Weeks',
    description: prefill.description || '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefill.projectType || prefill.description) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefill.projectType || prev.projectType,
        budgetRange: prefill.budgetRange || prev.budgetRange,
        timeline: prefill.timeline || prev.timeline,
        description: prefill.description || prev.description,
      }));
    }
  }, [location.state]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your professional email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief description of your project or requirements.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Please describe your project with at least 15 characters so we can understand your requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const inquiryId = `SK-INQ-${Date.now().toString().slice(-6)}`;
      const payload = {
        id: inquiryId,
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      // Persist in client storage for reference
      const existingInquiries = JSON.parse(localStorage.getItem('sk_client_inquiries') || '[]');
      existingInquiries.unshift(payload);
      localStorage.setItem('sk_client_inquiries', JSON.stringify(existingInquiries.slice(0, 10)));

      setSubmittedInquiryId(inquiryId);
      setSubmitStatus('success');

      // Hand the inquiry to the visitor's email client, addressed to Suliman.
      window.location.href = buildMailto(inquiryId);
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryText = () => `Project Inquiry to Suliman Khan
Name: ${formData.fullName}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget Range: ${formData.budgetRange}
Timeline: ${formData.timeline}

${formData.description}`;

  const buildMailto = (ref?: string) =>
    `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Project inquiry: ${formData.projectType}${ref ? ` (${ref})` : ''}`,
    )}&body=${encodeURIComponent(inquiryText())}`;

  const handleCopyInquiry = () => {
    const text = inquiryText();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span>Client Inquiry</span>
            <span className="text-slate-600">/</span>
            <span>Global Collaboration</span>
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let’s Start a Conversation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out about a new product, an engagement with KorvenzaTech, or operations and delivery leadership for your team. Email, LinkedIn and GitHub details are on the right.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0c1017] p-6 sm:p-8">
              {submitStatus === 'success' ? (
                <div className="space-y-6 py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Your inquiry is ready to send</h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your email app should have opened with the inquiry (reference <span className="font-mono text-emerald-400">{submittedInquiryId}</span>) addressed to <span className="font-mono text-white">{PERSONAL_INFO.email}</span> — just press send.
                    </p>
                    <p className="mt-2 text-xs text-slate-400">
                      If nothing opened, use the button below or copy the summary and email it directly.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-800">
                    <button
                      onClick={handleCopyInquiry}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-emerald-500/40"
                    >
                      <Copy className="h-4 w-4 text-emerald-400" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                    </button>

                    <a
                      href={buildMailto(submittedInquiryId ?? undefined)}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Open email to Suliman</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({
                        fullName: '',
                        email: '',
                        projectType: 'Flutter Mobile App Development',
                        budgetRange: '$5,000 - $10,000',
                        timeline: '4 - 8 Weeks',
                        description: '',
                      });
                    }}
                    className="text-xs text-slate-300 hover:text-white underline mt-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2.5 rounded-xl border border-rose-500/40 bg-rose-950/30 p-4 text-xs text-rose-300">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>An error occurred while submitting your inquiry. Please try again or email me directly at {PERSONAL_INFO.email}.</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className={`w-full rounded-xl border bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        errors.fullName ? 'border-rose-500/80' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Professional Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Professional Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full rounded-xl border bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        errors.email ? 'border-rose-500/80' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="Flutter Mobile App Development">Flutter Mobile App Development (iOS & Android)</option>
                      <option value="Firebase Architecture & Integration">Firebase Architecture & Database Integration</option>
                      <option value="REST API & Dio Integration">REST API & Backend Integration</option>
                      <option value="Flutter Bug Fixing & 60fps Optimization">Flutter Bug Fixing & Performance Optimization</option>
                      <option value="Technical Project Coordination">Technical Project Coordination / COO Advisory</option>
                      <option value="KorvenzaTech Full Team Engagement">KorvenzaTech Full Team Engineering</option>
                      <option value="Other Custom Inquiry">Other Custom Inquiry</option>
                    </select>
                  </div>

                  {/* Budget & Timeline (Two column) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budgetRange" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Optional Budget Range (USD)
                      </label>
                      <select
                        id="budgetRange"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="Under $3,000">Under $3,000 (Small sprint / Bug fix)</option>
                        <option value="$3,000 - $6,000">$3,000 - $6,000 (MVP / Architecture setup)</option>
                        <option value="$6,000 - $12,000">$6,000 - $12,000 (Full-featured app)</option>
                        <option value="$12,000+">$12,000+ (Enterprise multi-platform)</option>
                        <option value="To Be Discussed">To Be Discussed / Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks / Audit)</option>
                        <option value="1 Month">1 Month (MVP Sprint)</option>
                        <option value="2-3 Months">2-3 Months (Complete Product)</option>
                        <option value="Ongoing Retainer">Ongoing Retainer / Sprint Basis</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Description & Requirements <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Share details about your app idea, current challenges, technical stack requirements, or deadlines..."
                      className={`w-full rounded-xl border bg-slate-950/80 p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
                        errors.description ? 'border-rose-500/80' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-xs text-rose-400">{errors.description}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-700 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                        <span>Validating & Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Channels, Verification & Company Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channels */}
            <div className="rounded-2xl border border-slate-800 bg-[#0c1017] p-6 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication Channels</h3>
              
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 text-slate-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-400" />
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <div className="font-mono text-xs font-semibold text-white">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 text-slate-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-emerald-400" />
                    <div>
                      <div className="text-xs text-slate-400">Company Portal</div>
                      <div className="text-xs font-semibold text-white">korvenzatech.com</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 text-slate-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-emerald-400" />
                    <div>
                      <div className="text-xs text-slate-400">GitHub</div>
                      <div className="text-xs font-semibold text-white">github.com/{PERSONAL_INFO.githubHandle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/40 p-3.5 text-slate-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-emerald-400" />
                    <div>
                      <div className="text-xs text-slate-400">LinkedIn</div>
                      <div className="text-xs font-semibold text-white">linkedin.com/in/suliman-khan-929155434</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* International Collaboration Assurance */}
            <div className="rounded-2xl border border-slate-800 bg-[#0c1017] p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Client Engagement Standards</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Transparent milestone-based contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Clean Git commits & full IP rights ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Timezone overlap for async & real-time syncs</span>
                </li>
              </ul>
            </div>

            {/* Official KorvenzaTech Card */}
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <Building2 className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Corporate Leadership</span>
              </div>
              <p className="text-xs text-slate-300">
                Operating as COO at <strong className="text-white">KorvenzaTech</strong>, coordinating multi-disciplinary software teams across mobile, web, and cloud.
              </p>
              <div className="mt-4">
                <a
                  href={PERSONAL_INFO.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Visit korvenzatech.com</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
