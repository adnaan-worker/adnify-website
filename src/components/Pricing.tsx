"use client";

import { useState } from 'react';
import { Check, Download, Github } from 'lucide-react';
import licenseData from '@/data/license.json';

export default function Pricing() {
  const { title, licenses, details, faq } = licenseData;
  const [licenseType, setLicenseType] = useState<'personal' | 'commercial'>('personal');

  return (
    <section id="pricing" className="py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 mb-4 block animate-fade-in">{title.label}</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight animate-fade-in-up">
            {title.heading}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {title.description}
          </p>

          {/* License type toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-white/5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <button
              onClick={() => setLicenseType('personal')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                licenseType === 'personal'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LicenseIcon name="code2" />
              个人使用
            </button>
            <button
              onClick={() => setLicenseType('commercial')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                licenseType === 'commercial'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LicenseIcon name="wrench" />
              商业使用
            </button>
          </div>
        </div>

        {/* License cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {licenses.map((license, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 animate-fade-in-up ${
                license.highlighted
                  ? 'bg-white/10 border-2 border-white/20 hover:bg-white/15'
                  : 'bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Featured badge */}
              {license.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-medium text-white shadow-lg">
                  推荐
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${license.color} flex items-center justify-center`}>
                    <LicenseIcon name={license.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{license.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{license.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-semibold text-white">{license.price}</span>
                <span className="ml-2 px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300">
                  {license.priceBadge}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {license.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={license.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-medium text-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  license.highlighted
                    ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {license.highlighted ? <Download className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                {license.cta}
              </a>
            </div>
          ))}
        </div>

        {/* License details */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {details[licenseType].title}
              </h3>
              <p className="text-gray-400 mb-6">{details[licenseType].description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {details[licenseType].items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-semibold text-white mb-6">常见问题</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-lg font-medium text-white mb-2">{item.question}</h4>
                <p className="text-gray-400 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// License icon helper
function LicenseIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    code2: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    wrench: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  };
  
  return icons[name] || icons.code2;
}
