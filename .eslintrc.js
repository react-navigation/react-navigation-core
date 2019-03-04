// eslint-disable-next-line import/no-commonjs
module.exports = {
  "extends": ["eslint-config-satya164"],

  "plugins": ["react-native-globals"],

  "env": {
    "react-native-globals/all": true,
  },

  "settings": {
    "react": {
      "version": "detect"
    }
  },

  "rules": {
    "import/no-unresolved": "off",
    "react/sort-comp": "off",
    "jest/no-disabled-tests": "off",
  }
};

