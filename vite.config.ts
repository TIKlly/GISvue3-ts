import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

import pkg from "./package.json";
import dayjs from "dayjs";

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [
      ElementPlusResolver(),
    ],
  }),
  Components({
    resolvers: [
      ElementPlusResolver(),

    ],
    directoryAsNamespace: true,
  }),
  ],
  base: './',//配合electron打包
  resolve: {

    alias: { "@": path.resolve(__dirname, "src") },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/variables.scss";` //这样就能引入了，但是如果不在根目录下，这样�

      }
    }
  },
  define: {
    __APP_INFO__: JSON.stringify(__APP_INFO__)
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
    // minify: "terser",
    // terserOptions: {
    // 	compress: {
    // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
    // 		drop_debugger: true
    // 	}
    // },
    sourcemap: false,
    // 禁用 gzip 压缩大小报告，可略微减少打包时间
    reportCompressedSize: false,
    // 规定触发警告的 chunk 大小
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    }
  }
})
