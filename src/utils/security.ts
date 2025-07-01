
// Security utility functions for input validation and sanitization

export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocols
    .replace(/vbscript:/gi, '') // Remove vbscript: protocols
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 255;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateText = (text: string, minLength = 1, maxLength = 1000): boolean => {
  return text.length >= minLength && text.length <= maxLength;
};

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type.toLowerCase());
};

export const validateFileSize = (file: File, maxSizeInBytes: number): boolean => {
  return file.size <= maxSizeInBytes;
};

export const generateSecureId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
};

export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

export const sanitizeUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return '';
    }
    return urlObj.toString();
  } catch {
    return '';
  }
};

export const rateLimiter = (() => {
  const attempts = new Map<string, { count: number; resetTime: number }>();
  
  return {
    isAllowed: (key: string, maxAttempts = 5, windowMs = 15 * 60 * 1000): boolean => {
      const now = Date.now();
      const userAttempts = attempts.get(key);
      
      if (!userAttempts || now > userAttempts.resetTime) {
        attempts.set(key, { count: 1, resetTime: now + windowMs });
        return true;
      }
      
      if (userAttempts.count >= maxAttempts) {
        return false;
      }
      
      userAttempts.count++;
      return true;
    },
    
    reset: (key: string): void => {
      attempts.delete(key);
    }
  };
})();
