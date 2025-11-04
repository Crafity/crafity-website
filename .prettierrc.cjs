module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  endOfLine: 'auto',
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  bracketSameLine: true,
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json' },
    },
    {
      files: '*.ts,*.tsx',
      options: { parser: 'typescript' },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
  ],
}
