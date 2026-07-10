'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FormInput from '@/components/demo/FormInput';
import SubmitButton from '@/components/demo/SubmitButton';
import { buttonHover, buttonTap, scaleIn } from '@/lib/animations';
import { API_CONFIG, AGENTS } from '@/lib/constants';
import { cleanPhoneNumber, formatPhoneNumber, validateDemoForm } from '@/lib/utils';
import { AgentId, DemoFormData, FormErrors, FormStatus } from '@/types';

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9" />
      <path d="M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" />
      <path d="M3 12h18" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4v4a7 7 0 0014 0V4" />
      <path d="M12 15v2" />
      <circle cx="12" cy="19" r="2" />
      <circle cx="5" cy="4" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AgentIcon({
  iconKey,
  className,
}: {
  iconKey: (typeof AGENTS)[number]['iconKey'];
  className?: string;
}) {
  if (iconKey === 'home') return <HomeIcon className={className} />;
  if (iconKey === 'globe') return <GlobeIcon className={className} />;
  if (iconKey === 'stethoscope') return <StethoscopeIcon className={className} />;
  return <WrenchIcon className={className} />;
}

function CheckBadge() {
  return (
    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 shadow-md">
      <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function AgentCard({
  agent,
  isSelected,
  onClick,
}: {
  agent: (typeof AGENTS)[number];
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={isSelected ? {} : buttonHover}
      whileTap={buttonTap}
      className={`relative w-full rounded-2xl border-2 p-5 text-left shadow-md transition-colors duration-200 ${
        isSelected
          ? 'border-green-800 bg-green-50'
          : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-lg'
      }`}
    >
      {isSelected && <CheckBadge />}
      <AgentIcon
        iconKey={agent.iconKey}
        className={`mb-3 h-10 w-10 ${isSelected ? 'text-green-800' : 'text-gray-500'}`}
      />
      <p className={`text-sm font-semibold leading-tight ${isSelected ? 'text-green-900' : 'text-gray-800'}`}>
        {agent.name}
      </p>
      <p className={`mt-1 text-xs ${isSelected ? 'text-green-700' : 'text-gray-500'}`}>
        {agent.tagline}
      </p>
    </motion.button>
  );
}

function SuccessPanel({ phoneNumber }: { phoneNumber: string }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-2xl rounded-3xl bg-white px-8 py-12 text-center shadow-xl md:px-12"
    >
      <div className="mb-6 flex justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h2 className="mb-4 text-3xl font-bold text-gray-900">Demo call requested</h2>
      <p className="mb-2 text-lg text-gray-600">
        You will receive a call from the selected AI agent within 2 minutes at
      </p>
      <p className="text-2xl font-semibold text-green-800">
        {formatPhoneNumber(phoneNumber)}
      </p>
    </motion.div>
  );
}

export default function DigitalyAyeDemoForm() {
  const [selectedAgentId, setSelectedAgentId] = useState<AgentId>('real-estate');
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedAgent = AGENTS.find((agent) => agent.id === selectedAgentId)!;

  const handleAgentSelect = (id: AgentId) => {
    setSelectedAgentId(id);
    setStatus('idle');
    setErrorMessage('');
    setErrors({});
  };

  const handleInputChange = (field: keyof DemoFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      field === 'phoneNumber'
        ? formatPhoneNumber(event.target.value)
        : event.target.value;

    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[field];
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors = validateDemoForm(
      formData.name,
      formData.phoneNumber,
      formData.email
    );

    if (Object.keys(validationErrors).length > 0) {
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
        response = await fetch(selectedAgent.webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
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

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');

      if (error instanceof Error) {
        if (error.name === 'AbortError' || error.name === 'TimeoutError') {
          setErrorMessage('Request timed out. Please check your connection and try again.');
        } else if (error.message.includes('Failed to fetch')) {
          setErrorMessage('Network error. Please check your internet connection and try again.');
        } else {
          setErrorMessage(error.message || 'An error occurred. Please try again.');
        }
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  if (status === 'success') {
    return <SuccessPanel phoneNumber={formData.phoneNumber} />;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-gray-500">
          Choose your agent
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {AGENTS.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              isSelected={selectedAgentId === agent.id}
              onClick={() => handleAgentSelect(agent.id)}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAgentId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
                Talk to {selectedAgent.name}
              </h2>
              <p className="mb-8 text-center text-gray-600">
                {selectedAgent.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="space-y-6">
            <FormInput
              label="Your Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange('name')}
              error={errors.name}
              placeholder="John Doe"
            />
            <FormInput
              label="Phone Number"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange('phoneNumber')}
              error={errors.phoneNumber}
              placeholder="(555) 123-4567"
            />
            <FormInput
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={errors.email}
              placeholder="john@example.com"
            />

            {status === 'error' && errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}

            <SubmitButton isSubmitting={status === 'submitting'} />
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            By submitting this form, you agree to receive a demo call from the
            selected AI voice agent. Your information will not be shared with
            third parties.
          </p>
        </div>
      </form>
    </div>
  );
}
