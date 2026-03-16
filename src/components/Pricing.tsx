"use client";

import { useState } from 'react';
import { Check, Download, Github } from 'lucide-react';
import licenseData from '@/data/license.json';

export default function Pricing() {
  const { title, licenses, details, faq } = licenseData;
  const [licenseType, setLicenseType] = useState<'personal' | 'commercial'>('personal');

  return (
    <section id="pricing" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-elevated via-background to-background-elevated" />
        <div 
          className="aurora-orb aurora-orb-magenta"
          style={{
            width: '600px',
            height: '600px',
            top: '20%',
            left: '-10%',
            animationDelay: '-4s'
          }}
        />
        <div 
          className="aurora-orb aurora-orb-purple"
          style={{
            width: '500px',
            height: '500px',
            bottom: '10%',
            right: '-5%',
            animationDelay: '-9s'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-aurora-magenta animate-pulse" />
            <span className="text-sm font-medium text-secondary">{title.label}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            {title.heading}
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto mb-10">
            {title.description}
          </p>

          {/* License Type Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-2xl glass">
            <button
              onClick={() => setLicenseType('personal')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                licenseType === 'personal'
                  ? 'bg-white text-black'
                  : 'text-secondary hover:text-white'
              }`}
            >
              <LicenseIcon name="code2" />
              个人使用
            </button>
            <button
              onClick={() => setLicenseType('commercial')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                licenseType === 'commercial'
                  ? 'bg-white text-black'
                  : 'text-secondary hover:text-white'
              }`}
            >
              <LicenseIcon name="wrench" />
              商业使用
            </button>
          </div>
        </div>

        {/* License Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {licenses.map((license, index) => (
            <div
              key={index}
              className={`card-premium relative ${
                license.highlighted ? 'border-glow' : ''
              }`}
            >
              {/* Featured Badge */}
              {license.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-aurora-cyan to-aurora-purple rounded-full text-xs font-semibold text-white shadow-lg">
                  推荐
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${license.color} flex items-center justify-center mb-6`}>
                <LicenseIcon name={license.icon} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">{license.name}</h3>
              <p className="text-secondary mb-6">{license.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-white font-heading">{license.price}</span>
                <span className="ml-2 px-3 py-1 rounded-full bg-surface-tertiary text-sm text-aurora-cyan">
                  {license.priceBadge}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {license.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-purple flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={license.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  license.highlighted
                    ? 'bg-gradient-to-r from-aurora-cyan to-aurora-purple text-black hover:shadow-lg hover:shadow-aurora-cyan/30'
                    : 'glass text-white hover:bg-surface-tertiary'
                }`}
              >
                {license.highlighted ? <Download className="w-5 h-5" /> : <Github className="w-5 h-5" />}
                {license.cta}
              </a>
            </div>
          ))}
        </div>

        {/* License Details */}
        <div className="glass-elevated rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            {details[licenseType].title}
          </h3>
          <p className="text-secondary mb-6">{details[licenseType].description}</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {details[licenseType].items.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-surface-primary hover:bg-surface-secondary transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-secondary">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-heading">常见问题</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <div key={index} className="card-premium">
                <h4 className="text-lg font-semibold text-white mb-2">{item.question}</h4>
                <p className="text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LicenseIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    code2: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    wrench: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  };
  
  return icons[name] || icons.code2;
}
