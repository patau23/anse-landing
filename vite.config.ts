import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from "url";
import path from "path"
import svgr from 'vite-plugin-svgr'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001, // здесь указываем нужный порт
    strictPort: true, // опционально — выдаст ошибку, если порт занят
    host: '0.0.0.0', // опционально — слушать все интерфейсы
  },
  plugins: [tailwindcss(), react(), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
