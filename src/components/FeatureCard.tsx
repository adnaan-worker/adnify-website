"use client";

import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

export default function FeatureCard({ icon, title, description, gradient, borderColor }: FeatureCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/5 hover:shadow-xl hover:shadow-black/20">
      <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${borderColor} blur-xl -z-10`} />
    </div>
  );
}
