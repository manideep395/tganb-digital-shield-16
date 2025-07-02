// Enhanced security configuration for government compliance
export const SECURITY_CONFIG = {
  // Password policy
  PASSWORD_MIN_LENGTH: 12,
  PASSWORD_REQUIRE_UPPERCASE: true,
  PASSWORD_REQUIRE_LOWERCASE: true,
  PASSWORD_REQUIRE_NUMBERS: true,
  PASSWORD_REQUIRE_SYMBOLS: true,
  
  // Session management
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  IDLE_TIMEOUT: 15 * 60 * 1000, // 15 minutes
  
  // Rate limiting
  MAX_LOGIN_ATTEMPTS: 3,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
  
  // Security headers
  SECURITY_HEADERS: {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co wss://*.supabase.co;"
  },

  // File upload restrictions
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'],
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  
  // Input validation
  MAX_INPUT_LENGTH: 1000,
  MAX_TEXTAREA_LENGTH: 5000,
  
  // Audit logging
  ENABLE_AUDIT_LOGGING: true,
  LOG_FAILED_ATTEMPTS: true,
  LOG_SUCCESSFUL_LOGINS: true
};

// CSRF Token generation with crypto API
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Enhanced input sanitization
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters
    .trim()
    .slice(0, SECURITY_CONFIG.MAX_INPUT_LENGTH);
};

// Validate file uploads with enhanced security
export const validateFileUpload = (file: File): { valid: boolean; error?: string } => {
  if (!SECURITY_CONFIG.ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: 'File type not allowed' };
  }
  
  if (file.size > SECURITY_CONFIG.MAX_FILE_SIZE) {
    return { valid: false, error: 'File size exceeds limit (5MB)' };
  }
  
  // Check for potential malicious file names
  if (/[<>:"|?*\\\/]/.test(file.name)) {
    return { valid: false, error: 'Invalid file name' };
  }
  
  return { valid: true };
};

// Session validation with enhanced security
export const validateSession = (session: any): boolean => {
  if (!session || !session.expires_at) return false;
  
  const now = Math.floor(Date.now() / 1000);
  const timeUntilExpiry = session.expires_at - now;
  
  // Session expires in less than 5 minutes, consider it invalid
  return timeUntilExpiry > 300;
};

// Password strength validation
export const validatePasswordStrength = (password: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < SECURITY_CONFIG.PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${SECURITY_CONFIG.PASSWORD_MIN_LENGTH} characters long`);
  }
  
  if (SECURITY_CONFIG.PASSWORD_REQUIRE_UPPERCASE && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (SECURITY_CONFIG.PASSWORD_REQUIRE_LOWERCASE && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (SECURITY_CONFIG.PASSWORD_REQUIRE_NUMBERS && !/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (SECURITY_CONFIG.PASSWORD_REQUIRE_SYMBOLS && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Audit logging function
export const logSecurityEvent = async (event: string, details: any = {}) => {
  if (!SECURITY_CONFIG.ENABLE_AUDIT_LOGGING) return;
  
  const logEntry = {
    timestamp: new Date().toISOString(),
    event,
    details,
    userAgent: navigator.userAgent,
    url: window.location.href
  };
  
  console.log('Security Event:', logEntry);
  
  // In production, this would send to a secure audit log service
  try {
    // Store in localStorage for now (in production, use secure backend)
    const logs = JSON.parse(localStorage.getItem('securityLogs') || '[]');
    logs.push(logEntry);
    
    // Keep only last 100 logs to prevent storage overflow
    if (logs.length > 100) {
      logs.splice(0, logs.length - 100);
    }
    
    localStorage.setItem('securityLogs', JSON.stringify(logs));
  } catch (error) {
    console.error('Failed to log security event:', error);
  }
};
