import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    stage: 'Pre-launch / Preparing',
    service: 'Community campaigns & raids',
    handle: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateBriefText = () => {
    return `Hi @Senor_Izyche, here is our project brief:
• Project: ${formData.projectName || 'Not specified'}
• Stage: ${formData.stage}
• Scope of Interest: ${formData.service}
• Contact Handle: ${formData.handle || 'Not specified'}
• Details: ${formData.message || 'Looking forward to discussing Web3 growth strategy.'}`;
  };

  const handlePrepareTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    const brief = generateBriefText();
    const encoded = encodeURIComponent(brief);
    window.open(`https://t.me/Senor_Izyche?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyBrief = () => {
    const brief = generateBriefText();
    navigator.clipboard.writeText(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 border-b border-[#33332F]">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Outreach */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A69F] block mb-3">
              04 / Your next chapter
            </span>

            <h2 className="text-section-title text-[#F0EEE7] mb-6">
              What are you building?
            </h2>

            <p className="font-body text-[#B8B6AD] text-lg sm:text-xl leading-relaxed mb-8">
              Tell us the project, the stage, and what needs to move.
            </p>

            {/* Direct Instant Action */}
            <div className="border border-[#33332F] bg-[#111110] p-6 rounded-[2px] mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A7A69F] block mb-2">
                Fastest Response
              </span>
              <p className="text-sm text-[#F0EEE7] mb-4">
                Message Senor Izyche directly on Telegram to discuss immediate availability or schedule a voice discussion.
              </p>
              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center justify-center text-sm"
              >
                <span>Message @Senor_Izyche on Telegram</span>
                <span>↗</span>
              </a>
            </div>

            {/* Direct Links */}
            <div className="space-y-3 font-mono text-xs text-[#A7A69F]">
              <div className="flex items-center justify-between border-b border-[#222220] pb-2">
                <span>Personal Telegram</span>
                <a href="https://t.me/Senor_Izyche" target="_blank" rel="noopener noreferrer" className="text-[#F0EEE7] hover:underline">
                  t.me/Senor_Izyche ↗
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-[#222220] pb-2">
                <span>Official X Handle</span>
                <a href="https://x.com/IZYCHE_" target="_blank" rel="noopener noreferrer" className="text-[#F0EEE7] hover:underline">
                  @IZYCHE_ ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#33332F] bg-[#111110] p-8 sm:p-10 rounded-[2px]">
              
              <div className="border-b border-[#33332F] pb-4 mb-6">
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#F0EEE7] mb-1">
                  Send a project brief
                </h3>
                <p className="text-xs text-[#A7A69F]">
                  Fill in your project context. We’ll generate a pre-formatted Telegram draft for your review.
                </p>
              </div>

              <form onSubmit={handlePrepareTelegram} className="space-y-6">
                
                {/* Field 1: Project Name */}
                <div>
                  <label htmlFor="projectName" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                    Project Name or Ticker
                  </label>
                  <input
                    id="projectName"
                    name="projectName"
                    type="text"
                    required
                    placeholder="e.g. Clover Boys / $CLOVR"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                  />
                </div>

                {/* Field 2 & 3: Stage and Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="stage" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                      Current Stage
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      value={formData.stage}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                    >
                      <option value="Pre-launch / Preparing">Pre-launch / Preparing</option>
                      <option value="Recently Launched">Recently Launched</option>
                      <option value="Live Token / Scaling">Live Token / Scaling</option>
                      <option value="Utility / Product Launch">Utility / Product Launch</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                      Primary Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                    >
                      <option value="Community campaigns & raids">Community campaigns & raids</option>
                      <option value="X Spaces & live audio">X Spaces & live audio</option>
                      <option value="Ambassador representation">Ambassador representation</option>
                      <option value="Content & utility positioning">Content & utility positioning</option>
                      <option value="Full campaign scope">Full campaign scope</option>
                    </select>
                  </div>
                </div>

                {/* Field 4: Contact Handle */}
                <div>
                  <label htmlFor="handle" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                    Your Telegram or X Handle
                  </label>
                  <input
                    id="handle"
                    name="handle"
                    type="text"
                    required
                    placeholder="@YourHandle"
                    value={formData.handle}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                  />
                </div>

                {/* Field 5: Details / Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                    Project Context & Objectives
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe what you are launching, what milestones you need to achieve, and your preferred timeline."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto text-sm justify-center"
                  >
                    <span>Prepare Telegram message</span>
                    <span>↗</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="btn-secondary w-full sm:w-auto text-xs justify-center"
                  >
                    {copied ? 'Copied to clipboard ✓' : 'Copy brief text'}
                  </button>
                </div>

                <p className="text-[11px] font-mono text-[#A7A69F] pt-2">
                  * Clicking will open Telegram with your filled brief. You review and send it yourself. No automatic messages are dispatched.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
