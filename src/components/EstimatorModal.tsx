import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, X, Check, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [projectType, setProjectType] = useState<'mvp' | 'full' | 'audit' | 'firebase'>('mvp');
  const [platform, setPlatform] = useState<'both' | 'ios' | 'android'>('both');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth',
    'rest-api',
    'offline',
  ]);

  if (!isOpen) return null;

  const featuresList = [
    { id: 'auth', label: 'Firebase / Social Auth', weeks: 1, cost: 500 },
    { id: 'rest-api', label: 'REST API & Dio Integration', weeks: 1.5, cost: 800 },
    { id: 'offline', label: 'Offline Caching (Hive/SQLite)', weeks: 1, cost: 600 },
    { id: 'maps', label: 'GPS & Live Map Navigation', weeks: 2, cost: 1100 },
    { id: 'biometrics', label: 'Biometric & Secure Vault', weeks: 1, cost: 500 },
    { id: 'push', label: 'Cloud Messaging & Push Alerts', weeks: 0.5, cost: 400 },
    { id: 'charts', label: 'Financial / Health Data Charts', weeks: 1.5, cost: 900 },
    { id: 'coordination', label: 'COO Sprint & Architecture Governance', weeks: 1, cost: 700 },
  ];

  const baseConfig = {
    mvp: { baseWeeks: 4, baseCost: 3200, name: 'MVP Flutter Mobile App' },
    full: { baseWeeks: 8, baseCost: 6500, name: 'Full-Scale Enterprise Application' },
    audit: { baseWeeks: 1.5, baseCost: 1400, name: 'Flutter Bug Fix & 60fps Optimization' },
    firebase: { baseWeeks: 3, baseCost: 2500, name: 'Firebase & Backend Integration' },
  };

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const selectedFeatureDetails = featuresList.filter((f) => selectedFeatures.includes(f.id));
  const featureWeeks = selectedFeatureDetails.reduce((acc, curr) => acc + curr.weeks, 0);
  const featureCost = selectedFeatureDetails.reduce((acc, curr) => acc + curr.cost, 0);

  const totalEstimatedWeeks = Math.round(baseConfig[projectType].baseWeeks + featureWeeks * 0.75);
  const totalEstimatedBudget = baseConfig[projectType].baseCost + featureCost;

  const handleApplyToInquiry = () => {
    const featureLabels = selectedFeatureDetails.map((f) => f.label).join(', ');
    const inquiryDescription = `[Project Scope Estimate]: ${baseConfig[projectType].name} for ${
      platform === 'both' ? 'iOS & Android (Flutter)' : platform.toUpperCase()
    }.\nEstimated Timeline: ~${totalEstimatedWeeks} weeks.\nIncluded Modules: ${featureLabels}.`;

    navigate('/contact', {
      state: {
        projectType: baseConfig[projectType].name,
        budgetRange: `$${totalEstimatedBudget.toLocaleString()} - $${(totalEstimatedBudget * 1.3).toLocaleString()}`,
        timeline: `${totalEstimatedWeeks} Weeks`,
        description: inquiryDescription,
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-[#0c1017] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-slate-900 text-emerald-400">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Flutter Project Scope & Timeline Estimator</h3>
              <p className="text-xs text-slate-400">For international startups, founders, and enterprises</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[75vh] overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Project Type */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
              1. Select Engagement Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(
                [
                  { id: 'mvp', label: 'Flutter MVP Launch', sub: 'Rapid 4-6 week functional product' },
                  { id: 'full', label: 'Production Enterprise App', sub: 'Comprehensive custom system' },
                  { id: 'audit', label: 'Bug Fix & 60fps Profiling', sub: 'Stabilizing existing code' },
                  { id: 'firebase', label: 'Firebase & Cloud Backend', sub: 'Auth, Firestore, API integration' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id)}
                  className={`flex flex-col text-left p-3 rounded-xl border transition-all ${
                    projectType === item.id
                      ? 'border-emerald-400 bg-emerald-950/30 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                  <span className="text-xs text-slate-400 mt-0.5">{item.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
              2. Target Platforms
            </label>
            <div className="flex gap-2">
              {[
                { id: 'both', label: 'iOS & Android (Unified Flutter Codebase)' },
                { id: 'ios', label: 'iOS Focused' },
                { id: 'android', label: 'Android Focused' },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlatform(p.id as any)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                    platform === p.id
                      ? 'border-emerald-400 bg-emerald-950/40 text-emerald-300 font-semibold'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Modules Selection */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
              3. Architectural Modules & Features
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featuresList.map((feat) => {
                const checked = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-colors ${
                      checked
                        ? 'border-emerald-500/50 bg-emerald-500/10 text-white'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    <span>{feat.label}</span>
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded border ${
                        checked ? 'border-emerald-400 bg-emerald-500 text-slate-950' : 'border-slate-700'
                      }`}
                    >
                      {checked && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Estimate summary calculation card */}
          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400 font-medium">Estimated Delivery Timeline</div>
                <div className="flex items-center gap-1.5 text-xl font-extrabold text-white mt-0.5">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>~{totalEstimatedWeeks} Weeks</span>
                  <span className="text-xs font-normal text-slate-400">
                    ({Math.ceil(totalEstimatedWeeks / 2)} Agile Sprints)
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">Approximate Investment Range</div>
                <div className="text-xl font-extrabold text-emerald-400 mt-0.5">
                  ${totalEstimatedBudget.toLocaleString()} — ${(totalEstimatedBudget * 1.3).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 bg-[#06080b] p-5 sm:p-6">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Estimates are preliminary guides. All deliverables backed by structured milestones.
          </p>

          <button
            onClick={handleApplyToInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-700 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:brightness-110 active:scale-95"
          >
            <span>Proceed to Inquiry</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
