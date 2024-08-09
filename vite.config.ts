import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

//配置按需加载
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'

// // 配置gz插件
// import viteCompression from 'vite-plugin-compression'
// 配置分析生成包大小
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/

type Mode = 'development' | 'production' | 'staging'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  // import.meta.env = env // 赋值给环境变量
  let environmentMode: Mode = mode as Mode
  console.log('import.meta.env', env,environmentMode)
  console.log(`··············evn-config:%c${command}, ${mode}, ${env.VITE_API_URL}················`, 'color:red;font-size:13px;')
  // 这里可以做各种环境配置
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
        dts: 'typing/auto-imports.d.ts',
        resolvers: [ElementPlusResolver(), VantResolver()],
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        // 解决eslint报错问题
        eslintrc: {
          // 这里先设置成true然后npm run dev 运行之后会生成 .eslintrc-auto-import.json 文件之后，在改为false
          enabled: true,
          filepath: './.eslintrc-auto-import.json', // 生成的文件路径
          globalsPropValue: true,
        },
      }),
      Components({
        dts: 'typing/components-imports.d.ts',
        resolvers: [ElementPlusResolver(), VantResolver()],
      }),
      // // gz配置
      // {
      //   ...viteCompression(),
      //   apply: 'build',
      // },
      visualizer({ open: environmentMode === 'production' ? true : false }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variable.scss";`,
        },
      },
    },
    // build: {

    //   outDir: 'dist2',
    //   minify: 'terser',
    //   terserOptions: {
    //     compress: {
    //       keep_infinity: true,
    //       drop_console: true,
    //       drop_debugger: true,
    //     },
    //   },
    //   chunkSizeWarningLimit: 1500,

    // }
    build: {
      outDir: 'esdist2',
      chunkSizeWarningLimit: 1500,
      // rollupOptions: {
      //   output: {
      //     manualChunks: {
      //       vue: ['vue', 'pinia', 'vue-router'],
      //     },
      //     chunkFileNames: 'static/js/[name]-[hash].js',
      //     entryFileNames: 'static/js/[name]-[hash].js',
      //     assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      //   },
      // },
    },
    // 新的打包方式
    esbuild: {
      drop: environmentMode === 'production' ? ['console', 'debugger'] : [],
    },
  })
})
