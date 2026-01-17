import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy font resolver requests to bypass CORS
      '/font-proxy': {
        target: 'https://cdn.jsdelivr.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/font-proxy/, ''),
      },
    },
  },
  publicDir: 'public',
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.bin', '**/*.obj', '**/*.mtl'],
  optimizeDeps: {
    exclude: ['three/examples/jsm/loaders/GLTFLoader', 'three/examples/jsm/loaders/OBJLoader'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js core
          'three-core': ['three'],
          // React Three Fiber and Drei
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          // React vendor
          'react-vendor': ['react', 'react-dom'],
          // Other vendor libraries
          'vendor': ['troika-three-text'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 0, // Don't inline any assets, serve them as separate files
  },
})
