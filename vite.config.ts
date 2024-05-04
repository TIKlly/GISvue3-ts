import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
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
  }
})
