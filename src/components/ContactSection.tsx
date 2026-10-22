import React, { useState } from 'react';

const TARGET_EMAIL = 'zafundraiser007@gmail.com';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    senderEmail: '',
    stage: 'Pre-launch / Preparing',
    service: 'Community campaigns & raids',
    handle: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateBriefText = () => {
    return `Hi @Senor_Izyche, here is our project brief:
• Project: ${formData.projectName || 'Not specified'}
• Sender Email: ${formData.senderEmail || 'Not specified'}
• Stage: ${formData.stage}
• Scope of Interest: ${formData.service}
• Contact Handle: ${formData.handle || 'Not specified'}
• Details: ${formData.message || 'Looking forward to discussing Web3 growth strategy.'}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Project Brief: ${formData.projectName || 'Web3 Inquiry'}`,
          'Project Name': formData.projectName,
          'Sender Email': formData.senderEmail,
          'Contact Handle': formData.handle || 'Not specified',
          'Service Needed': formData.service,
          'Stage': formData.stage,
          'Message / Details': formData.message || 'No additional details provided.',
          _replyto: formData.senderEmail,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to submit form. Please try Telegram or email directly.');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setStatus('error');
      setErrorMessage('Network connection error. You can still reach us via Telegram or direct email.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      projectName: '',
      senderEmail: '',
      stage: 'Pre-launch / Preparing',
      service: 'Community campaigns & raids',
      handle: '',
      message: '',
    });
  };

  const handlePrepareTelegram = (e: React.MouseEvent) => {
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
              The next chapter
            </span>

            <h2 className="text-section-title text-[#F0EEE7] mb-6">
              What are you building?
            </h2>

            <p className="font-body text-[#B8B6AD] text-lg sm:text-xl leading-relaxed mb-8">
              Tell us where your project stands—and what you want to work on next.
            </p>

            {/* Direct Instant Action */}
            <div className="border border-[#33332F] bg-[#111110] p-6 rounded-[2px] mb-8 space-y-3">
              <a
                href={`mailto:${TARGET_EMAIL}?subject=${encodeURIComponent('Web3 Project Inquiry - The Fundraiser')}`}
                className="btn-primary w-full text-center justify-center text-sm"
              >
                <span>Email {TARGET_EMAIL}</span>
                <span>↗</span>
              </a>
              <a
                href="https://t.me/Senor_Izyche"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center justify-center text-sm"
              >
                <span>Let's talk on Telegram</span>
                <span>↗</span>
              </a>
              <a
                href="https://x.com/IZYCHE_"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center justify-center text-sm"
              >
                <span>Find us on X</span>
                <span>↗</span>
              </a>
            </div>

            {/* Direct Links */}
            <div className="space-y-3 font-mono text-xs text-[#A7A69F]">
              <div className="flex items-center justify-between border-b border-[#222220] pb-2">
                <span>Official Email</span>
                <a href={`mailto:${TARGET_EMAIL}`} className="text-[#F0EEE7] hover:underline">
                  {TARGET_EMAIL} ↗
                </a>
              </div>
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
              <div className="flex items-center justify-between border-b border-[#222220] pb-2">
                <span>Response Time</span>
                <span className="text-[#F0EEE7]">Within 2 to 6 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#33332F] bg-[#111110] p-8 sm:p-10 rounded-[2px]">
              
              <div className="border-b border-[#33332F] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#F0EEE7] mb-1">
                    Start with a short brief.
                  </h3>
                  <p className="text-xs font-mono text-[#A7A69F]">
                    Direct dispatch to <span className="text-[#F0EEE7]">{TARGET_EMAIL}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#1a1a18] border border-[#33332F] text-[11px] font-mono text-[#A7A69F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Inbound
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-8 space-y-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl font-mono">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl uppercase tracking-tight text-[#F0EEE7] mb-2">
                      Brief Transmitted Successfully
                    </h4>
                    <p className="font-body text-[#B8B6AD] text-sm max-w-md mx-auto leading-relaxed">
                      Your project brief has been delivered directly to <span className="text-[#F0EEE7] font-mono">{TARGET_EMAIL}</span>. We will review your scope and follow up directly via email or your provided contact handle.
                    </p>
                  </div>

                  <div className="p-4 rounded-[2px] bg-[#0A0A09] border border-[#33332F] text-left max-w-md mx-auto text-xs font-mono text-[#A7A69F] space-y-1">
                    <div className="text-[#F0EEE7] font-bold mb-1">Transmission Receipt:</div>
                    <div>• Project: {formData.projectName || 'Web3 Project'}</div>
                    {formData.senderEmail && <div>• Email: {formData.senderEmail}</div>}
                    {formData.handle && <div>• Contact: {formData.handle}</div>}
                    <div>• Scope: {formData.service}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-secondary text-xs"
                    >
                      <span>Send another brief</span>
                      <span>↺</span>
                    </button>
                    <a
                      href="https://t.me/Senor_Izyche"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs"
                    >
                      <span>Ping on Telegram as well</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Field 1: Project Name */}
                  <div>
                    <label htmlFor="projectName" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                      Project name *
                    </label>
                    <input
                      id="projectName"
                      name="projectName"
                      type="text"
                      required
                      placeholder="e.g. Clover Boys, DeFi Protocol, Meme token"
                      value={formData.projectName}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                    />
                  </div>

                  {/* Field 2: Sender Email & Contact Handle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="senderEmail" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                        Your email *
                      </label>
                      <input
                        id="senderEmail"
                        name="senderEmail"
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.senderEmail}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="handle" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                        Telegram / X handle
                      </label>
                      <input
                        id="handle"
                        name="handle"
                        type="text"
                        placeholder="@username or t.me/..."
                        value={formData.handle}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 3: Service & Stage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                        Service Scope
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                      >
                        <option value="Community campaigns & raids">Community campaigns & raids</option>
                        <option value="Community building & moderation">Community building & moderation</option>
                        <option value="Ambassador representation">Ambassador representation</option>
                        <option value="X Spaces & live conversations">X Spaces & live conversations</option>
                        <option value="Trending & scanner campaigns">Trending & scanner campaigns</option>
                        <option value="Full campaign scope">Full campaign scope</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="stage" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                        Project Stage
                      </label>
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors"
                      >
                        <option value="Pre-launch / Preparing">Pre-launch / Preparing</option>
                        <option value="Just Launched (< 14 days)">Just Launched (&lt; 14 days)</option>
                        <option value="Established / Scaling">Established / Scaling</option>
                        <option value="Revival / Pivot">Revival / Pivot</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 4: Details / Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-[#A7A69F] mb-2">
                      Project details & timeline
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Where are you now? What do you need? What are your key milestones?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A09] border border-[#33332F] focus:border-[#F0EEE7] text-[#F0EEE7] px-4 py-3 text-sm rounded-[2px] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-4 rounded-[2px] bg-red-950/40 border border-red-800/60 text-red-200 text-xs font-mono flex items-start justify-between gap-3">
                      <div>
                        <div className="font-bold text-red-300 mb-1">Transmission Alert</div>
                        <div>{errorMessage}</div>
                      </div>
                      <a
                        href={`mailto:${TARGET_EMAIL}?subject=Brief for ${encodeURIComponent(formData.projectName || 'Project')}&body=${encodeURIComponent(generateBriefText())}`}
                        className="underline text-red-100 hover:text-white shrink-0"
                      >
                        Open Email Draft ↗
                      </a>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full sm:w-auto text-sm justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-[#000000] border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send brief to {TARGET_EMAIL}</span>
                          <span>↗</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handlePrepareTelegram}
                      className="btn-secondary w-full sm:w-auto text-xs justify-center"
                    >
                      <span>Or prepare Telegram brief</span>
                      <span>↗</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="btn-secondary w-full sm:w-auto text-xs justify-center"
                    >
                      {copied ? 'Copied ✓' : 'Copy text'}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-[#A7A69F] pt-2">
                    Submissions are routed directly to <span className="text-[#F0EEE7]">{TARGET_EMAIL}</span> with encrypted TLS delivery.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

