"use client";

import { useState } from 'react';
import techStackData from '@/data/techstack.json';

export default function TechStack() {
  const { title, groups, stats } = techStackData;
  const [activeTab, setActiveTab] = useState('core');

  return (
    <section id="tech-stack" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />
        <div 
          className="aurora-orb aurora-orb-blue"
          style={{
            width: '500px',
            height: '500px',
            top: '30%',
            right: '-10%',
            animationDelay: '-6s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-aurora-blue animate-pulse" />
            <span className="text-sm font-medium text-secondary">{title.label}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            {title.heading}
            <br />
            <span className="gradient-text">{title.subheading}</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            {title.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(groups).map(([key, group]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === key
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'glass text-secondary hover:text-white hover:bg-surface-tertiary'
              }`}
            >
              <TabIcon name={group.icon} />
              {group.name}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {groups[activeTab as keyof typeof groups].items.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium group"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-white group-hover:text-aurora-cyan transition-colors">
                  {tech.name}
                </h4>
                <span className="text-xs px-2 py-1 rounded-full bg-surface-tertiary text-aurora-cyan font-mono">
                  v{tech.version}
                </span>
              </div>
              <p className="text-sm text-muted group-hover:text-secondary transition-colors">
                {tech.link.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, '')}
              </p>
              
              {/* External Link Icon */}
              <div className="mt-4 flex items-center gap-2 text-muted group-hover:text-aurora-cyan transition-colors">
                <span className="text-xs">查看文档</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-premium text-center">
              <div className="text-4xl font-bold text-white mb-2 font-heading">{stat.value}</div>
              <div className="text-sm text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TabIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    database: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    code: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    sparkle: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    layout: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  };
  
  return icons[name] || icons.database;
}
