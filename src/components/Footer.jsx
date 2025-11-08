import React from 'react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} FluxPay. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a className="hover:text-white transition" href="#">Privacy</a>
            <a className="hover:text-white transition" href="#">Terms</a>
            <a className="hover:text-white transition" href="#">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
