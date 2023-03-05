import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';
// import svgr from '@svgr/rollup';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve('src') },
      { find: '@/components', replacement: path.resolve('src/components') },
    ],
  },
});
