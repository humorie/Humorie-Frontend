import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// CORS 에러 해결을 위해 백엔드 서버를 프록시 설정으로 해결했지만 이게 정답인지 확인이 필요하다
// 임시방편으로 우회를 한게 아닐까 생각됨

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
