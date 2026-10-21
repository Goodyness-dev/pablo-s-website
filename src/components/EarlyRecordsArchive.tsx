import React, { useState } from 'react';
import { HISTORICAL_PNL_ARCHIVE, RETRO_ARCHIVE } from '../data/projects';

export const EarlyRecordsArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'multipliers' | 'genesis'>('multipliers');

  return (
    <section id="archive" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
              {activeTab === 'multipliers' ? 'From the early days' : 'Before the polish'}
            </span>
            <h2 className="text-section-title text-[#F0EEE7] mb-4">
              {activeTab === 'multipliers' ? 'The first calls. The original records.' : 'The early pieces.'}
            </h2>
            <p className="font-body text-[#B8B6AD] text-base sm:text-lg max-w-[620px]">
              {activeTab === 'multipliers'
                ? 'A look back at the channel before Fundraisers Web.'
                : 'First messages, old identities, and the records that trace the journey.'}
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex items-center gap-2 border border-[#33332F] bg-[#111110] p-1 rounded-[2px] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('multipliers')}
              className={`px-4 py-2 text-xs font-mono rounded-[2px] transition-colors ${
                activeTab === 'multipliers'
                  ? 'bg-[#F0EEE7] text-[#000000] font-medium'
                  : 'text-[#B8B6AD] hover:text-[#F0EEE7]'
              }`}
            >
              Early Records ({HISTORICAL_PNL_ARCHIVE.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('genesis')}
              className={`px-4 py-2 text-xs font-mono rounded-[2px] transition-colors ${
                activeTab === 'genesis'
                  ? 'bg-[#F0EEE7] text-[#000000] font-medium'
                  : 'text-[#B8B6AD] hover:text-[#F0EEE7]'
              }`}
            >
              Early Pieces ({RETRO_ARCHIVE.length})
            </button>
          </div>
        </div>

        {/* Multipliers Grid */}
        {activeTab === 'multipliers' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HISTORICAL_PNL_ARCHIVE.map((receipt) => (
                <div
                  key={receipt.id}
                  className="border border-[#33332F] bg-[#111110] p-3 sm:p-5 rounded-[2px] flex flex-col justify-between hover:border-[#77776F] transition-colors"
                >
                  <div>
                    {/* Header: Ticker & Multiplier */}
                    <div className="flex items-start justify-between border-b border-[#33332F] pb-3 mb-4">
                      <div>
                        <span className="font-display font-bold text-2xl uppercase tracking-tight text-[#F0EEE7]">
                          {receipt.ticker}
                        </span>
                        <span className="block font-mono text-[11px] text-[#A7A69F]">
                          {receipt.date}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-display font-bold text-3xl text-[#F0EEE7] tabular-numbers leading-none block">
                          {receipt.multiplier}
                        </span>
                        <span className="font-mono text-[10px] text-[#A7A69F]">
                          {receipt.timeframe}
                        </span>
                      </div>
                    </div>

                    {/* Receipt Image Frame — full width edge-to-edge */}
                    <div className="relative aspect-[16/10] bg-[#080808] border border-[#222220] overflow-hidden mb-3 flex items-center justify-center">
                      <img
                        src={receipt.imageSrc}
                        alt={`${receipt.ticker} PNL Multiple`}
                        className="w-full h-full object-contain filter contrast-105"
                      />
                    </div>

                    <p className="font-body text-xs text-[#B8B6AD] leading-relaxed mb-4">
                      {receipt.caption}
                    </p>
                  </div>

                  {/* Metadata Footer */}
                  <div className="pt-3 border-t border-[#33332F] flex items-center justify-between text-[11px] font-mono text-[#A7A69F]">
                    <span>Called: {receipt.calledAt}</span>
                    <a
                      href="https://t.me/thefundraiserweb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#F0EEE7] transition-colors"
                    >
                      Open original record ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 border border-[#33332F] bg-[#0A0A09] text-xs text-[#A7A69F] font-mono">
              Historical results are not a promise of future returns.
            </div>
          </div>
        )}

        {/* Genesis Artifacts Grid */}
        {activeTab === 'genesis' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RETRO_ARCHIVE.map((artifact) => (
              <div
                key={artifact.id}
                className="border border-[#33332F] bg-[#111110] p-3 sm:p-5 rounded-[2px] flex flex-col justify-between hover:border-[#77776F] transition-colors"
              >
                <div>
                  <div className="border-b border-[#33332F] pb-3 mb-4">
                    <span className="font-mono text-[10px] text-[#A7A69F] uppercase block mb-1">
                      {artifact.date}
                    </span>
                    <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[#F0EEE7]">
                      {artifact.title}
                    </h3>
                  </div>

                  <div className="relative aspect-[4/3] bg-[#080808] border border-[#222220] overflow-hidden mb-3 flex items-center justify-center">
                    <img
                      src={artifact.imageSrc}
                      alt={artifact.alt || artifact.title}
                      className="w-full h-full object-contain filter contrast-105"
                    />
                  </div>

                  <p className="font-body text-xs text-[#B8B6AD] leading-relaxed mb-4">
                    {artifact.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#33332F] flex items-center justify-between text-[11px] font-mono text-[#A7A69F]">
                  <span>{artifact.source}</span>
                  <a
                    href="https://t.me/thefundraiserweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#F0EEE7] transition-colors"
                  >
                    {artifact.title.toLowerCase().includes('message') || artifact.title.toLowerCase().includes('genesis')
                      ? 'View the message ↗'
                      : artifact.title.toLowerCase().includes('art') || artifact.title.toLowerCase().includes('logo') || artifact.title.toLowerCase().includes('mascot')
                      ? 'View the artwork ↗'
                      : 'Open the record ↗'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
