'use client';

import { useState } from 'react';
import { DemoFormData, FormErrors, FormStatus } from '@/types';
import { validateDemoForm, formatPhoneNumber, cleanPhoneNumber } from '@/lib/utils';
import { API_CONFIG } from '@/lib/constants';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';

export default function DemoForm() {
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (field: keyof DemoFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value;

    // Auto-format phone number
    if (field === 'phoneNumber') {
      value = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear field error on change
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

    // Validate form
    const validationErrors = validateDemoForm(
      formData.name,
      formData.phoneNumber,
      formData.email
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit to webhook
    setStatus('submitting');
    setErrorMessage('');

    try {
      const cleanedPhone = cleanPhoneNumber(formData.phoneNumber);

      const response = await fetch(API_CONFIG.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phoneNumber: cleanedPhone,
          email: formData.email.trim(),
        }),
        signal: AbortSignal.timeout(API_CONFIG.timeout),
      });

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

  // Show success message
  if (status === 'success') {
    return <SuccessMessage phoneNumber={formData.phoneNumber} />;
  }

  // Show form
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Try Our AI Voice Agent
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Fill out the form below and receive a live demo call from our AI agent
          within 2 minutes.
        </p>

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
  );
}
