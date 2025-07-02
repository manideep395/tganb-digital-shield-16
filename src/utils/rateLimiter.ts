
// Enhanced rate limiting for government security compliance
interface RateLimitEntry {
  count: number;
  resetTime: number;
  blocked: boolean;
  lastAttempt: number;
}

class EnhancedRateLimiter {
  private limits: Map<string, RateLimitEntry> = new Map();
  private maxRequests: number;
  private windowMs: number;
  private blockDuration: number;

  constructor(maxRequests: number = 5, windowMs: number = 900000, blockDuration: number = 900000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs; // 15 minutes default
    this.blockDuration = blockDuration; // 15 minutes block duration
  }

  isAllowed(identifier: string): { allowed: boolean; remainingAttempts: number; blockTimeRemaining: number } {
    const now = Date.now();
    const entry = this.limits.get(identifier);

    if (!entry || now > entry.resetTime) {
      // Reset or create new entry
      this.limits.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
        blocked: false,
        lastAttempt: now
      });
      return { 
        allowed: true, 
        remainingAttempts: this.maxRequests - 1,
        blockTimeRemaining: 0
      };
    }

    // Check if still blocked
    if (entry.blocked && now < entry.lastAttempt + this.blockDuration) {
      const blockTimeRemaining = Math.ceil((entry.lastAttempt + this.blockDuration - now) / 60000);
      return { 
        allowed: false, 
        remainingAttempts: 0,
        blockTimeRemaining
      };
    }

    // Unblock if block duration has passed
    if (entry.blocked && now >= entry.lastAttempt + this.blockDuration) {
      entry.blocked = false;
      entry.count = 1;
      entry.resetTime = now + this.windowMs;
      entry.lastAttempt = now;
      return { 
        allowed: true, 
        remainingAttempts: this.maxRequests - 1,
        blockTimeRemaining: 0
      };
    }

    // Check if limit exceeded
    if (entry.count >= this.maxRequests) {
      entry.blocked = true;
      entry.lastAttempt = now;
      const blockTimeRemaining = Math.ceil(this.blockDuration / 60000);
      return { 
        allowed: false, 
        remainingAttempts: 0,
        blockTimeRemaining
      };
    }

    // Increment count
    entry.count++;
    entry.lastAttempt = now;
    return { 
      allowed: true, 
      remainingAttempts: this.maxRequests - entry.count,
      blockTimeRemaining: 0
    };
  }

  getRemainingAttempts(identifier: string): number {
    const entry = this.limits.get(identifier);
    if (!entry || Date.now() > entry.resetTime) {
      return this.maxRequests;
    }
    return Math.max(0, this.maxRequests - entry.count);
  }

  getResetTime(identifier: string): number {
    const entry = this.limits.get(identifier);
    if (!entry || Date.now() > entry.resetTime) {
      return 0;
    }
    return entry.resetTime;
  }

  // Clear all entries (admin function)
  clearAll(): void {
    this.limits.clear();
  }

  // Get current status for monitoring
  getStatus(): { total: number; blocked: number; active: number } {
    const now = Date.now();
    let blocked = 0;
    let active = 0;

    for (const entry of this.limits.values()) {
      if (now <= entry.resetTime) {
        active++;
        if (entry.blocked) {
          blocked++;
        }
      }
    }

    return {
      total: this.limits.size,
      blocked,
      active
    };
  }
}

// Export configured rate limiters for different use cases
export const loginLimiter = new EnhancedRateLimiter(3, 900000, 900000); // 3 attempts per 15 minutes, 15 min block
export const formSubmissionLimiter = new EnhancedRateLimiter(5, 300000, 600000); // 5 requests per 5 minutes, 10 min block
export const apiLimiter = new EnhancedRateLimiter(20, 60000, 300000); // 20 requests per minute, 5 min block
export const adminActionLimiter = new EnhancedRateLimiter(10, 60000, 180000); // 10 actions per minute, 3 min block

// Export the class for custom configurations
export { EnhancedRateLimiter };
