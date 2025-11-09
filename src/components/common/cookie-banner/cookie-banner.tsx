import { useEffect, useState } from 'react'

import { initGoogleAnalytics } from '../../../utils/analytics'
import { Card } from '../card/card'

import styles from './cookie-banner.module.css'

import { Link } from '@/components/common/link/link'

type ConsentStatus = 'pending' | 'accepted' | 'rejected'

const CONSENT_COOKIE_NAME = 'crafity-cookie-consent'
const CONSENT_COOKIE_DURATION = 365 // days

export function CookieBanner() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check for existing consent (SSR-safe)
    const existingConsent = getConsentStatus()
    if (existingConsent) {
      setConsentStatus(existingConsent)
      // If user previously accepted, initialize analytics
      if (existingConsent === 'accepted') {
        initGoogleAnalytics()
      }
    } else {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 500)
    }
  }, [])

  const handleAccept = () => {
    saveConsentStatus('accepted')
    setConsentStatus('accepted')
    setIsVisible(false)
    // Initialize Google Analytics
    initGoogleAnalytics()
  }

  const handleReject = () => {
    saveConsentStatus('rejected')
    setConsentStatus('rejected')
    setIsVisible(false)
  }

  // Don't render if consent already given
  if (consentStatus !== 'pending' || !isVisible) {
    return null
  }

  return (
    <div className={styles.overlay}>
      <Card className={styles.banner} variant="elevated">
        <div className={styles.content}>
          <svg
            className={styles.icon}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="currentColor"
            />
            <circle cx="8" cy="9" fill="currentColor" r="1.5" />
            <circle cx="16" cy="9" fill="currentColor" r="1.5" />
            <circle cx="12" cy="15" fill="currentColor" r="1.5" />
            <circle cx="8" cy="15" fill="currentColor" r="1" />
            <circle cx="16" cy="15" fill="currentColor" r="1" />
          </svg>

          <p className={styles.message}>
            By clicking “Accept All Cookies”, you agree to the storing of
            cookies on your device to support certain functionality, analyze
            trends, administer our websites, track user movements around the
            websites and to gather demographic information about our user base
            as a whole.
          </p>

          <Link className={styles.link} href="/privacy">
            Read our full privacy policy.
          </Link>

          <div className={styles.actions}>
            <button
              className={styles['button-decline']}
              onClick={handleReject}
              type="button">
              Decline
            </button>
            <button
              className={styles['button-allow']}
              onClick={handleAccept}
              type="button">
              Allow all
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Consent management utilities
function getConsentStatus(): ConsentStatus | null {
  if (typeof window === 'undefined') return null

  const consent = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${CONSENT_COOKIE_NAME}=`))
    ?.split('=')[1]

  if (consent === 'accepted' || consent === 'rejected') {
    return consent
  }

  return null
}

function saveConsentStatus(status: ConsentStatus) {
  if (typeof window === 'undefined') return

  const expires = new Date()
  expires.setDate(expires.getDate() + CONSENT_COOKIE_DURATION)

  document.cookie = `${CONSENT_COOKIE_NAME}=${status}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
}

// Export utility to revoke consent (for footer link)
export function revokeConsent() {
  if (typeof window === 'undefined') return

  // Delete the consent cookie
  document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`

  // Reload the page to show banner again
  window.location.reload()
}
