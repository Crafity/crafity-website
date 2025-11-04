module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'font-family-name-quotes': 'always-unless-keyword',
    'max-nesting-depth': 4,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['grid-template'],
      },
    ],
  },
}
