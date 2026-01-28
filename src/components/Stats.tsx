"use client";

import { useEffect, useState, useRef } from 'react';

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
}

function StatCounter({ value, label, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseFloat(value);
    const duration = 2000;
    const steps = 100;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={countRef} className="text-center">
      <div className="text-5xl md:text-6xl font-semibold text-white mb-2 tabular-nums">
        {count.toFixed(value.includes('.') ? 1 : 0)}{suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: '4', label: '精美主题' },
    { value: '23+', label: 'AI 内置工具' },
    { value: '3', label: 'AI 工作模式' },
    { value: '6+', label: 'LLM 提供商支持' },
  ];

  return (
    <section id="stats" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-500 mb-4 block animate-fade-in">核心数据</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight animate-fade-in-up">
            专业级开发体验
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            从代码生成到文件操作，全流程自动化支持。
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatCounter {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
