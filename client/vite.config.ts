import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tsconfigPaths()],
	root: './public',
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: './public/index.html'
		}
	}
})
