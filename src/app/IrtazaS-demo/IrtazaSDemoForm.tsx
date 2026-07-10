'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { API_CONFIG, AGENTS } from '@/lib/constants';
import { cleanPhoneNumber, formatPhoneNumber, validateDemoForm } from '@/lib/utils';
import { AgentId, DemoFormData, FormErrors, FormStatus } from '@/types';

const LAB_AGENTS = [
  {
    id: 'real-estate' as const,
    name: 'Mira',
    role: 'Opportunity Scout',
    description: 'Mira turns property curiosity into a clear next step, qualifying intent and arranging the right conversation.',
    cue: 'Try asking about an investment opportunity',
    icon: 'M',
    gradient: 'from-violet-500 to-fuchsia-400',
    glow: 'rgba(192, 132, 252, 0.34)',
  },
  {
    id: 'tourbot' as const,
    name: 'Atlas',
    role: 'Experience Curator',
    description: 'Atlas makes trip planning feel effortless, answering questions and guiding guests toward memorable experiences.',
    cue: 'Try planning a last-minute city escape',
    icon: 'A',
    gradient: 'from-cyan-400 to-blue-500',
    glow: 'rgba(34, 211, 238, 0.3)',
  },
  {
    id: 'medibook' as const,
    name: 'Nyla',
    role: 'Care Coordinator',
    description: 'Nyla brings calm and clarity to patient calls, helping with scheduling and everyday practice questions.',
    cue: 'Try rescheduling an appointment',
    icon: 'N',
    gradient: 'from-rose-400 to-orange-400',
    glow: 'rgba(251, 113, 133, 0.3)',
  },
  {
    id: 'hvac' as const,
    name: 'Orion',
    role: 'Response Navigator',
    description: 'Orion quickly understands service issues, prioritizes urgent situations, and gets the right help moving.',
    cue: 'Try reporting an after-hours breakdown',
    icon: 'O',
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52, 211, 153, 0.3)',
  },
] as const;

function Waveform({ active = false }: { active?: boolean }) {
  return (
    <div className="flex h-5 items-center gap-[3px]" aria-hidden="true">
      {[35, 70, 48, 92, 58, 80, 38].map((height, index) => (
        <span
          key={index}
          className={`w-[2px] rounded-full bg-current ${active ? 'digitalyaye-wave' : ''}`}
          style={{ height: `${height}%`, animationDelay: `${index * 90}ms` }}
        />
      ))}
    </div>
  );
}

function Field({ label, type, value, placeholder, error, onChange }: {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-100/50">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full rounded-2xl border bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:bg-white/[0.07] focus:ring-4 ${
          error ? 'border-rose-400/70 focus:border-rose-400 focus:ring-rose-400/10' : 'border-white/10 focus:border-fuchsia-300/60 focus:ring-fuchsia-400/10'
        }`}
      />
      {error && <span className="mt-1.5 block text-xs text-rose-300">{error}</span>}
    </label>
  );
}

export default function IrtazaSDemoForm() {
  const [selectedAgentId, setSelectedAgentId] = useState<AgentId>('real-estate');
  const [formData, setFormData] = useState<DemoFormData>({ name: '', phoneNumber: '', email: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedAgent = LAB_AGENTS.find((agent) => agent.id === selectedAgentId)!;
  const webhookUrl = AGENTS.find((agent) => agent.id === selectedAgentId)!.webhookUrl;

  const handleAgentSelect = (id: AgentId) => {
    setSelectedAgentId(id);
    setStatus('idle');
    setErrorMessage('');
    setErrors({});
  };

  const handleInputChange = (field: keyof DemoFormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = field === 'phoneNumber' ? formatPhoneNumber(event.target.value) : event.target.value;
    setFormData((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateDemoForm(formData.name, formData.phoneNumber, formData.email);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
      let response: Response;
      try {
        response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name.trim(),
            phoneNumber: cleanPhoneNumber(formData.phoneNumber),
            email: formData.email.trim(),
          }),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      if (error instanceof Error && (error.name === 'AbortError' || error.name === 'TimeoutError')) {
        setErrorMessage('The request took too long. Please check your connection and try again.');
      } else if (error instanceof Error && error.message.includes('Failed to fetch')) {
        setErrorMessage('We could not reach the call system. Please check your connection and try again.');
      } else {
        setErrorMessage(error instanceof Error ? error.message : 'Something unexpected happened. Please try again.');
      }
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-stretch">
      <section className="digitalyaye-panel rounded-[2rem] border border-white/10 p-3 sm:p-5">
        <div className="mb-5 flex items-end justify-between px-2 pt-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-200/70">01 · Choose a voice</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Meet the lab</h2>
          </div>
          <p className="hidden text-xs text-white/35 sm:block">Four original personalities</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {LAB_AGENTS.map((agent, index) => {
            const selected = selectedAgentId === agent.id;
            return (
              <motion.button
                key={agent.id}
                type="button"
                onClick={() => handleAgentSelect(agent.id)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.985 }}
                className={`group relative min-h-52 overflow-hidden rounded-[1.5rem] border p-5 text-left transition-all duration-300 ${
                  selected ? 'border-white/30 bg-white/[0.11]' : 'border-white/[0.07] bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.07]'
                }`}
                style={selected ? { boxShadow: `0 18px 60px ${agent.glow}` } : undefined}
              >
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${agent.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30 ${selected ? '!opacity-40' : ''}`} />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.gradient} text-lg font-bold shadow-lg`}>
                      {agent.icon}
                    </div>
                    <div className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition ${selected ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200' : 'border-white/10 text-white/30'}`}>
                      {selected ? 'On air' : 'Preview'}
                    </div>
                  </div>
                  <div className="mt-auto pt-7">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xl font-semibold">{agent.name}</p>
                        <p className="mt-0.5 text-xs text-white/45">{agent.role}</p>
                      </div>
                      <div className={selected ? 'text-fuchsia-200' : 'text-white/25'}><Waveform active={selected} /></div>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="digitalyaye-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-6 sm:p-8">
        <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${selectedAgent.gradient} opacity-20 blur-3xl transition-all duration-700`} />
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative flex min-h-[560px] flex-col items-center justify-center text-center">
              <div className={`mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${selectedAgent.gradient} shadow-2xl`}>
                <Waveform active />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Connection queued</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">{selectedAgent.name} is calling.</h2>
              <p className="mt-4 max-w-sm leading-7 text-white/55">Keep your phone nearby. Your live conversation should begin within two minutes.</p>
              <p className="mt-5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-mono text-lg text-white/85">{formatPhoneNumber(formData.phoneNumber)}</p>
              <button type="button" onClick={() => setStatus('idle')} className="mt-8 text-sm font-semibold text-fuchsia-200 hover:text-white">Request another call →</button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">02 · Start the call</p>
              <AnimatePresence mode="wait">
                <motion.div key={selectedAgentId} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
                  <div className="mt-5 flex items-center gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedAgent.gradient} text-xl font-bold shadow-xl`}>{selectedAgent.icon}</div>
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight">Talk with {selectedAgent.name}</h2>
                      <p className="text-sm text-white/45">{selectedAgent.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-white/55">{selectedAgent.description}</p>
                  <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-xs text-white/45">
                    <span className="mr-2 text-fuchsia-300">✦</span>{selectedAgent.cue}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="space-y-4">
                <Field label="Your name" type="text" value={formData.name} onChange={handleInputChange('name')} error={errors.name} placeholder="How should we greet you?" />
                <Field label="Phone number" type="tel" value={formData.phoneNumber} onChange={handleInputChange('phoneNumber')} error={errors.phoneNumber} placeholder="(555) 123-4567" />
                <Field label="Email" type="email" value={formData.email} onChange={handleInputChange('email')} error={errors.email} placeholder="you@company.com" />
              </div>

              {status === 'error' && errorMessage && <div className="mt-4 rounded-2xl border border-rose-400/25 bg-rose-400/10 p-3.5 text-sm text-rose-200">{errorMessage}</div>}

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={status !== 'submitting' ? { scale: 1.015 } : undefined}
                whileTap={status !== 'submitting' ? { scale: 0.985 } : undefined}
                className={`digitalyaye-cta mt-6 flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold text-[#10061f] transition ${status === 'submitting' ? 'cursor-wait opacity-70' : ''}`}
              >
                <span>{status === 'submitting' ? 'Opening the line…' : `Call me with ${selectedAgent.name}`}</span>
                <span className={status === 'submitting' ? 'animate-spin' : ''}>{status === 'submitting' ? '◌' : '↗'}</span>
              </motion.button>
              <p className="mt-4 text-center text-[10px] leading-4 text-white/25">By continuing, you agree to receive one AI-powered demo call. Your details stay private.</p>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
