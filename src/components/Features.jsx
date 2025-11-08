import React from 'react';
import { BarChart3, Zap, Workflow, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Real-time analytics',
    desc: 'Unified dashboards for revenue, cash flow, and reconciliation with drill-downs to transaction-level detail.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'AI automations',
    desc: 'Trigger workflows from webhooks, emails, or schedules. Let agents classify, enrich, and route financial operations.'
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'No-code workflows',
    desc: 'Build flows with approvals, rules, and human-in-the-loop steps. Versioned and auditable by default.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Enterprise-grade security',
    desc: 'SOC 2 Type II, SSO/SAML, fine-grained roles, audit logs, and encryption in transit and at rest.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Do more with fewer clicks</h2>
          <p className="mt-3 text-white/70">A platform designed for finance teams who want automation without losing control.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-500 to-teal-400 text-slate-900 flex items-center justify-center">
                <div className="text-white">{f.icon}</div>
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
