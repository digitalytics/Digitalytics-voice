'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoFormData, FormErrors, FormStatus, AgentId } from '@/types';
import { validateDemoForm, formatPhoneNumber, cleanPhoneNumber } from '@/lib/utils';
import { API_CONFIG, AGENTS } from '@/lib/constants';
import { buttonHover, buttonTap } from '@/lib/animations';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';

// Inline SVG icons
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

function CheckBadge() {
  return (
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shadow-md">
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

interface AgentCardProps {
  agent: typeof AGENTS[number];
  isSelected: boolean;
  onClick: () => void;
}

function AgentCard({ agent, isSelected, onClick }: AgentCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={isSelected ? {} : buttonHover}
      whileTap={buttonTap}
      className={`
        relative w-full text-left p-5 rounded-2xl border-2 transition-colors duration-200 cursor-pointer
        ${isSelected
          ? 'border-green-800 bg-green-50 shadow-md'
          : 'border-gray-200 bg-white hover:border-green-300 shadow-md hover:shadow-lg'
        }
      `}
    >
      {isSelected && <CheckBadge />}
      <div className={`w-10 h-10 mb-3 ${isSelected ? 'text-green-800' : 'text-gray-500'}`}>
        {agent.iconKey === 'home' ? (
          <HomeIcon className="w-full h-full" />
        ) : agent.iconKey === 'globe' ? (
          <GlobeIcon className="w-full h-full" />
        ) : (
          <StethoscopeIcon className="w-full h-full" />
        )}
      </div>
      <p className={`font-semibold text-sm leading-tight ${isSelected ? 'text-green-900' : 'text-gray-800'}`}>
        {agent.name}
      </p>
      <p className={`text-xs mt-1 ${isSelected ? 'text-green-700' : 'text-gray-500'}`}>
        {agent.tagline}
      </p>
    </motion.button>
  );
}

export default function DemoForm() {
  const [selectedAgentId, setSelectedAgentId] = useState<AgentId>('real-estate');
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const selectedAgent = AGENTS.find((a) => a.id === selectedAgentId)!;

  const handleAgentSelect = (id: AgentId) => {
    setSelectedAgentId(id);
    // Reset form state when switching agents
    setStatus('idle');
    setErrorMessage('');
    setErrors({});
  };

  const handleInputChange = (field: keyof DemoFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value;

    if (field === 'phoneNumber') {
      value = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      const cleanedPhone = cleanPhoneNumber(formData.phoneNumber);

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
            phoneNumber: cleanedPhone,
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
          setErrorMessage(
            'Request timed out. Please check your connection and try again.'
          );
        } else if (error.message.includes('Failed to fetch')) {
          setErrorMessage(
            'Network error. Please check your internet connection and try again.'
          );
        } else {
          setErrorMessage(
            error.message || 'An error occurred. Please try again.'
          );
        }
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  if (status === 'success') {
    return <SuccessMessage phoneNumber={formData.phoneNumber} />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Agent selector */}
      <div className="mb-6">
        <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
          Choose Your Agent
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      {/* Form card */}
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAgentId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Talk to {selectedAgent.name}
              </h2>
              <p className="text-gray-600 mb-8 text-center">
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
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errorMessage}</p>
              </div>
            )}

            <SubmitButton isSubmitting={status === 'submitting'} />
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
            By submitting this form, you agree to receive a demo call from our AI
            voice agent. Your information will not be shared with third parties.
          </p>
        </div>
      </form>
    </div>
  );
}
