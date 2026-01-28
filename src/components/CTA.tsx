"use client";

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 pointer-events-none" />
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-sm text-gray-300">开源免费 · 欢迎贡献代码</span>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight leading-tight animate-fade-in-up">
          准备好开始
          <br />
          <GradientText>下一代编程之旅了吗？</GradientText>
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          立即下载 Adnify，开启智能编程新体验。完全免费，永久开源。
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a 
            href="https://github.com/adnaan-worker/adnify/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-white/10 cursor-pointer flex items-center gap-2"
          >
            Download for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://github.com/adnaan-worker/adnify"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white/5 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 border border-white/10 cursor-pointer"
          >
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {[
            { value: '4', label: '精美主题' },
            { value: '23+', label: '内置工具' },
            { value: 'MIT', label: '开源协议' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
      {children}
    </span>
  );
}
