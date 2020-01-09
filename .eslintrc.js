module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 1,
    'no-alert': 1,
    'no-plusplus': 1,
    'no-param-reassign': 1,
    'no-underscore-dangle': 1,
    'import/no-cycle': 1,
    'import/prefer-default-export': 1,
    'no-use-before-define': 1,
  },
  env: {
    browser: true,
  },
};
