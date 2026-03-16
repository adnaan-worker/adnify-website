"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const footerLinks = {
    product: ['Features', 'Pricing', 'Documentation', 'Changelog', 'Status'],
    company: ['About', 'Blog', 'Careers', 'Contact'],
    legal: ['Privacy', 'Terms', 'Security', 'Licenses'],
    resources: ['Help Center', 'Community', 'Newsletter'],
  };

  return (
    <footer className="py-20 px-6 border-t border-border-subtle relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-elevated to-background" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter */}
        <div className="glass-elevated rounded-3xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">订阅更新</h3>
              <p className="text-secondary">获取 Adnify 最新动态和开发资讯</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="输入你的邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 lg:w-80 px-5 py-4 rounded-xl bg-surface-primary border border-border-subtle text-white placeholder-muted focus:outline-none focus:border-aurora-cyan transition-colors"
              />
              <button className="px-6 py-4 bg-gradient-to-r from-aurora-cyan to-aurora-purple text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-aurora-cyan/30 transition-all cursor-pointer">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-aurora-cyan to-aurora-purple rounded-xl opacity-80" />
                <div className="absolute inset-[2px] bg-background rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-heading">A</span>
                </div>
              </div>
              <span className="text-lg font-semibold text-white font-heading">Adnify</span>
            </Link>
            <p className="text-sm text-secondary mb-6">
              一个拥有极致视觉体验、深度集成 AI Agent 的下一代代码编辑器
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/adnaan-worker/adnify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary hover:text-aurora-cyan hover:border-aurora-cyan transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://gitee.com/adnaan/adnify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary hover:text-aurora-cyan hover:border-aurora-cyan transition-all cursor-pointer"
                aria-label="Gitee"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 15.6c.3.5.8.8 1.4.8h5.1c.6 0 1.1-.3 1.4-.8v1.8c0 .6-.3 1.1-.8 1.4H8.9c-.6 0-1.1-.3-1.4-.8v-1.8c0-.6.3-1.1.8-1.4h6.2v-1.8c0-.6.3-1.1.8-1.4v-2.5c0-.6.3-1.1.8-1.4H19c.6 0 1.1.3 1.4.8v5.1c0 .6-.3 1.1-.8 1.4h-1.1v1.8zm-9.3-5.4c.3.5.8.8 1.4.8h1.1V8.9c0-.6.3-1.1.8-1.4h5.1c.6 0 1.1.3 1.4.8v1.8c0 .6-.3 1.1-.8 1.4H9.3c-.6 0-1.1.3-1.4.8V10.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">产品</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-secondary hover:text-aurora-cyan transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-secondary hover:text-aurora-cyan transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">法律</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-secondary hover:text-aurora-cyan transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">资源</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-secondary hover:text-aurora-cyan transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-subtle">
          <p className="text-sm text-muted mb-4 md:mb-0">
            © {new Date().getFullYear()} Adnify. Made with <span className="text-aurora-magenta">♥</span> by{' '}
            <a href="https://github.com/adnaan-worker" target="_blank" rel="noopener noreferrer" className="text-aurora-cyan hover:underline">
              adnaan
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:adnaan.worker@gmail.com" className="text-sm text-muted hover:text-aurora-cyan transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              adnaan.worker@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted">系统正常</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
