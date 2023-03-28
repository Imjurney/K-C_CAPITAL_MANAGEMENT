import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// import express from 'vite-plugin-express';

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths(), splitVendorChunkPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
});
