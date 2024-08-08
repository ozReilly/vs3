# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## 1. 添加vue全家桶依赖 vue-router vue-i18n vue-i18n axios pinia pinia-plugin-persistedstate
```bash
pnpm install vue-router vue-i18n pinia pinia-plugin-persistedstate axios
```

## 2. 配置tsconfig、路径别名

```bash
pnpm add @types/node -D
```
## 3. 配置ESlint 和 prettier
 ### 3.1 老是配置写法
  ```bash
  pnpm install -D eslint@^8.39.0 @typescript-eslint/parser@^6.19.0 @typescript-eslint/eslint-plugin@^6.19.0 eslint-plugin-vue@^9.11.0 eslint-plugin-prettier@^5.1.3 eslint-config-prettier@^9.1.0
  ```
  # 3.2 新写法
  ```bash
  pnpm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-vue eslint-plugin-prettier eslint-config-prettier
  ```
vscode中 settings.json 添加
```bash
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
  ```
