import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        prefix: 'Icon',
      }),],
  }),
  Components({
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        enabledCollections: ['ep'],
      }),
    ],
    directoryAsNamespace: true,
  }),
  Icons({
    autoInstall: true,
    compiler: 'vue3'
  }),

  ],
  resolve: {
    alias: {
      '@': '/src' //这样@就指向src目录了
    }
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
