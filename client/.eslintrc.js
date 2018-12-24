module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    'react/jsx-filename-extension': ['.js', '.jsx'],
    'react/prefer-stateless-function': 'off',
    'linebreak-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'arrow-body-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/forbid-prop-types': 0,
    'comma-dangle': 'off',
    'arrow-parens': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-state': 0
  }
};
