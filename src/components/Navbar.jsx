import React from 'react';
import { CreditCard, Bot, Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
            <CreditCard size={18} />
          </div>
          <span className="font-semibold tracking-tight text-white/90">FluxPay</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#security">Security</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm text-white/80 hover:text-white transition">
            <Shield size={16} />
            Security
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white text-slate-900 px-4 text-sm font-medium shadow/20 shadow-lg hover:bg-white/90 transition">
            <Bot size={16} />
            Try Automations
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
