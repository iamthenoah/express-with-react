import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [reactPlugin()],
	root: './public',
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: './public/index.html'
		}
	}
})
