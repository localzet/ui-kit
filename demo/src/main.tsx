import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'

import { theme } from '@ui-kit/theme'
import { App } from './App'

import '@mantine/core/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/nprogress/styles.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            <NavigationProgress />
            <App />
        </MantineProvider>
    </React.StrictMode>
)
