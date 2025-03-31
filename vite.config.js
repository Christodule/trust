import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '${API_URL}/api': {
        target: 'https://trustapi.onrender.com',
        secure: false,
      },
    },
  },
  base:'.${API_URL}/api/',
  plugins: [react()],
});
