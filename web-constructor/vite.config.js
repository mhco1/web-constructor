import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import * as sass from 'sass'


const __dirname = path.resolve(path.dirname(''));

// https://vitejs.dev/config/
export default defineConfig({
    root: path.resolve(__dirname),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true
    },
    plugins: [
        react(),
    ]
})
