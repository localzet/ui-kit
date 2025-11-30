import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.stories.*']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LocalzetUIKit',
      formats: ['es'],
      fileName: (format) => `index.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mantine/core',
        '@mantine/hooks',
        '@mantine/charts',
        '@mantine/dates',
        '@mantine/nprogress',
        '@tabler/icons-react',
        'react-icons',
        'react-icons/go',
        'clsx'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mantine/core': 'MantineCore',
          '@mantine/hooks': 'MantineHooks'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css'
          return assetInfo.name || 'asset'
        }
      }
    },
    cssCodeSplit: false,
    sourcemap: true,
    minify: false
  }
})

