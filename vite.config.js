import { defineConfig, loadEnv } from 'vite'
import { join } from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({mode}) => {
  const env = loadEnv(mode, process.cwd())
  console.log('env', env)
  return defineConfig({
    base: env.VITE_CDN_DOMAIN,
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },
    plugins: [
      vue(),
    ],
  })
}
