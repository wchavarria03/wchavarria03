// Simple error tracking utility
interface ErrorEvent {
  type: string;
  message: string;
  timestamp: number;
  details?: any;
}

const MAX_ERRORS = 100;
const errors: ErrorEvent[] = [];

export const errorTracking = {
  track(type: string, message: string, details?: any) {
    const error: ErrorEvent = {
      type,
      message,
      timestamp: Date.now(),
      details
    };

    // Add error to array
    errors.push(error);

    // Keep only last MAX_ERRORS
    if (errors.length > MAX_ERRORS) {
      errors.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${type}]`, message, details);
    }

    // In production, you would send this to your error tracking service
    // Example: sendToErrorTracking(error);
  },

  getErrors() {
    return [...errors];
  },

  clearErrors() {
    errors.length = 0;
  }
}; 