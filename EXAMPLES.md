# Примеры использования @localzet/ui-kit

## Базовый пример приложения

```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, DirectionProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { NavigationProgress } from '@mantine/nprogress'

// Импортируем стили Mantine
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'

// Импортируем стили UI-Kit
import '@localzet/ui-kit/styles'

// Импортируем тему
import { theme } from '@localzet/ui-kit'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DirectionProvider>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <ModalsProvider>
          <Notifications position="top-right" />
          <NavigationProgress />
          <App />
        </ModalsProvider>
      </MantineProvider>
    </DirectionProvider>
  </React.StrictMode>
)
```

## Пример страницы с компонентами

```tsx
// App.tsx
import { Page, PageHeader, LoadingScreen } from '@localzet/ui-kit'
import { IconDashboard } from '@tabler/icons-react'
import { Button, Stack } from '@mantine/core'

function App() {
  return (
    <Page title="Главная" appName="Мое приложение">
      <Stack gap="md">
        <PageHeader
          icon={<IconDashboard />}
          title="Панель управления"
          description="Добро пожаловать в панель управления"
          actions={
            <>
              <Button variant="light">Действие 1</Button>
              <Button>Действие 2</Button>
            </>
          }
        />
        
        <div>
          <h2>Контент страницы</h2>
          <p>Здесь ваш контент...</p>
        </div>
      </Stack>
    </Page>
  )
}

export default App
```

## Пример с LoadingScreen

```tsx
import { LoadingScreen } from '@localzet/ui-kit'
import { useState, useEffect } from 'react'

function DataLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setLoading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <LoadingScreen 
        text="Загрузка данных..."
        value={progress}
      />
    )
  }

  return <div>Данные загружены!</div>
}
```

## Пример кастомизации темы

```tsx
import { createTheme, mergeMantineTheme } from '@mantine/core'
import { theme as uiKitTheme } from '@localzet/ui-kit'

// Создаем кастомную тему
const customTheme = createTheme({
  primaryColor: 'blue', // Изменяем основной цвет
  defaultRadius: 'sm',  // Изменяем радиус по умолчанию
})

// Объединяем с темой UI-Kit
const finalTheme = mergeMantineTheme(uiKitTheme, customTheme)

function App() {
  return (
    <MantineProvider theme={finalTheme} defaultColorScheme="dark">
      {/* Ваше приложение */}
    </MantineProvider>
  )
}
```

## Пример использования только темы

Если вам нужна только тема без компонентов:

```tsx
import { theme } from '@localzet/ui-kit/theme'
import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {/* Ваше приложение */}
    </MantineProvider>
  )
}
```

## Пример с React Router

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page, PageHeader } from '@localzet/ui-kit'
import { IconHome, IconSettings } from '@tabler/icons-react'

function HomePage() {
  return (
    <Page title="Главная" appName="Мое приложение">
      <PageHeader
        icon={<IconHome />}
        title="Главная страница"
        description="Добро пожаловать"
      />
      {/* Контент страницы */}
    </Page>
  )
}

function SettingsPage() {
  return (
    <Page title="Настройки" appName="Мое приложение">
      <PageHeader
        icon={<IconSettings />}
        title="Настройки"
        description="Управление настройками приложения"
      />
    </Page>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Пример с Suspense и LoadingScreen

```tsx
import { Suspense } from 'react'
import { LoadingScreen } from '@localzet/ui-kit'

function LazyComponent() {
  return <div>Ленивый компонент</div>
}

function App() {
  return (
    <Suspense fallback={<LoadingScreen text="Загрузка компонента..." />}>
      <LazyComponent />
    </Suspense>
  )
}
```

