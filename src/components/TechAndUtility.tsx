import React from 'react';

interface TechTool {
  name: string;
  type: string;
  description: string;
  url: string;
  displayUrl: string;
  techTags: string[];
  status: string;
}

const TOOLS: TechTool[] = [
  {
    name: 'Wojak Meter',
    type: 'Sentiment Alpha Utility',
    description: 'On-chain market emotion & mood tracking tool matching real-time market sentiment with portfolio reality.',
    url: 'http://wojakmeter.com',
    displayUrl: 'wojakmeter.com',
    techTags: ['UTILITY SITE', 'NEXT.JS', 'SENTIMENT API'],
    status: 'ACTIVE UTILITY',
  },
  {
    name: 'Clover Boys Portal',
    type: 'Community & Token Infrastructure',
    description: 'Interactive project web portal, community tokenomics, and launch roadmap terminal.',
    url: 'https://cloverboys.vercel.app',
    displayUrl: 'cloverboys.vercel.app',
    techTags: ['WEB PORTAL', 'VERCEL', 'WEB3 COMMUNITY'],
    status: 'LIVE SITE',
  },
  {
    name: 'Ether Archive Platform',
    type: 'Historical NFT Mint Platform',
    description: 'Smart contract minting infrastructure for 4,088 unique 1/1 historical Ethereum artifacts.',
    url: 'https://etherarchive.xyz',
    displayUrl: 'etherarchive.xyz',
    techTags: ['NFT COLLECTION', 'ETHEREUM', 'SMART CONTRACTS'],
    status: 'OCT 31 MINT',
  },
  {
    name: 'Funpump Launchpad',
    type: 'Launchpad Infrastructure',
    description: 'Advisory and community coordination for next-gen fair launch crypto token incubator.',
    url: 'https://t.me/Senor_Izyche',
    displayUrl: 'Launchpad Terminal',
    techTags: ['LAUNCHPAD', 'DEFI INCUBATOR', 'ADVISORY'],
    status: 'ACTIVE PARTNER',
  },
  {
    name: 'Arc Protocol',
    type: 'Ecosystem Build',
    description: 'Proprietary utility and community toolkit currently in closed development.',
    url: 'https://t.me/Senor_Izyche',
    displayUrl: 'building-arc.dev',
    techTags: ['PROTOCOL', 'INFRASTRUCTURE', 'CONFIDENTIAL'],
    status: 'IN BUILDING',
  },
];

export const TechAndUtility: React.FC = () => {
  return (
    <section id="tech" className="py-20 md:py-28 relative bg-[#04070C] border-y border-[#5589C2]/20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B121D] border border-[#C1E9C2]/40 text-[#C1E9C2] font-mono text-xs uppercase tracking-wider mb-3">
            <span>⚡ PRODUCTS &amp; UTILITIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white headline-shadow mb-3">
            Built, not just boosted.
          </h2>
          <p className="font-body text-[#C5DAF0] text-base leading-relaxed">
            Tools, collections, and launch infrastructure we have built, advised, and scaled across the timeline.
          </p>
        </div>

        {/* Verified Metric Counter Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-[#0B121D] border border-[#5589C2]/30 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#C1E9C2]">12+</div>
            <div className="font-body font-bold text-xs text-[#C5DAF0] uppercase mt-1">Projects Shipped</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0B121D] border border-[#5589C2]/30 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-white">4 Live</div>
            <div className="font-body font-bold text-xs text-[#C5DAF0] uppercase mt-1">Sites Linked</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0B121D] border border-[#5589C2]/30 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#5589C2]">72 Live</div>
            <div className="font-body font-bold text-xs text-[#C5DAF0] uppercase mt-1">Spaces Hosted</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0B121D] border border-[#5589C2]/30 text-center">
            <div className="font-display font-black text-3xl sm:text-4xl text-[#C1E9C2]">100%</div>
            <div className="font-body font-bold text-xs text-[#C5DAF0] uppercase mt-1">Organic Traffic</div>
          </div>
        </div>

        {/* Horizontal Rail of Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className="glass-card cut-corner p-6 rounded-2xl border border-[#5589C2]/30 flex flex-col justify-between group hover:border-[#5589C2] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#5589C2]">
                    {tool.type}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#121C2E] text-[#C1E9C2] font-mono text-[10px] font-bold">
                    {tool.status}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white mb-2 group-hover:text-[#C1E9C2] transition-colors">
                  {tool.name}
                </h3>

                <p className="font-body text-xs text-[#C5DAF0] leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              <div>
                {/* Tech Tag Row with Blue Outlines */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.techTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded border border-[#5589C2]/40 text-[#5589C2] font-body font-bold text-[9px] uppercase tracking-wider bg-black/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Wire Globe Link */}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-bold text-xs text-white group-hover:text-[#C1E9C2] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>{tool.displayUrl} ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
