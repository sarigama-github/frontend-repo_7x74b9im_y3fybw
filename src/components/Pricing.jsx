import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['Up to 1,000 transactions/mo', '2 workflows', 'Email support']
  },
  {
    name: 'Growth',
    price: '$79',
    period: 'per month',
    features: ['Up to 50,000 transactions/mo', 'Unlimited workflows', 'Priority support', 'SSO (OAuth)']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited transactions', 'SAML/SCIM', 'Private cloud/VPC', 'Dedicated CSM']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Scale as your finance operations grow.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-medium">{t.name}</h3>
                <div className="text-3xl font-semibold text-white">{t.price}
                  <span className="ml-1 text-sm font-normal text-white/60">{t.period}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full h-11 rounded-lg bg-white text-slate-900 font-medium hover:bg-white/90 transition">
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
