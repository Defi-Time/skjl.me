module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "off", //todo: comment out: this is just to shut it up during developments
    "react/prop-types": 0,
    "no-empty": 0,
    "react/no-unescaped-entities": 0,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:prettier/recommended", //todo: un-comment: this is just to shut it up during developments
  ],
};
