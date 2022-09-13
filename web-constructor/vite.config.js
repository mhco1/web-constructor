import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const __dirname = path.resolve(path.dirname(''));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    hot: true
  },
  root: path.resolve(__dirname),
  resolve: {
    alias: {
        '~antd': path.resolve(__dirname, 'node_modules/antd'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@root-entry-name: default;',
        //modifyVars: antdVar,
      },
    },
  },
  plugins: [
    react(),
  ],
})
