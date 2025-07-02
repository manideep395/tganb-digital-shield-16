
import React, { useEffect } from 'react';
import { SECURITY_CONFIG, logSecurityEvent } from '@/utils/securityConfig';

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
      
      // X-Content-Type-Options
      const noSniffMeta = document.createElement('meta');
      noSniffMeta.httpEquiv = 'X-Content-Type-Options';
      noSniffMeta.content = 'nosniff';
      document.head.appendChild(noSniffMeta);
    };

    // HTTPS enforcement
    const enforceHTTPS = () => {
      if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        logSecurityEvent('HTTPS_REDIRECT', { originalProtocol: location.protocol });
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
      }
    };

    // Session timeout handling
    let idleTimer: NodeJS.Timeout;
    let sessionTimer: NodeJS.Timeout;
    
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      clearTimeout(sessionTimer);
      
      // Idle timeout (15 minutes of inactivity)
      idleTimer = setTimeout(() => {
        logSecurityEvent('SESSION_IDLE_TIMEOUT');
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/admin/login';
      }, SECURITY_CONFIG.IDLE_TIMEOUT);
      
      // Absolute session timeout (30 minutes)
      sessionTimer = setTimeout(() => {
        logSecurityEvent('SESSION_ABSOLUTE_TIMEOUT');
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/admin/login';
      }, SECURITY_CONFIG.SESSION_TIMEOUT);
    };

    // Activity monitoring
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    activityEvents.forEach(event => {
      document.addEventListener(event, resetIdleTimer, true);
    });

    // Security event monitoring
    const monitorSecurityEvents = () => {
      // Monitor for console access attempts
      let devtoolsOpen = false;
      const threshold = 160;
      
      const checkDevTools = () => {
        if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
          if (!devtoolsOpen) {
            devtoolsOpen = true;
            logSecurityEvent('DEVTOOLS_OPENED');
          }
        } else {
          devtoolsOpen = false;
        }
      };
      
      setInterval(checkDevTools, 500);
      
      // Monitor for suspicious activities
      let rightClickCount = 0;
      document.addEventListener('contextmenu', (e) => {
        rightClickCount++;
        if (rightClickCount > 5) {
          logSecurityEvent('EXCESSIVE_RIGHT_CLICKS', { count: rightClickCount });
        }
      });
      
      // Reset right click count every minute
      setInterval(() => {
        rightClickCount = 0;
      }, 60000);
    };

    // Initialize security measures
    applySecurityHeaders();
    enforceHTTPS();
    resetIdleTimer();
    monitorSecurityEvents();
    
    // Log application start
    logSecurityEvent('APPLICATION_START', {
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });

    // Cleanup
    return () => {
      clearTimeout(idleTimer);
      clearTimeout(sessionTimer);
      activityEvents.forEach(event => {
        document.removeEventListener(event, resetIdleTimer, true);
      });
    };
  }, []);

  return <>{children}</>;
};

export default SecurityWrapper;
