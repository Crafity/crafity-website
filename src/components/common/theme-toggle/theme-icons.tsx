import { SVGProps } from 'react'

export function SystemIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      height="24"
      viewBox="0 0 24 24"
      width="24">
      <path
        d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2v-12a6 6 0 0 1 0 12"
        fill="currentColor"
      />
    </svg>
  )
}

export function LightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-4.681a8.97 8.97 0 0 0 5.707-2.612a8.97 8.97 0 0 0 2.612-5.707q.49.326.924.757A6 6 0 1 1 7 15.316"
        fill="currentColor"
      />
    </svg>
  )
}

// export function SystemIcon() {
//   return (
//     <svg
//       fill="none"
//       height="20"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.5"
//       viewBox="0 0 24 24"
//       width="20"
//       xmlns="http://www.w3.org/2000/svg">
//       {/* Moon in top-left (smaller and more spaced) */}
//       <path d="M10.5 5.5A4.5 4.5 0 1 1 5 2 3.5 3.5 0 0 0 10.5 5.5z" />
//       {/* Diagonal separator line from top-right to bottom-left */}
//       <line x1="20" x2="4" y1="4" y2="20" />
//       {/* Sun in bottom-right (smaller and more spaced) */}
//       <circle cx="18.5" cy="18.5" r="2.5" />
//       <line x1="18.5" x2="18.5" y1="13.5" y2="14.5" />
//       <line x1="18.5" x2="18.5" y1="22.5" y2="23.5" />
//       <line x1="14.5" x2="15.3" y1="14.5" y2="15.3" />
//       <line x1="21.7" x2="22.5" y1="21.7" y2="22.5" />
//       <line x1="13.5" x2="14.5" y1="18.5" y2="18.5" />
//       <line x1="22.5" x2="23.5" y1="18.5" y2="18.5" />
//       <line x1="14.5" x2="15.3" y1="22.5" y2="21.7" />
//       <line x1="21.7" x2="22.5" y1="15.3" y2="14.5" />
//     </svg>
//   )
// }

// export function DarkIcon() {
//   return (
//     <svg
//       fill="none"
//       height="20"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//       width="20"
//       xmlns="http://www.w3.org/2000/svg">
//       <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//     </svg>
//   )
// }

// export function LightIcon() {
//   return (
//     <svg
//       fill="none"
//       height="20"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       viewBox="0 0 24 24"
//       width="20"
//       xmlns="http://www.w3.org/2000/svg">
//       <circle cx="12" cy="12" r="5" />
//       <line x1="12" x2="12" y1="1" y2="3" />
//       <line x1="12" x2="12" y1="21" y2="23" />
//       <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
//       <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
//       <line x1="1" x2="3" y1="12" y2="12" />
//       <line x1="21" x2="23" y1="12" y2="12" />
//       <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
//       <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
//     </svg>
//   )
// }
