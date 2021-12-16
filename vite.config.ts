import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        nested: path.resolve(__dirname, 'main.html'),
      },
    },
  },
});
