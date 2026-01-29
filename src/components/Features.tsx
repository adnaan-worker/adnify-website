"use client";

import { useState } from 'react';
import Image from 'next/image';
import featuresData from '@/data/features.json';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  // 从 JSON 导入数据
  const { coreFeatures, uniqueAdvantages } = featuresData;

  return (
    <section id="features" className="py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 mb-4 block animate-fade-in">核心特性</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight animate-fade-in-up">
            为开发者而生的
            <br />
            <span className="text-gray-400">下一代代码编辑器</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            融合 Cyberpunk 玻璃拟态设计，内置强大 AI Agent，支持全流程自动化开发。
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative p-8 rounded-3xl bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className={feature.color}>
                    <FeatureIcon name={feature.icon} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      {/* Feature screenshots showcase */}
      <div className="mt-32 relative">
        <FeatureShowcase />
      </div>

        {/* Unique Advantages section */}
        <div className="mt-32">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-500 mb-4 block animate-fade-in">独特优势</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight animate-fade-in-up">
              对比 Cursor/Windsurf/Claude Code
              <br />
              <span className="text-gray-400">更智能、更强大</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              10大独特功能，解决AI编程工具的常见痛点，让开发体验更流畅。
            </p>
          </div>

          {/* Unique advantage cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <span className={`text-2xl ${advantage.color}`}>{advantage.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {advantage.description}
                  </p>
                </div>
                
                {/* Arrow indicator */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon helper component
function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    sparkle: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    shield: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    users: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    lightning: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    database: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    cpu: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  };
  
  return icons[name] || icons.sparkle;
}

// Feature showcase with screenshots
function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'themes',
      label: '多主题',
      description: '4套精心设计的主题',
      image: '/images/feature-themes.png',
    },
    {
      id: 'agent',
      label: 'AI Agent',
      description: '三种工作模式',
      image: '/images/feature-agent.png',
    },
    {
      id: 'terminal',
      label: '集成终端',
      description: '完整终端体验',
      image: '/images/feature-terminal.png',
    },
    {
      id: 'git',
      label: 'Git 支持',
      description: '完整的版本控制',
      image: '/images/feature-git.png',
    },
  ];

  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 p-4 border-b border-white/5">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === index
                ? 'bg-white text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Screenshot */}
      <div className="p-8">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117]">
          <Image
            src={tabs[activeTab].image}
            alt={tabs[activeTab].description}
            fill
            className="object-contain transition-opacity duration-500"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-xl font-semibold text-white mb-1">{tabs[activeTab].label}</h3>
            <p className="text-gray-400">{tabs[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive demo component (kept as fallback)
function InteractiveDemo() {
  const [demoStep, setDemoStep] = useState(0);

  const demoSteps = [
    { label: 'Start typing', description: 'AI suggests completions in real-time' },
    { label: 'Ask AI', description: 'Get explanations and code generation' },
    { label: 'Refactor', description: 'Smart refactoring with one click' },
  ];

  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-sm text-gray-500">demo.adnify.dev</span>
        </div>
        <div className="flex gap-2">
          {demoSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setDemoStep(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                demoStep === index
                  ? 'bg-white scale-125'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-sm text-gray-500">{demoSteps[demoStep].label}</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <p className="text-center text-gray-400">{demoSteps[demoStep].description}</p>
      </div>
    </div>
  );
}