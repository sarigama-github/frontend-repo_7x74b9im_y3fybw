import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />
        <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.35),transparent)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              New: AI Workflows for Finance Ops
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              The modern SaaS for finance and automation
            </h1>
            <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              FluxPay unifies payments, reconciliation, and AI-driven automations into one elegant platform. Close your books faster, reduce manual work, and unlock real-time insights.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-lg bg-white text-slate-900 px-5 font-medium shadow-lg shadow-sky-500/20 hover:bg-white/90 transition">
                Get Started
              </a>
              <a href="#features" className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white px-5 font-medium hover:bg-white/10 transition">
                See Features
              </a>
            </div>
            <div className="mt-6 text-xs text-white/50">
              SOC 2 Type II • PSD2 Compliant • PCI-DSS Level 1
            </div>
          </div>
          <div className="relative h-[520px] sm:h-[560px] md:h-[600px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
