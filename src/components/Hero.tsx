"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        {/* Primary Aurora Orb */}
        <div 
          className="aurora-orb aurora-orb-cyan"
          style={{
            width: '800px',
            height: '800px',
            top: '-20%',
            left: '-10%',
            animationDelay: '0s'
          }}
        />
        
        {/* Secondary Aurora Orb */}
        <div 
          className="aurora-orb aurora-orb-purple"
          style={{
            width: '600px',
            height: '600px',
            bottom: '-10%',
            right: '-5%',
            animationDelay: '-5s'
          }}
        />
        
        {/* Tertiary Aurora Orb */}
        <div 
          className="aurora-orb aurora-orb-magenta"
          style={{
            width: '500px',
            height: '500px',
            top: '30%',
            right: '20%',
            animationDelay: '-10s'
          }}
        />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-cyan"></span>
          </span>
          <span className="text-sm font-medium text-secondary">
            100% 使用 Adnify + AI 开发
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] font-heading transition-all duration-1000 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-white">Connect AI</span>
          <br />
          <span className="gradient-text-animated">to Your Code.</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg sm:text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          一个拥有极致视觉体验、深度集成 AI Agent 的
          <br className="hidden sm:block" />
          <span className="text-aurora-cyan font-medium">下一代代码编辑器</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a 
            href="https://github.com/adnaan-worker/adnify/releases" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group btn-primary flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              Download for Free
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
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

        {/* Social Proof */}
        <div 
          className={`flex items-center justify-center gap-6 flex-wrap transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full border-2 border-background"
                  style={{
                    background: `linear-gradient(135deg, ${['#00FFFF', '#7B61FF', '#FF00FF', '#0080FF'][i]}, ${['#7B61FF', '#FF00FF', '#0080FF', '#00FFFF'][i]})`
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-muted">2.5k+ Developers</span>
          </div>
          
          <div className="w-px h-6 bg-border-subtle" />
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-sm text-muted">GitHub Trending #1</span>
          </div>
          
          <div className="w-px h-6 bg-border-subtle" />
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-aurora-cyan">v1.0.0</span>
            <span className="text-sm text-muted">Latest Release</span>
          </div>
        </div>
      </div>

      {/* Product Screenshot */}
      <div 
        className={`relative z-10 w-full max-w-6xl mx-auto mt-20 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative rounded-3xl overflow-hidden border-glow">
          {/* Window Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-surface-secondary border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-sm text-muted font-mono">Adnify IDE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-aurora-cyan/50 animate-pulse" />
              <span className="text-xs text-aurora-cyan font-mono">AI Active</span>
            </div>
          </div>
          
          {/* Screenshot */}
          <div className="relative aspect-[16/9] bg-background-elevated">
            <Image 
              src="/images/hero-screenshot.png" 
              alt="Adnify IDE 主界面" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Glow Effect Under Screenshot */}
        <div className="absolute -inset-4 bg-gradient-to-r from-aurora-cyan/10 via-aurora-purple/10 to-aurora-magenta/10 blur-3xl -z-10" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted">Scroll to explore</span>
          <svg className="w-6 h-6 text-aurora-cyan animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
