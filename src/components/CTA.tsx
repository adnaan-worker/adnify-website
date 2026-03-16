"use client";

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div 
          className="aurora-orb aurora-orb-cyan"
          style={{
            width: '700px',
            height: '700px',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="aurora-orb aurora-orb-magenta"
          style={{
            width: '500px',
            height: '500px',
            bottom: '10%',
            right: '10%',
            animationDelay: '-5s'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-sm font-medium text-secondary">开源免费 · 欢迎贡献</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
          准备好开始
          <br />
          <span className="gradient-text-animated">下一代编程之旅了吗？</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-secondary max-w-xl mx-auto mb-10">
          立即下载 Adnify，开启智能编程新体验
          <br />
          完全免费，永久开源
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="https://github.com/adnaan-worker/adnify/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              Download for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="https://github.com/adnaan-worker/adnify"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {[
            { value: '4', label: '精美主题' },
            { value: '23+', label: '内置工具' },
            { value: 'MIT', label: '开源协议' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-1 font-heading">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
