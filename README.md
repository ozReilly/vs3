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
### 4 配置scss
```bash
pnpm install -D sass
```
### 5 配置UI库 element-plus,vant
```bash
pnpm install element-plus vant
```
### 6 配置按需引入插件[(https://www.jianshu.com/p/2fdb75834cef)]
```bash
pnpm install unplugin-vue-components unplugin-auto-import -D
```
```json
        AutoImport({
            // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
            imports: ['vue', 'vue-router'],
            resolvers: [ElementPlusResolver(),VantResolver()],
            dts: 'src/auto-import.d.ts', // 路径下自动生成文件夹存放全局指令
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            // 解决eslint报错问题
            eslintrc: {
                // 这里先设置成true然后npm run dev 运行之后会生成 .eslintrc-auto-import.json 文件之后，在改为false
                enabled: false,
                filepath: './.eslintrc-auto-import.json', // 生成的文件路径
                globalsPropValue: true,
            }
        })
```
```json
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
        // 添加下列这行
        './.eslintrc-auto-import.json',
    ],
```

### 7 配置环境变量
 7.1 新建 .env.staging（预发布环境配置）.env.development（开发环境配置） .env.production（生产环境配置）
 7.2 import.meta.env.VITE_BASE_URL 获取环境变量
 7.3 在vite.config.ts中使用环境变量（loadEnv）
 7.4 在package.json中配置环境变量 staging pro

### 8 配置axios(useFetch)
```bash
pnpm install axios
```
### 9 配置打包
```json old
  // 旧的打包方式
  build: {
    outDir: 'dist2',
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 1500,

  },
```
```json new
  // 新的打包方式
  build: {
    outDir: 'esdist2',
    chunkSizeWarningLimit: 1500,
  },
  esbuild: {
    drop:['console','debugger']
  },
```
### 10 配置vite-plugin-mock
```bash
pnpm install vite-plugin-mock -D
```

