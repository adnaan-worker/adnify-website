"use client";

import { useState, useEffect, useRef } from 'react';
import CodeEditor from './CodeEditor';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 2, 
        y: (e.clientY / window.innerHeight - 0.5) * 2 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-[120px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(-50%, -50%) translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-full blur-[100px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(-50%, -50%) translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
        />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent,80%)]" />
        
        {/* Floating particles */}
        <FloatingParticles />
      </div>

      {/* Badge */}
      <div className="relative z-10 mb-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <SparkleIcon className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-medium text-gray-300">本官网 100% 使用本 IDE 项目 + MiniMax 2.1 模型开发</span>
        </div>
      </div>

      {/* Main heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-6xl md:text-8xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
          Connect AI
          <br />
          <GradientText>to Your Code.</GradientText>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          一个拥有极致视觉体验、深度集成 AI Agent 的下一代代码编辑器。
          <br />
          <span className="text-gray-500">The AI-first code editor with stunning visual experience.</span>
        </p>
      </div>

      {/* CTA buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <a 
          href="https://github.com/adnaan-worker/adnify/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-3.5 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-white/20 cursor-pointer flex items-center gap-2"
        >
          Download for Free
          <span className="group-hover:translate-x-1 transition-transform duration-300">↓</span>
        </a>
        <a 
          href="https://github.com/adnaan-worker/adnify"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-white/5 text-white rounded-full font-medium text-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
        <button className="group px-8 py-3.5 bg-white/5 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 border border-white/10 cursor-pointer flex items-center gap-2">
          <PlayIcon className="w-5 h-5" />
          Watch the film
        </button>
      </div>

      {/* Code editor showcase */}
      <div className="relative z-10 w-full max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <GlowCard>
          <CodeEditor />
        </GlowCard>
      </div>

      {/* Trusted by */}
      <div className="relative z-10 mt-32 pb-20 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-sm text-gray-500 mb-6">Trusted by engineering teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
          {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'].map((company) => (
            <span key={company} className="text-lg font-semibold text-gray-400">{company}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce-slow">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-gray-500 animate-scroll" />
        </div>
      </div>
    </section>
  );
}

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20 animate-float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </>
  );
}

// Glow card wrapper
function GlowCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-700" />
      <div className="relative">{children}</div>
    </div>
  );
}

// Gradient text component
function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
      {children}
    </span>
  );
}

// Sparkle icon
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L6.34 21.12L12 17.77L17.66 21.12L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
    </svg>
  );
}

// Play icon
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
