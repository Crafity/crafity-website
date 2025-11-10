declare module '*.module.css' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styles: any
  export = styles
}

// Import csstype eerst voordat je het augmenteert

declare module 'csstype' {
  interface Properties {
    // Allow any CSS Custom Properties
    [index: `--${string}`]: number | string | undefined
  }
}
