import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiUrl = env.FAVORIT_API_URL || 'http://api.favorit-parts.ru';

  const proxy = {
    '/api': {
      target: apiUrl,
      changeOrigin: true,
      rewrite: (path) => {
        const url = new URL(path.replace(/^\/api/, ''), apiUrl);
        url.searchParams.set('key', env.FAVORIT_KEY ?? '');
        return `${url.pathname}${url.search}`;
      },
    },
  };

  return {
    plugins: [react()],
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    server: { proxy },
    preview: { proxy },
  };
});
