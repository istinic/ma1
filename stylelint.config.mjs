// stylelint.config.mjs
export default {
  extends: ['stylelint-config-recommended'],
  rules: {
    indentation: null,
    'string-quotes': null,
    'number-leading-zero': null,
    'block-opening-brace-space-before': null,
    'declaration-colon-space-after': null,
    'declaration-colon-space-before': null,
    'declaration-block-semicolon-newline-after': null,
    'selector-list-comma-newline-after': null,
    'color-hex-case': null,
    'max-empty-lines': null,
    'color-no-invalid-hex': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'no-duplicate-selectors': true,
    'declaration-block-no-duplicate-properties': true,
    'block-no-empty': true,
  },
};
