module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended", //继承 ESLint 内置的推荐规则
    "plugin:vue/vue3-recommended", // 继承 Vue.js 3 的推荐规则
    "plugin:@typescript-eslint/recommended", //继承 TypeScript ESLint 插件的推荐规则
    "plugin:prettier/recommended", //继承 Prettier 的推荐规则
    "eslint-config-prettier", //关闭 ESLint 中与 Prettier 冲突的规则
    "./.eslintrc-auto-import.json", // 自动导入
    // "./.eslintrc-auto-import-ts.json", // 自动导入
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs", "commitlint.config.cjs"],
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "vue/multi-word-component-names": "off", // 禁用vue文件强制多个单词命名
    "@typescript-eslint/no-explicit-any": "off", //允许使用any
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowedNames: ["that"], // this可用的局部变量名称
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off", //允许使用@ts-ignore
    "@typescript-eslint/no-non-null-assertion": "off", //允许使用非空断言
    "no-console": [
      //提交时不允许有console.log
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "semi": "off", // 关闭分号
    "no-debugger": "warn", //提交时不允许有debugger
    "prettier/prettier": "error", // 开启 Prettier 自动格式化功能

  },
};
