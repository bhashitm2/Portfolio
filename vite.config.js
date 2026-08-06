import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ratingsHandler from './api/ratings.js'

const ratingsApiPlugin = () => ({
  name: 'local-ratings-api',
  configureServer(server) {
    server.middlewares.use('/api/ratings', (request, response, next) => {
      ratingsHandler(request, response).catch(next)
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ratingsApiPlugin()],
})
