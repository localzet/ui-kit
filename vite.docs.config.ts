import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const docsBase = process.env.DOCS_BASE || '/'

export default defineConfig({
    root: resolve(__dirname, 'demo'),
    base: docsBase,
    plugins: [react()],
    resolve: {
        alias: {
            '@ui-kit': resolve(__dirname, 'src')
        }
    },
    build: {
        outDir: resolve(__dirname, 'docs-dist'),
        emptyOutDir: true
    }
})
