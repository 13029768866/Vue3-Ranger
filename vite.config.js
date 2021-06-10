import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src'),
      '_views': resolve(__dirname,'src/views'),
      '_comp': resolve(__dirname,'src/components'),
    },
  },
  server: {
    port: 9528,
    open: true,
    cors: true
  }
})
