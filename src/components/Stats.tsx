"use client";

import { useEffect, useState, useRef } from 'react';

interface StatProps {
  value: string;
  label: string;
  icon: string;
  gradient: string;
}

function StatCounter({ value, label, icon, gradient }: StatProps) {
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
    <div ref={countRef} className="card-premium text-center group">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 tabular-nums font-heading">
        {count.toFixed(value.includes('.') ? 1 : 0)}
        {value.includes('+') && <span className="text-aurora-cyan">+</span>}
      </div>
      <div className="text-secondary text-sm">{label}</div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: '4', label: '精美主题', icon: '🎨', gradient: 'from-aurora-purple to-aurora-magenta' },
    { value: '23+', label: 'AI 内置工具', icon: '⚡', gradient: 'from-aurora-cyan to-aurora-blue' },
    { value: '3', label: 'AI 工作模式', icon: '🤖', gradient: 'from-aurora-magenta to-aurora-purple' },
    { value: '6+', label: 'LLM 提供商', icon: '🌐', gradient: 'from-aurora-blue to-aurora-cyan' },
  ];

  return (
    <section id="stats" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-elevated to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse" />
            <span className="text-sm font-medium text-secondary">核心数据</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            专业级开发体验
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            从代码生成到文件操作，全流程自动化支持
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
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
