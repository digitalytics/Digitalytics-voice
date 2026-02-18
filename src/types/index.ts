/**
 * Agent identifier
 */
export type AgentId = 'real-estate' | 'tourbot';

/**
 * Agent icon key
 */
export type AgentIconKey = 'home' | 'globe';

/**
 * Agent configuration
 */
export interface AgentConfig {
  id: AgentId;
  name: string;
  tagline: string;
  description: string;
  iconKey: AgentIconKey;
  webhookUrl: string;
}

/**
 * Demo form data structure
 */
export interface DemoFormData {
  name: string;
  phoneNumber: string;
  email: string;
}

/**
 * Form validation errors
 */
export type FormErrors = Partial<Record<keyof DemoFormData, string>>;

/**
 * Form submission status
 */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Webhook payload structure
 */
export interface WebhookPayload {
  name: string;
  phoneNumber: string;
  email: string;
}
