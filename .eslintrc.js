module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
  },
}
