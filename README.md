# @localzet/ui-kit

UI Kit библиотека компонентов на основе Mantine для проектов Localzet. Единая система дизайна и компонентов, собранная из лучших практик проектов ЛК (frontend) и Агрегатор (kimai-aggregator).

## Установка

```bash
npm install @localzet/ui-kit
# или
yarn add @localzet/ui-kit
# или
pnpm add @localzet/ui-kit
```

## Требования

- React 18.2.0 или выше
- @mantine/core ^8.3.6
- @mantine/hooks ^8.3.6

## Быстрый старт

### 1. Импортируйте стили Mantine

В вашем главном файле приложения (например, `main.tsx` или `App.tsx`) импортируйте необходимые стили Mantine:

```tsx
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
// ... другие стили Mantine, которые вы используете
```

### 2. Импортируйте глобальные стили UI-Kit

```tsx
import '@localzet/ui-kit/styles'
```

### 3. Настройте MantineProvider с темой

```tsx
import { MantineProvider } from '@mantine/core'
import { theme } from '@localzet/ui-kit'

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {/* Ваше приложение */}
    </MantineProvider>
  )
}
```

## Структура

UI-Kit разделен на несколько категорий:

- **Components** (`@localzet/ui-kit`) - Основные UI компоненты
- **Layouts** (`@localzet/ui-kit`) - Компоненты для структуры страниц
- **Theme** (`@localzet/ui-kit/theme`) - Тема Mantine

## Компоненты

### LoadingScreen

Компонент для отображения экрана загрузки с прогресс-баром.

```tsx
import { LoadingScreen } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <LoadingScreen 
      height="100dvh"
      text="Загрузка..."
      value={75}
    />
  )
}
```

**Props:**
- `height?: string` - Высота контейнера (по умолчанию: `'100dvh'`)
- `text?: string` - Текст для отображения
- `value?: number` - Значение прогресса от 0 до 100 (по умолчанию: `100`)

### PageHeader

Компонент заголовка страницы с иконкой, заголовком, описанием и действиями.

```tsx
import { PageHeader } from '@localzet/ui-kit'
import { IconSettings } from '@tabler/icons-react'
import { Button } from '@mantine/core'

function MyPage() {
  return (
    <PageHeader
      icon={<IconSettings />}
      title="Настройки"
      description="Управление настройками приложения"
      actions={
        <>
          <Button variant="light">Сохранить</Button>
          <Button>Отмена</Button>
        </>
      }
    />
  )
}
```

**Props:**
- `icon: ReactNode` - Иконка для отображения
- `title: ReactNode` - Заголовок
- `description?: string` - Описание под заголовком
- `actions?: ReactNode` - Действия (кнопки и т.д.)
- Все остальные props передаются в `Card` из Mantine

### CopyableField

Поле ввода с возможностью копирования значения в буфер обмена.

```tsx
import { CopyableField } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <CopyableField
      label="API ключ"
      value="sk-1234567890abcdef"
      size="md"
    />
  )
}
```

**Props:**
- `label?: string` - Метка поля
- `value: number | string` - Значение для копирования
- `leftSection?: ReactNode` - Левая секция (иконка и т.д.)
- `size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'` - Размер поля

### InfoField

Компонент для отображения пары "метка-значение".

```tsx
import { InfoField } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <InfoField
      label="Статус"
      value="Активен"
    />
  )
}
```

**Props:**
- `label: string` - Метка
- `value: ReactNode` - Значение (может быть любым React-элементом)

### ModalFooter

Футер для модальных окон с адаптивной версткой.

```tsx
import { Modal, Button } from '@mantine/core'
import { ModalFooter } from '@localzet/ui-kit'

function MyModal() {
  return (
    <Modal opened={opened} onClose={close}>
      <Modal.Body>Содержимое модалки</Modal.Body>
      <ModalFooter>
        <Button variant="light">Отмена</Button>
        <Button>Сохранить</Button>
      </ModalFooter>
    </Modal>
  )
}
```

**Props:**
- `children: ReactNode` - Содержимое футера (обычно кнопки)

### DrawerFooter

Футер для Drawer с адаптивной версткой.

```tsx
import { Drawer, Button } from '@mantine/core'
import { DrawerFooter } from '@localzet/ui-kit'

function MyDrawer() {
  return (
    <Drawer opened={opened} onClose={close}>
      <Drawer.Body>Содержимое drawer</Drawer.Body>
      <DrawerFooter>
        <Button variant="light">Отмена</Button>
        <Button>Сохранить</Button>
      </DrawerFooter>
    </Drawer>
  )
}
```

**Props:**
- `children: ReactNode` - Содержимое футера

### StickyHeader

Липкий заголовок, который остается видимым при прокрутке.

```tsx
import { StickyHeader } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <StickyHeader offset={10}>
      <h1>Заголовок</h1>
    </StickyHeader>
  )
}
```

**Props:**
- `offset?: number` - Отступ в пикселях для активации (по умолчанию: `2`)
- Все остальные props передаются в `Box` из Mantine

### SettingsCard

Набор компонентов для создания карточек настроек.

```tsx
import {
  SettingsCardContainer,
  SettingsCardHeader,
  SettingsCardContent,
  SettingsCardBottom
} from '@localzet/ui-kit'
import { IconSettings } from '@tabler/icons-react'
import { Button, Switch } from '@mantine/core'

function MySettings() {
  return (
    <SettingsCardContainer>
      <SettingsCardHeader
        icon={<IconSettings />}
        title="Настройки уведомлений"
        description="Управление уведомлениями"
      />
      <SettingsCardContent>
        <Switch label="Email уведомления" />
        <Switch label="Push уведомления" />
      </SettingsCardContent>
      <SettingsCardBottom>
        <Button>Сохранить</Button>
      </SettingsCardBottom>
    </SettingsCardContainer>
  )
}
```

**Компоненты:**
- `SettingsCardContainer` - Контейнер карточки
- `SettingsCardHeader` - Заголовок с иконкой и описанием
- `SettingsCardContent` - Основное содержимое
- `SettingsCardBottom` - Нижняя секция с разделителем

### Table

Компоненты для работы с таблицами.

```tsx
import { TableContainer, TableCardTitle } from '@localzet/ui-kit'
import { IconTable } from '@tabler/icons-react'
import { Button } from '@mantine/core'

function MyTable() {
  return (
    <TableContainer>
      <TableCardTitle
        icon={<IconTable />}
        title="Список пользователей"
        description="Все пользователи системы"
        actions={<Button>Добавить</Button>}
      />
      {/* Ваша таблица */}
    </TableContainer>
  )
}
```

**Компоненты:**
- `TableContainer` - Контейнер для таблицы
- `TableCardTitle` - Заголовок таблицы с иконкой и действиями

### UnderlineShape

Декоративный SVG-элемент для подчеркивания.

```tsx
import { UnderlineShape } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <div>
      <h1>Заголовок</h1>
      <UnderlineShape size={100} color="cyan" />
    </div>
  )
}
```

**Props:**
- `size?: number | string` - Размер SVG
- Все остальные props передаются в `Box` из Mantine

### CheckboxCard

Карточка с чекбоксом для выбора опций.

```tsx
import { CheckboxCard } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <CheckboxCard
      label="Опция 1"
      description="Описание опции"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.currentTarget.checked)}
    />
  )
}
```

**Props:**
- `label?: string` - Метка карточки
- `description?: string` - Описание
- Все остальные props передаются в `Checkbox.Card` из Mantine

### CopyableArea

Текстовая область с возможностью копирования.

```tsx
import { CopyableArea } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <CopyableArea
      label="Конфигурация"
      value="some long text to copy..."
    />
  )
}
```

**Props:**
- `label?: string` - Метка поля
- `value: number | string` - Значение для копирования

### Logo

SVG логотип компонент.

```tsx
import { Logo } from '@localzet/ui-kit'

function MyComponent() {
  return <Logo size={32} color="cyan" />
}
```

**Props:**
- `size?: number | string` - Размер логотипа
- Все остальные props передаются в `Box` из Mantine

### LoaderModal

Компонент загрузки для модальных окон.

```tsx
import { LoaderModal } from '@localzet/ui-kit'

function MyModal() {
  return (
    <LoaderModal
      text="Загрузка данных..."
      h="80vh"
      w="100%"
    />
  )
}
```

**Props:**
- `text?: string` - Текст под индикатором загрузки
- Все остальные props передаются в `Center` из Mantine

### PopoverWithInfo

Поповер с информационной иконкой.

```tsx
import { PopoverWithInfo } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <PopoverWithInfo
      position="right"
      text="Дополнительная информация о функции"
    />
  )
}
```

**Props:**
- `position?: 'bottom' | 'left' | 'right' | 'top'` - Позиция поповера
- `text: ReactNode` - Текст для отображения

### CreateableTagInput

Поле ввода для создания и выбора тегов.

```tsx
import { CreateableTagInput } from '@localzet/ui-kit'

function MyComponent() {
  const [tags, setTags] = useState(['TAG1', 'TAG2'])
  const [value, setValue] = useState<string | null>(null)

  return (
    <CreateableTagInput
      tags={tags}
      value={value}
      onChange={setValue}
      label="Tag"
      placeholder="EXAMPLE_TAG_1"
    />
  )
}
```

**Props:**
- `tags: string[]` - Список доступных тегов
- `value: string | null | undefined` - Текущее значение
- `onChange?: (value: string | null) => void` - Callback при изменении
- `defaultValue?: string | null` - Значение по умолчанию
- `label?: string` - Метка поля
- `description?: string` - Описание
- `placeholder?: string` - Placeholder
- `error?: string` - Ошибка валидации
- `validateTag?: (tag: string) => string | null` - Кастомная валидация

### MetricCard

Комплексный компонент для отображения метрик с различными вариантами.

```tsx
import { MetricCard } from '@localzet/ui-kit'
import { IconUsers } from '@tabler/icons-react'

function MyComponent() {
  return (
    <MetricCard.Root>
      <MetricCard.Icon c="cyan">
        <IconUsers />
      </MetricCard.Icon>
      <MetricCard.TextMuted>Total Users</MetricCard.TextMuted>
      <MetricCard.TextEmphasis>1,234</MetricCard.TextEmphasis>
      <MetricCard.TextTrend value={12}>vs last month</MetricCard.TextTrend>
    </MetricCard.Root>
  )
}
```

**Компоненты:**
- `MetricCard.Root` - Корневой контейнер
- `MetricCard.Icon` - Иконка с градиентным фоном
- `MetricCard.TextMuted` - Приглушенный текст
- `MetricCard.TextEmphasis` - Акцентный текст
- `MetricCard.TextTrend` - Тренд с иконкой и значением
- `MetricCard.RingProgress` - Кольцевой прогресс
- `MetricCard.BarChart` - Столбчатая диаграмма

### MetricWithTrend

Готовый компонент метрики с трендом.

```tsx
import { MetricWithTrend } from '@localzet/ui-kit'
import { IconUsers } from '@tabler/icons-react'

function MyComponent() {
  return (
    <MetricWithTrend
      title="Total Users"
      value="1,234"
      difference={12}
      period="vs last month"
      icon={<IconUsers />}
    />
  )
}
```

**Props:**
- `title: string` - Заголовок метрики
- `value: number | string` - Значение
- `difference: number | string` - Разница (для тренда)
- `period?: string` - Период сравнения
- `icon: ReactNode` - Иконка

### SidebarLogo

Логотип для сайдбара с поддержкой кастомного изображения.

```tsx
import { SidebarLogo } from '@localzet/ui-kit'

function MySidebar() {
  return (
    <SidebarLogo
      logoUrl="https://example.com/logo.png"
      fallbackLogo="/logo.svg"
      onClick={() => navigate('/')}
      size={30}
    />
  )
}
```

**Props:**
- `logoUrl?: string` - URL кастомного логотипа
- `fallbackLogo?: string` - Fallback логотип
- `onClick?: () => void` - Обработчик клика
- `size?: number | string` - Размер логотипа

### SidebarTitle

Заголовок для сайдбара с поддержкой цветных частей.

```tsx
import { SidebarTitle } from '@localzet/ui-kit'

function MySidebar() {
  return (
    <SidebarTitle
      title={[
        { text: 'My', color: 'cyan' },
        { text: 'App', color: 'white' }
      ]}
    />
  )
}
```

**Props:**
- `title?: string | Array<{ text: string; color?: string }>` - Заголовок
- `defaultTitle?: Array<{ text: string; color?: string }>` - Заголовок по умолчанию

### MobileWarningOverlay

Модальное окно с предупреждением для мобильных устройств.

```tsx
import { MobileWarningOverlay } from '@localzet/ui-kit'

function MyApp() {
  const [opened, setOpened] = useState(true)

  return (
    <MobileWarningOverlay
      opened={opened}
      onClose={() => setOpened(false)}
      title="Mobile device detected"
    />
  )
}
```

**Props:**
- `opened: boolean` - Открыто ли модальное окно
- `onClose: () => void` - Обработчик закрытия
- Все тексты настраиваются через props

### LandscapeBanner

Баннер для принудительного поворота устройства.

```tsx
import { LandscapeBanner } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <LandscapeBanner
      title="Please rotate your device"
      description="This page works better in landscape orientation."
    />
  )
}
```

**Props:**
- `title?: string` - Заголовок
- `description?: string` - Описание

### LanguagePicker

Компонент выбора языка.

```tsx
import { LanguagePicker } from '@localzet/ui-kit'

function MyHeader() {
  return (
    <LanguagePicker
      currentLanguage="en"
      onLanguageChange={(lang) => {
        // Обработка смены языка
        console.log(lang)
      }}
    />
  )
}
```

**Props:**
- `languages?: Language[]` - Список языков
- `currentLanguage?: string` - Текущий язык
- `onLanguageChange?: (language: string) => void` - Callback смены языка
- `defaultLanguages?: Language[]` - Языки по умолчанию

### HeaderControl

Базовый компонент для кнопок в хедере.

```tsx
import { HeaderControl } from '@localzet/ui-kit'
import { IconSettings } from '@tabler/icons-react'

function MyHeader() {
  return (
    <HeaderControl onClick={() => console.log('clicked')}>
      <IconSettings />
    </HeaderControl>
  )
}
```

**Props:**
- Все props передаются в `UnstyledButton` из Mantine

### HeaderControls

Группа контролов для хедера.

```tsx
import { HeaderControls } from '@localzet/ui-kit'

function MyHeader() {
  return (
    <HeaderControls
      githubLink="https://github.com/example"
      stars={1234}
      telegramLink="https://t.me/example"
      supportLink="https://example.com/donate"
      withGithub
      withTelegram
      withSupport
      withLanguage
      onRefresh={() => window.location.reload()}
      onLogout={() => console.log('logout')}
    />
  )
}
```

**Props:**
- `githubLink?: string` - Ссылка на GitHub
- `stars?: number` - Количество звезд
- `isGithubLoading?: boolean` - Загрузка звезд
- `telegramLink?: string` - Ссылка на Telegram
- `supportLink?: string` - Ссылка на поддержку
- `withGithub?: boolean` - Показывать GitHub контрол
- `withTelegram?: boolean` - Показывать Telegram контрол
- `withSupport?: boolean` - Показывать Support контрол
- `withLanguage?: boolean` - Показывать Language контрол
- `withRefresh?: boolean` - Показывать Refresh контрол
- `withLogout?: boolean` - Показывать Logout контрол
- `withVersion?: boolean` - Показывать Version контрол
- `onRefresh?: () => void` - Обработчик обновления
- `onLogout?: () => void` - Обработчик выхода
- `version?: string` - Версия приложения
- `versionComponent?: ReactNode` - Кастомный компонент версии
- `refreshIcon?: ReactNode` - Иконка обновления
- `logoutIcon?: ReactNode` - Иконка выхода

### HelpActionIcon

Иконка помощи с тултипом.

```tsx
import { HelpActionIcon } from '@localzet/ui-kit'

function MyComponent() {
  return (
    <HelpActionIcon
      onClick={() => openHelp()}
      tooltip="Click for help"
    />
  )
}
```

**Props:**
- `hidden?: boolean` - Скрыть иконку
- `onClick?: () => void` - Обработчик клика
- `tooltip?: string` - Текст тултипа
- `size?: string | number` - Размер
- `color?: string` - Цвет

### LoadingProgress

Компонент для старта индикатора прогресса навигации.

```tsx
import { LoadingProgress } from '@localzet/ui-kit'

function MyComponent() {
  return <LoadingProgress start={true} />
}
```

**Props:**
- `start?: boolean` - Начать прогресс (по умолчанию: `true`)

### TableContent

Контент для таблицы в CardSection.

```tsx
import { TableContent } from '@localzet/ui-kit'

function MyTable() {
  return (
    <TableContent>
      {/* Ваша таблица */}
    </TableContent>
  )
}
```

**Props:**
- Все props передаются в `CardSection` из Mantine

## Layouts

### Page

Компонент-обертка для страниц приложения.

```tsx
import { Page } from '@localzet/ui-kit'

function MyPage() {
  return (
    <Page 
      title="Моя страница"
      appName="Мое приложение"
      onMount={() => {
        // Вызывается при монтировании страницы
        console.log('Страница загружена')
      }}
    >
      <div>Содержимое страницы</div>
    </Page>
  )
}
```

**Props:**
- `title?: string` - Заголовок страницы (устанавливается в `document.title`)
- `appName?: string` - Название приложения (используется в формате `{title} | {appName}`)
- `meta?: ReactNode` - Мета-теги для страницы
- `onMount?: () => void` - Callback при монтировании компонента
- Все остальные props передаются в `Box` из Mantine

### EmptyPage

Компонент для пустой страницы.

```tsx
import { EmptyPage } from '@localzet/ui-kit'
import { IconEmpty } from '@tabler/icons-react'
import { Button } from '@mantine/core'

function MyEmptyPage() {
  return (
    <EmptyPage
      icon={<IconEmpty size={48} />}
      title="Nothing found"
      description="There are no items to display"
      action={<Button>Create new</Button>}
    />
  )
}
```

**Props:**
- `title?: string` - Заголовок
- `description?: string` - Описание
- `icon?: ReactNode` - Иконка
- `action?: ReactNode` - Действие (кнопка и т.д.)

## Тема

Тема UI-Kit включает:

- **Цветовая палитра**: Темная тема с акцентом на cyan
- **Типографика**: Montserrat, Vazirmatn, Noto Sans SC, Twemoji Country Flags
- **Breakpoints**: xs, sm, md, lg, xl, 2xl, 3xl, 4xl
- **Компоненты с кастомизацией**: Badge, Button, Card, Table, Input, Menu, Tooltip и другие

### Использование темы

```tsx
import { theme } from '@localzet/ui-kit'
import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {/* Ваше приложение */}
    </MantineProvider>
  )
}
```

### Кастомизация темы

Вы можете расширить тему, используя `createTheme` из Mantine:

```tsx
import { createTheme, mergeMantineTheme } from '@mantine/core'
import { theme as uiKitTheme } from '@localzet/ui-kit'

const customTheme = createTheme({
  // Ваши кастомизации
})

const finalTheme = mergeMantineTheme(uiKitTheme, customTheme)
```

## Overrides компонентов

UI-Kit включает кастомизированные версии следующих компонентов Mantine:

- **Badge** - с радиусом `md` и вариантом `outline`
- **Button** - с радиусом `md`, вариантом `light` и плавными переходами
- **Card** - с градиентным фоном и анимацией появления
- **Table** - с подсветкой при наведении
- **Input** - все инпуты с радиусом `md`
- **Menu** - с кастомными стилями для темной темы
- **Tooltip** - с анимацией и стрелкой
- **Notification** - с радиусом `md`
- И другие...

Все эти кастомизации применяются автоматически при использовании темы.

## Стили

Глобальные стили включают:

- Поддержку safe-area для мобильных устройств
- Стили для таблиц (mantine-datatable)
- Стили для Monaco Editor
- Анимации
- Кастомные стили для компонентов Mantine

## Структура проекта

```
ui-kit/
├── src/
│   ├── components/          # React компоненты
│   │   ├── LoadingScreen/
│   │   ├── Page/
│   │   └── PageHeader/
│   ├── theme/              # Тема Mantine
│   │   ├── overrides/      # Кастомизация компонентов
│   │   └── theme.ts
│   ├── styles/             # Глобальные стили
│   │   └── global.css
│   └── index.ts            # Главный файл экспорта
├── dist/                   # Собранная библиотека
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Разработка

### Установка зависимостей

```bash
npm install
```

### Сборка

```bash
npm run build
```

### Проверка типов

```bash
npm run typecheck
```

### Режим разработки (watch)

```bash
npm run dev
```

## Публикация в npm

```bash
npm run build
npm publish
```

## Лицензия

MIT

## Автор

localzet (creator@localzet.com)

## Примеры

Более подробные примеры использования смотрите в файле [EXAMPLES.md](./EXAMPLES.md).

## Поддержка

Если у вас есть вопросы или предложения, создайте issue в репозитории проекта.

