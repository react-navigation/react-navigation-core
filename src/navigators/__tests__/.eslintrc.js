// eslint-disable-next-line import/no-commonjs
module.exports = function(api) {
  api.cache(true);
  return {
    "extends": "../../../.eslintrc.js",
    "env": {
      "jest": true
  };
};

