import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-100 bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-black text-slate-900 tracking-tighter text-2xl">CHRONOS ULTRA</span>
          <p className="font-medium text-sm text-slate-500">© 2024 CHRONOS ENGINEERING</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <a className="text-slate-500 hover:text-primary transition-colors text-sm font-semibold" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-sm font-semibold" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-sm font-semibold" href="#">Support</a>
          <a className="text-slate-500 hover:text-primary transition-colors text-sm font-semibold" href="#">Press</a>
        </div>

        <div className="flex gap-5">
          <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer group">
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">public</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all cursor-pointer group">
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">share</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
