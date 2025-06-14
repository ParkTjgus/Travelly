module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    "no-undef": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-named-as-default-member": "error",
    "import/no-default-export": "off",
    "import/no-duplicates": "error",
  },
};
