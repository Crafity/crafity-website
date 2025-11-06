export function SystemIcon() {
  return (
    <svg
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg">
      {/* Moon in top-left (smaller and more spaced) */}
      <path d="M10.5 5.5A4.5 4.5 0 1 1 5 2 3.5 3.5 0 0 0 10.5 5.5z" />
      {/* Diagonal separator line from top-right to bottom-left */}
      <line x1="20" x2="4" y1="4" y2="20" />
      {/* Sun in bottom-right (smaller and more spaced) */}
      <circle cx="18.5" cy="18.5" r="2.5" />
      <line x1="18.5" x2="18.5" y1="13.5" y2="14.5" />
      <line x1="18.5" x2="18.5" y1="22.5" y2="23.5" />
      <line x1="14.5" x2="15.3" y1="14.5" y2="15.3" />
      <line x1="21.7" x2="22.5" y1="21.7" y2="22.5" />
      <line x1="13.5" x2="14.5" y1="18.5" y2="18.5" />
      <line x1="22.5" x2="23.5" y1="18.5" y2="18.5" />
      <line x1="14.5" x2="15.3" y1="22.5" y2="21.7" />
      <line x1="21.7" x2="22.5" y1="15.3" y2="14.5" />
    </svg>
  )
}

export function DarkIcon() {
  return (
    <svg
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function LightIcon() {
  return (
    <svg
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" x2="12" y1="1" y2="3" />
      <line x1="12" x2="12" y1="21" y2="23" />
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
      <line x1="1" x2="3" y1="12" y2="12" />
      <line x1="21" x2="23" y1="12" y2="12" />
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
    </svg>
  )
}
