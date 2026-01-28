"use client";

import { useState } from 'react';
import techStackData from '@/data/techstack.json';

export default function TechStack() {
  const { title, groups, stats } = techStackData;
  const [activeTab, setActiveTab] = useState('core');

  return (
    <section id="tech-stack" className="py-32 px-6 bg-gradient-to-b from-black via-blue-950/10 to-black">
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-500 mb-4 block animate-fade-in">{title.label}</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight animate-fade-in-up">
            {title.heading}
            <br />
            <span className="text-gray-400">{title.subheading}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {title.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {Object.entries(groups).map(([key, group]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === key
                  ? 'bg-white text-black shadow-lg shadow-white/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <TabIcon name={group.icon} />
              {group.name}
            </button>
          ))}
        </div>

        {/* Tech cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {groups[activeTab as keyof typeof groups].items.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-3xl bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {/* Gradient glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${groups[activeTab as keyof typeof groups].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 font-mono">
                    v{tech.version}
                  </span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.link.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, '')}
                </p>
              </div>

              {/* External link icon */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tab icon helper
function TabIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    database: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    code: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    sparkle: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    layout: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  };
  
  return icons[name] || icons.database;
}
