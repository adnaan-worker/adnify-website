"use client";

import { useState } from 'react';
import Image from 'next/image';
import featuresData from '@/data/features.json';

export default function Features() {
  const { coreFeatures, uniqueAdvantages } = featuresData;

  return (
    <section id="features" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-elevated to-background" />
        {/* Aurora Orbs */}
        <div 
          className="aurora-orb aurora-orb-purple"
          style={{
            width: '600px',
            height: '600px',
            top: '20%',
            left: '-10%',
            animationDelay: '-3s'
          }}
        />
        <div 
          className="aurora-orb aurora-orb-cyan"
          style={{
            width: '500px',
            height: '500px',
            bottom: '10%',
            right: '-5%',
            animationDelay: '-8s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-aurora-purple animate-pulse" />
            <span className="text-sm font-medium text-secondary">核心特性</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            为开发者而生的
            <br />
            <span className="gradient-text">下一代代码编辑器</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            融合 Cyberpunk 玻璃拟态设计，内置强大 AI Agent，支持全流程自动化开发
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {coreFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="card-premium group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <div className={feature.color}>
                  <FeatureIcon name={feature.icon} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-aurora-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-muted group-hover:text-aurora-cyan transition-colors">
                <span className="text-sm">了解更多</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <FeatureShowcase />

        {/* Unique Advantages */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-aurora-magenta animate-pulse" />
              <span className="text-sm font-medium text-secondary">独特优势</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              对比 Cursor/Windsurf/Claude Code
              <br />
              <span className="gradient-text">更智能、更强大</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              10大独特功能，解决AI编程工具的常见痛点
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="card-premium group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className={`text-2xl ${advantage.color}`}>{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-aurora-cyan transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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

function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'themes', label: '多主题', description: '4套精心设计的主题', image: '/images/feature-themes.png' },
    { id: 'agent', label: 'AI Agent', description: '三种工作模式', image: '/images/feature-agent.png' },
    { id: 'terminal', label: '集成终端', description: '完整终端体验', image: '/images/feature-terminal.png' },
    { id: 'git', label: 'Git 支持', description: '完整的版本控制', image: '/images/feature-git.png' },
  ];

  return (
    <div className="rounded-3xl overflow-hidden border-glow glass-elevated">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 p-6 border-b border-border-subtle">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              activeTab === index
                ? 'bg-white text-black'
                : 'text-secondary hover:text-white hover:bg-surface-tertiary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Screenshot */}
      <div className="p-8">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border-subtle bg-background-elevated">
          <Image
            src={tabs[activeTab].image}
            alt={tabs[activeTab].description}
            fill
            className="object-contain"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-xl font-semibold text-white mb-1">{tabs[activeTab].label}</h3>
            <p className="text-secondary">{tabs[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
