import { DemoFormData, FormErrors } from '@/types';

/**
 * Format phone number as (XXX) XXX-XXXX
 */
export function formatPhoneNumber(value: string): string {
  // Remove all non-digit characters
  const cleaned = value.replace(/\D/g, '');

  // Limit to 10 digits
  const limited = cleaned.slice(0, 10);

  // Format based on length
  if (limited.length <= 3) {
    return limited;
  } else if (limited.length <= 6) {
    return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
  } else {
    return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  }
}

/**
 * Clean phone number (remove all non-digit characters)
 */
export function cleanPhoneNumber(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Validate email using regex
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (must be 10 digits)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = cleanPhoneNumber(phone);
  return cleaned.length === 10;
}

/**
 * Validate demo form data
 */
export function validateDemoForm(
  name: string,
  phoneNumber: string,
  email: string
): FormErrors {
  const errors: FormErrors = {};

  // Validate name
  if (!name.trim()) {
    errors.name = 'Name is required';
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Validate phone number
  if (!phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!isValidPhone(phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid 10-digit phone number';
  }

  // Validate email
  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  return errors;
}
