/**
 * Google Analytics 4 Integration
 *
 * This module handles Google Analytics initialization and tracking.
 * Analytics are only loaded after user consent via the cookie banner.
 */

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID

/**
 * Initialize Google Analytics 4
 * This function is called after user consent is granted
 */
export function initGoogleAnalytics() {
  // Skip if no measurement ID is configured
  if (!GA4_MEASUREMENT_ID) {
    console.warn(
      'Google Analytics: VITE_GA4_MEASUREMENT_ID is not configured. Skipping initialization.',
    )
    return
  }

  // Skip if already loaded
  if (typeof window !== 'undefined' && window.gtag) {
    return
  }

  // Load gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
  document.head.append(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA4_MEASUREMENT_ID, {
    anonymize_ip: true, // Anonymize IP addresses for GDPR compliance
    cookie_flags: 'SameSite=Lax;Secure', // Secure cookie settings
  })
}

/**
 * Track a custom event
 * @param eventName - Name of the event
 * @param eventParams - Optional parameters for the event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>,
) {
  if (!window.gtag) {
    console.warn('Google Analytics: Not initialized. Event not tracked:', {
      eventName,
      eventParams,
    })
    return
  }

  window.gtag('event', eventName, eventParams)
}

/**
 * Track a page view
 * @param path - Page path to track
 */
export function trackPageView(path: string) {
  if (!window.gtag) {
    console.warn(
      'Google Analytics: Not initialized. Page view not tracked:',
      path,
    )
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
  })
}

// Type augmentation for gtag
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void
  }
}
