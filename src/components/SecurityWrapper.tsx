
import React, { useEffect } from 'react';
import { SECURITY_CONFIG } from '@/utils/securityConfig';

interface SecurityWrapperProps {
  children: React.ReactNode;
}

const SecurityWrapper: React.FC<SecurityWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Apply security headers (client-side enforcement)
    const applySecurityHeaders = () => {
      // Content Security Policy
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = SECURITY_CONFIG.SECURITY_HEADERS['Content-Security-Policy'];
      document.head.appendChild(meta);
      
      // X-Frame-Options (prevent clickjacking)
      const frameMeta = document.createElement('meta');
      frameMeta.httpEquiv = 'X-Frame-Options';
      frameMeta.content = 'DENY';
      document.head.appendChild(frameMeta);
    };

    // HTTPS enforcement
    const enforceHTTPS = () => {
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
      }
    };

    // Session timeout handling
    let idleTimer: NodeJS.Timeout;
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        // Auto-logout on idle
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/admin/login';
      }, SECURITY_CONFIG.IDLE_TIMEOUT);
    };

    // Activity monitoring
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    activityEvents.forEach(event => {
      document.addEventListener(event, resetIdleTimer, true);
    });

    // Initialize security measures
    applySecurityHeaders();
    enforceHTTPS();
    resetIdleTimer();

    // Cleanup
    return () => {
      clearTimeout(idleTimer);
      activityEvents.forEach(event => {
        document.removeEventListener(event, resetIdleTimer, true);
      });
    };
  }, []);

  return <>{children}</>;
};

export default SecurityWrapper;
