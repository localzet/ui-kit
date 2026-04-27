import { useEffect, useMemo, useState } from 'react'
import {
    ActionIcon,
    AppShell,
    Badge,
    Box,
    Burger,
    Button,
    Divider,
    Drawer,
    Group,
    Menu,
    Modal,
    NavLink,
    Paper,
    ScrollArea,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
    Title
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
    PiArrowClockwise,
    PiArrowRight,
    PiChartBar,
    PiCheckCircle,
    PiCloud,
    PiCode,
    PiCopy,
    PiDatabase,
    PiGear,
    PiInfo,
    PiLayout,
    PiLightning,
    PiList,
    PiRocket,
    PiSliders,
    PiSquaresFour,
    PiUsers,
    PiWaveSine
} from 'react-icons/pi'
import { TbServer, TbStack2 } from 'react-icons/tb'

import {
    ActionCard,
    BaseOverlayHeader,
    CheckboxCard,
    ChipMultiSelect,
    CopyableArea,
    CopyableCodeBlock,
    CopyableField,
    CountryFlag,
    CreateableTagInput,
    DrawerFooter,
    EmptyPage,
    EntityCard,
    HeaderControl,
    HeaderControls,
    HelpActionIcon,
    InfoField,
    LandscapeBanner,
    LanguagePicker,
    LoaderModal,
    LoadingProgress,
    LoadingScreen,
    MetricCard,
    MetricWithTrend,
    MobileWarningOverlay,
    ModalFooter,
    Page,
    PageHeader,
    PopoverWithInfo,
    SectionCard,
    SettingsCardBottom,
    SettingsCardContainer,
    SettingsCardContent,
    SettingsCardHeader,
    ShimmerSkeleton,
    SidebarLogo,
    SidebarTitle,
    StickyHeader,
    TableCardTitle,
    TableContainer,
    TableContent,
    UnderlineShape,
    VirtualizedDndGrid
} from '@ui-kit'

type GridItem = {
    uuid: string
    title: string
    status: 'active' | 'disabled'
}

type DemoPageKey = 'analytics' | 'forms' | 'foundations' | 'layouts' | 'overlays'

type DemoPage = {
    description: string
    icon: React.ReactNode
    key: DemoPageKey
    title: string
}

type DemoMenuSection = {
    header: string
    id: string
    section: {
        dropdownItems?: {
            icon?: React.ComponentType<{ size?: number }>
            id: string
            name: string
            page: DemoPageKey
        }[]
        icon: React.ComponentType<{ size?: number }>
        id: string
        name: string
        page: DemoPageKey
    }[]
}

const DEMO_PAGES: DemoPage[] = [
    {
        key: 'foundations',
        title: 'Foundations',
        description: 'Navigation, page chrome and base UI primitives',
        icon: <PiLayout size={16} />
    },
    {
        key: 'forms',
        title: 'Data Entry',
        description: 'Inputs and selection controls',
        icon: <PiSliders size={16} />
    },
    {
        key: 'analytics',
        title: 'Analytics & Data',
        description: 'Metrics, cards, tables and sortable collections',
        icon: <PiChartBar size={16} />
    },
    {
        key: 'overlays',
        title: 'Feedback & Overlays',
        description: 'Progress, modals, drawers and contextual helpers',
        icon: <PiInfo size={16} />
    },
    {
        key: 'layouts',
        title: 'Layouts & Empty States',
        description: 'Page composition and structural blocks',
        icon: <PiSquaresFour size={16} />
    }
]

const DEMO_MENU: DemoMenuSection[] = [
    {
        header: 'Overview',
        id: 'overview',
        section: [
            {
                id: 'foundations',
                name: 'Foundations',
                icon: PiSquaresFour,
                page: 'foundations'
            }
        ]
    },
    {
        header: 'Catalog',
        id: 'catalog',
        section: [
            {
                id: 'forms',
                name: 'Data Entry',
                icon: PiSliders,
                page: 'forms'
            },
            {
                id: 'analytics',
                name: 'Analytics & Data',
                icon: PiChartBar,
                page: 'analytics',
                dropdownItems: [
                    {
                        id: 'analytics-metrics',
                        name: 'Metrics',
                        icon: PiChartBar,
                        page: 'analytics'
                    },
                    {
                        id: 'analytics-tables',
                        name: 'Tables & DnD',
                        icon: PiList,
                        page: 'analytics'
                    }
                ]
            }
        ]
    },
    {
        header: 'Experience',
        id: 'experience',
        section: [
            {
                id: 'overlays',
                name: 'Overlays',
                icon: PiInfo,
                page: 'overlays'
            },
            {
                id: 'layouts',
                name: 'Layouts',
                icon: PiLayout,
                page: 'layouts'
            }
        ]
    }
]

function getPageFromHash(): DemoPageKey {
    const raw = window.location.hash.replace('#', '')
    const match = DEMO_PAGES.find((page) => page.key === raw)
    return match?.key || 'foundations'
}

function DemoCard({
    title,
    description,
    children
}: {
    children: React.ReactNode
    description?: string
    title: string
}) {
    return (
        <Paper p="md" radius="md" withBorder>
            <Stack gap="sm">
                <div>
                    <Title order={4}>{title}</Title>
                    {description && (
                        <Text c="dimmed" mt={2} size="sm">
                            {description}
                        </Text>
                    )}
                </div>
                <div className="demo-preview">{children}</div>
            </Stack>
        </Paper>
    )
}

export function App() {
    const [modalOpened, setModalOpened] = useState(false)
    const [drawerOpened, setDrawerOpened] = useState(false)
    const [mobileOverlayOpened, setMobileOverlayOpened] = useState(false)
    const [showLandscapePreview, setShowLandscapePreview] = useState(false)
    const [loadingProgressActive, setLoadingProgressActive] = useState(false)
    const [tagValue, setTagValue] = useState<string | null>('PRO')
    const [chipValues, setChipValues] = useState<string[]>(['metrics'])
    const [checkboxChecked, setCheckboxChecked] = useState(true)
    const [activePage, setActivePage] = useState<DemoPageKey>(() => getPageFromHash())
    const [mobileNavOpened, mobileNavHandlers] = useDisclosure(false)

    const [items, setItems] = useState<GridItem[]>([
        { uuid: 'node-1', title: 'Node Alpha', status: 'active' },
        { uuid: 'node-2', title: 'Node Beta', status: 'disabled' },
        { uuid: 'node-3', title: 'Node Gamma', status: 'active' },
        { uuid: 'node-4', title: 'Node Delta', status: 'active' },
        { uuid: 'node-5', title: 'Node Epsilon', status: 'disabled' },
        { uuid: 'node-6', title: 'Node Zeta', status: 'active' }
    ])

    useEffect(() => {
        const onHashChange = () => {
            setActivePage(getPageFromHash())
        }

        window.addEventListener('hashchange', onHashChange)
        return () => window.removeEventListener('hashchange', onHashChange)
    }, [])

    useEffect(() => {
        if (!showLandscapePreview) {
            return
        }

        const timeout = window.setTimeout(() => {
            setShowLandscapePreview(false)
        }, 2500)

        return () => window.clearTimeout(timeout)
    }, [showLandscapePreview])

    useEffect(() => {
        if (!loadingProgressActive) {
            return
        }

        const timeout = window.setTimeout(() => {
            setLoadingProgressActive(false)
        }, 2200)

        return () => window.clearTimeout(timeout)
    }, [loadingProgressActive])

    const chartData = useMemo(
        () => [
            { month: 'Jan', traffic: 12 },
            { month: 'Feb', traffic: 18 },
            { month: 'Mar', traffic: 16 },
            { month: 'Apr', traffic: 22 },
            { month: 'May', traffic: 28 }
        ],
        []
    )

    const pageMeta = DEMO_PAGES.find((page) => page.key === activePage) || DEMO_PAGES[0]

    const handlePageChange = (key: DemoPageKey) => {
        setActivePage(key)
        window.location.hash = key
        mobileNavHandlers.close()
    }

    const nav = (
        <Stack gap="md" pb="md" pt="md">
            {DEMO_MENU.map((section, index) => (
                <Box key={section.id}>
                    {index > 0 && <Divider color="cyan.4" mb="lg" opacity={0.3} variant="dashed" />}
                    <Title className="demo-section-title" order={6}>
                        {section.header}
                    </Title>

                    <Stack gap={1}>
                        {section.section.map((subItem) =>
                            subItem.dropdownItems ? (
                                <NavLink
                                    active={false}
                                    childrenOffset={0}
                                    className="demo-section-link"
                                    key={subItem.id}
                                    label={subItem.name}
                                    leftSection={<subItem.icon size={20} />}
                                    variant="light"
                                >
                                    {subItem.dropdownItems.map((dropdownItem) => (
                                        <NavLink
                                            active={activePage === dropdownItem.page}
                                            className="demo-section-dropdown-link"
                                            key={dropdownItem.id}
                                            label={dropdownItem.name}
                                            leftSection={
                                                dropdownItem.icon ? (
                                                    <dropdownItem.icon size={18} />
                                                ) : (
                                                    <PiArrowRight size={18} />
                                                )
                                            }
                                            onClick={() => handlePageChange(dropdownItem.page)}
                                            variant="subtle"
                                        />
                                    ))}
                                </NavLink>
                            ) : (
                                <NavLink
                                    active={activePage === subItem.page}
                                    className="demo-section-link"
                                    key={subItem.id}
                                    label={subItem.name}
                                    leftSection={<subItem.icon size={20} />}
                                    onClick={() => handlePageChange(subItem.page)}
                                    variant="subtle"
                                />
                            )
                        )}
                    </Stack>
                </Box>
            ))}
        </Stack>
    )

    const foundationsContent = (
        <Stack gap="md">
            <SimpleGrid cols={{ base: 1, lg: 2, xl: 3 }} spacing="sm">
                <DemoCard title="StickyHeader + HeaderControls" description="Header like dashboard pages">
                    <StickyHeader>
                        <Group justify="space-between" px="md" py="xs">
                            <Group>
                                <Text fw={700}>Dashboard header</Text>
                                <UnderlineShape c="cyan.4" size={72} />
                            </Group>
                            <HeaderControls
                                githubLink="https://github.com/localzet/ui-kit"
                                stars={42}
                                supportLink="https://example.com/support"
                                telegramLink="https://t.me/localzet"
                                withRefresh
                                onRefresh={() => setLoadingProgressActive(true)}
                            />
                        </Group>
                    </StickyHeader>
                </DemoCard>

                <DemoCard title="PageHeader" description="Top section heading with actions">
                    <PageHeader
                        actions={
                            <Group>
                                <Button size="xs" variant="light">
                                    Secondary
                                </Button>
                                <Button size="xs">Primary</Button>
                            </Group>
                        }
                        description="Use as page title block"
                        icon={<PiSquaresFour size={18} />}
                        mb={0}
                        title="Foundations"
                    />
                </DemoCard>

                <DemoCard title="Sidebar pieces" description="Logo and title parts">
                    <Stack>
                        <Group>
                            <SidebarLogo
                                customLogo={
                                    <ActionIcon color="cyan" radius="md" size="xl" variant="light">
                                        <PiLayout size={18} />
                                    </ActionIcon>
                                }
                            />
                            <SidebarTitle
                                title={[
                                    { text: 'Local', color: 'cyan.4' },
                                    { text: 'zet', color: 'white' }
                                ]}
                            />
                        </Group>
                        <Group>
                            <HeaderControl>
                                <PiCopy size={18} />
                            </HeaderControl>
                            <HeaderControl>
                                <PiArrowClockwise size={18} />
                            </HeaderControl>
                            <HeaderControl>
                                <PiCode size={18} />
                            </HeaderControl>
                        </Group>
                    </Stack>
                </DemoCard>

                <DemoCard title="Language + Country + Helper" description="Global controls and micro UI">
                    <Stack>
                        <LanguagePicker />
                        <Group>
                            <Text size="sm">Country:</Text>
                            <CountryFlag countryCode="RU" />
                            <CountryFlag countryCode="US" />
                            <CountryFlag countryCode="DE" />
                        </Group>
                        <Group>
                            <HelpActionIcon onClick={() => setDrawerOpened(true)} />
                            <PopoverWithInfo text="Reusable tooltip-like popover." />
                        </Group>
                    </Stack>
                </DemoCard>
            </SimpleGrid>
        </Stack>
    )

    const formsContent = (
        <Stack gap="md">
            <SimpleGrid cols={{ base: 1, lg: 2, xl: 3 }} spacing="sm">
                <DemoCard title="CopyableField / Area / Code" description="Clipboard-ready values">
                    <Stack>
                        <CopyableField label="Token" value="sk_live_xxx_123" />
                        <CopyableArea label="YAML" value={'proxy:\n  mode: rule\n  dns: true'} />
                        <CopyableCodeBlock
                            inputWrapperProps={{ label: 'Command' }}
                            value="npm run deploy"
                        />
                    </Stack>
                </DemoCard>

                <DemoCard title="CreateableTagInput" description="Tag selector with create mode">
                    <CreateableTagInput
                        onChange={setTagValue}
                        tags={['BASIC', 'PRO', 'ENTERPRISE']}
                        value={tagValue}
                    />
                </DemoCard>

                <DemoCard title="ChipMultiSelect" description="Compact multiselect card list">
                    <ChipMultiSelect
                        data={[
                            { value: 'metrics', label: 'Metrics', icon: <PiChartBar /> },
                            { value: 'users', label: 'Users', icon: <PiUsers /> },
                            { value: 'config', label: 'Config', icon: <PiSliders /> }
                        ]}
                        label="Visible blocks"
                        onChange={setChipValues}
                        value={chipValues}
                    />
                </DemoCard>

                <DemoCard title="CheckboxCard + InfoField" description="Boolean options + metadata">
                    <Stack>
                        <CheckboxCard
                            checked={checkboxChecked}
                            description="Feature flag for beta controls"
                            label="Enable Beta"
                            onClick={() => setCheckboxChecked((current) => !current)}
                        />
                        <InfoField label="Current plan" value={<Badge color="teal">PRO</Badge>} />
                    </Stack>
                </DemoCard>
            </SimpleGrid>
        </Stack>
    )

    const analyticsContent = (
        <Stack gap="md">
            <SimpleGrid cols={{ base: 1, lg: 2, xl: 3 }} spacing="sm">
                <DemoCard title="MetricWithTrend">
                    <MetricWithTrend
                        difference={+18}
                        icon={<PiChartBar size={20} />}
                        period="vs previous week"
                        title="Requests"
                        value="18.2k"
                    />
                </DemoCard>

                <DemoCard title="MetricCard compound API">
                    <MetricCard.Root>
                        <Stack>
                            <Group justify="space-between">
                                <MetricCard.TextMuted>Bandwidth</MetricCard.TextMuted>
                                <MetricCard.Icon c="cyan.6">
                                    <PiCloud size={20} />
                                </MetricCard.Icon>
                            </Group>
                            <MetricCard.TextEmphasis>2.4 TB</MetricCard.TextEmphasis>
                            <MetricCard.TextTrend value={-4}>last month</MetricCard.TextTrend>
                        </Stack>
                    </MetricCard.Root>
                </DemoCard>

                <DemoCard title="MetricCard RingProgress">
                    <Group justify="center">
                        <MetricCard.RingProgress
                            label="72%"
                            sections={[{ value: 72, color: 'teal.6' }]}
                            size={120}
                            thickness={12}
                        />
                    </Group>
                </DemoCard>
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, xl: 2 }} spacing="sm">
                <DemoCard title="MetricCard BarChart">
                    <MetricCard.BarChart
                        barProps={{ radius: 4 }}
                        data={chartData}
                        dataKey="month"
                        h={220}
                        series={[{ name: 'traffic', color: 'cyan.6' }]}
                    />
                </DemoCard>

                <DemoCard title="TableContainer / TableCardTitle / TableContent">
                    <TableContainer>
                        <TableCardTitle
                            description="Card header for table widgets"
                            icon={<PiList size={18} />}
                            title="Nodes"
                        />
                        <TableContent p="md">
                            <ScrollArea>
                                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th align="left">Name</th>
                                            <th align="left">Status</th>
                                            <th align="left">Uptime</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Node Alpha</td>
                                            <td>
                                                <Badge color="teal">Active</Badge>
                                            </td>
                                            <td>14d</td>
                                        </tr>
                                        <tr>
                                            <td>Node Beta</td>
                                            <td>
                                                <Badge color="gray">Offline</Badge>
                                            </td>
                                            <td>2d</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ScrollArea>
                        </TableContent>
                    </TableContainer>
                </DemoCard>
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, xl: 2 }} spacing="sm">
                <DemoCard title="EntityCard">
                    <EntityCard.Root>
                        <EntityCard.Header>
                            <EntityCard.Icon>
                                <TbServer size={18} />
                            </EntityCard.Icon>
                            <EntityCard.Content subtitle="UUID: aa32-992f" title="Gateway Node">
                                <Text c="dimmed" size="xs">
                                    region: eu-central
                                </Text>
                            </EntityCard.Content>
                        </EntityCard.Header>

                        <EntityCard.Actions>
                            <EntityCard.Button leftSection={<PiCheckCircle size={14} />}>
                                Open
                            </EntityCard.Button>
                            <EntityCard.Menu>
                                <Menu.Item leftSection={<PiDatabase size={14} />}>Details</Menu.Item>
                                <Menu.Item color="red" leftSection={<PiLightning size={14} />}>
                                    Restart
                                </Menu.Item>
                            </EntityCard.Menu>
                        </EntityCard.Actions>
                    </EntityCard.Root>
                </DemoCard>

                <DemoCard title="VirtualizedDndGrid">
                    <Box h={320}>
                        <VirtualizedDndGrid
                            items={items}
                            onReorder={setItems}
                            renderDragOverlay={(item) => (
                                <Paper p="sm" radius="md" withBorder>
                                    <Text>{item.title}</Text>
                                </Paper>
                            )}
                            renderItem={(item) => (
                                <Paper p="sm" radius="md" withBorder>
                                    <Group justify="space-between">
                                        <Text fw={600}>{item.title}</Text>
                                        <Badge color={item.status === 'active' ? 'teal' : 'gray'}>
                                            {item.status}
                                        </Badge>
                                    </Group>
                                </Paper>
                            )}
                            style={{ height: 300 }}
                            useWindowScroll={false}
                        />
                    </Box>
                </DemoCard>
            </SimpleGrid>
        </Stack>
    )

    const overlaysContent = (
        <Stack gap="md">
            <SimpleGrid cols={{ base: 1, lg: 2, xl: 3 }} spacing="sm">
                <DemoCard title="ActionCard + Popover + Help">
                    <Stack>
                        <ActionCard
                            description="Runs maintenance pipeline"
                            icon={<PiRocket size={18} />}
                            onClick={() => setLoadingProgressActive(true)}
                            title="Run action"
                            variant="light"
                        />
                        <Group>
                            <HelpActionIcon onClick={() => setDrawerOpened(true)} />
                            <PopoverWithInfo text="Reusable tooltip-like popover." />
                        </Group>
                    </Stack>
                </DemoCard>

                <DemoCard title="LoaderModal + LoadingScreen">
                    <Stack>
                        <LoaderModal mih={110} text="Preparing request..." />
                        <LoadingScreen height="240px" text="Loading dashboard blocks..." value={66} />
                    </Stack>
                </DemoCard>

                <DemoCard title="LoadingProgress + ShimmerSkeleton">
                    <Stack>
                        <Button
                            leftSection={<PiArrowClockwise size={16} />}
                            onClick={() => setLoadingProgressActive(true)}
                            size="xs"
                            variant="light"
                        >
                            Trigger LoadingProgress
                        </Button>
                        <ShimmerSkeleton height={18} width="100%" />
                        <Group>
                            <ShimmerSkeleton height={14} width="60%" />
                            <ShimmerSkeleton height={14} width="30%" />
                        </Group>
                    </Stack>
                </DemoCard>

                <DemoCard title="Overlay banners">
                    <Stack>
                        <Button onClick={() => setMobileOverlayOpened(true)} size="xs" variant="light">
                            Open MobileWarningOverlay
                        </Button>
                        <Button onClick={() => setShowLandscapePreview(true)} size="xs" variant="light">
                            Preview LandscapeBanner (2.5s)
                        </Button>
                    </Stack>
                </DemoCard>
            </SimpleGrid>
        </Stack>
    )

    const layoutsContent = (
        <Stack gap="md">
            <SimpleGrid cols={{ base: 1, lg: 2, xl: 3 }} spacing="sm">
                <DemoCard title="SettingsCard">
                    <SettingsCardContainer>
                        <SettingsCardHeader
                            description="Reusable block for dashboard settings"
                            icon={<PiGear size={18} />}
                            title="Settings"
                        />
                        <SettingsCardContent>
                            <TextInput label="Project name" placeholder="localzet-admin" />
                        </SettingsCardContent>
                        <SettingsCardBottom>
                            <Group justify="flex-end" mt="md">
                                <Button size="xs" variant="light">
                                    Save
                                </Button>
                            </Group>
                        </SettingsCardBottom>
                    </SettingsCardContainer>
                </DemoCard>

                <DemoCard title="SectionCard">
                    <SectionCard.Root>
                        <SectionCard.Section>
                            <Text fw={600}>Section A</Text>
                            <Text c="dimmed" size="sm">
                                Compose page blocks with dividers.
                            </Text>
                        </SectionCard.Section>
                        <SectionCard.Section>
                            <Text fw={600}>Section B</Text>
                        </SectionCard.Section>
                    </SectionCard.Root>
                </DemoCard>

                <DemoCard title="BaseOverlayHeader">
                    <BaseOverlayHeader
                        IconComponent={TbStack2}
                        countryCode="DE"
                        iconVariant="light"
                        subtitle="overlay metadata"
                        title="Overlay title"
                        withCopy
                    />
                </DemoCard>

                <DemoCard title="Page layout">
                    <Paper p="md" radius="md" withBorder>
                        <Page appName="Demo" title="Layout preview">
                            <Text size="sm">Page sets document title and wraps content.</Text>
                        </Page>
                    </Paper>
                </DemoCard>

                <DemoCard title="EmptyPage layout">
                    <Paper h={220} withBorder>
                        <EmptyPage
                            action={<Button size="xs">Create entity</Button>}
                            description="Use as a reusable empty-state layout."
                            icon={<PiInfo size={24} />}
                            title="No data yet"
                        />
                    </Paper>
                </DemoCard>
            </SimpleGrid>
        </Stack>
    )

    const contentByPage: Record<DemoPageKey, React.ReactNode> = {
        foundations: foundationsContent,
        forms: formsContent,
        analytics: analyticsContent,
        overlays: overlaysContent,
        layouts: layoutsContent
    }

    return (
        <div className="demo-shell">
            <LoadingProgress start={loadingProgressActive} />

            <Page appName="Localzet UI Kit" title={`${pageMeta.title} Demo`}>
                <AppShell
                    header={{ height: 64, offset: false }}
                    layout="alt"
                    navbar={{
                        width: 300,
                        breakpoint: 'lg',
                        collapsed: { mobile: !mobileNavOpened }
                    }}
                    padding="xl"
                >
                    <AppShell.Header>
                        <Group className="demo-header" justify="space-between" px="md">
                            <Group gap="sm">
                                <Burger
                                    hiddenFrom="md"
                                    onClick={mobileNavHandlers.toggle}
                                    opened={mobileNavOpened}
                                    size="sm"
                                />
                                <ActionIcon color="cyan" radius="md" size="lg" variant="light">
                                    <PiWaveSine size={18} />
                                </ActionIcon>
                                <div>
                                    <Title order={4}>Localzet UI Kit Showcase</Title>
                                    <Text c="dimmed" size="xs">
                                        {pageMeta.description}
                                    </Text>
                                </div>
                            </Group>

                            <Group>
                                <Button onClick={() => setModalOpened(true)} size="xs" variant="light">
                                    Modal demo
                                </Button>
                                <Button onClick={() => setDrawerOpened(true)} size="xs" variant="light">
                                    Drawer demo
                                </Button>
                            </Group>
                        </Group>
                    </AppShell.Header>

                    <AppShell.Navbar className="demo-sidebar-wrapper" p="md" pb={0} w={300} withBorder={false}>
                        <AppShell.Section className="demo-logo-section">
                            <div className="demo-sidebar-brand">
                                <Group gap="sm" wrap="nowrap">
                                    <SidebarLogo
                                        customLogo={
                                            <ActionIcon
                                                color="cyan"
                                                radius="md"
                                                size="xl"
                                                variant="light"
                                            >
                                                <PiWaveSine size={18} />
                                            </ActionIcon>
                                        }
                                    />
                                    <div>
                                        <SidebarTitle
                                            title={[
                                                { text: 'Local', color: 'cyan.4' },
                                                { text: 'zet', color: 'white' }
                                            ]}
                                        />
                                        <Text c="dimmed" size="xs">
                                            UI Kit
                                        </Text>
                                    </div>
                                </Group>
                            </div>
                            <div className="demo-nav-title">
                                <Text fw={700} size="sm">
                                    Основное меню
                                </Text>
                            </div>
                        </AppShell.Section>

                        <AppShell.Section className="demo-scroll-area" component={ScrollArea} flex={1} scrollbarSize="0.2rem">
                            {nav}
                        </AppShell.Section>
                    </AppShell.Navbar>

                    <AppShell.Main pb="var(--mantine-spacing-md)" pt="calc(var(--app-shell-header-height) + 10px)">
                        <Stack gap="md">
                            <PageHeader
                                description={pageMeta.description}
                                icon={<PiSquaresFour size={18} />}
                                title={pageMeta.title}
                            />
                            {contentByPage[activePage]}
                        </Stack>
                    </AppShell.Main>
                </AppShell>
            </Page>

            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                size="lg"
                title="Modal + ModalFooter"
            >
                <Stack>
                    <Text size="sm">This dialog demonstrates sticky footer actions.</Text>
                    <Divider />
                    <ModalFooter>
                        <Button onClick={() => setModalOpened(false)} variant="default">
                            Cancel
                        </Button>
                        <Button>Confirm</Button>
                    </ModalFooter>
                </Stack>
            </Modal>

            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                position="right"
                size="md"
                title="Drawer + DrawerFooter"
            >
                <Stack>
                    <Text size="sm">Drawer action area is pinned at the bottom.</Text>
                    <Divider />
                    <DrawerFooter>
                        <Button onClick={() => setDrawerOpened(false)} variant="default">
                            Close
                        </Button>
                        <Button>Apply</Button>
                    </DrawerFooter>
                </Stack>
            </Drawer>

            <MobileWarningOverlay
                onClose={() => setMobileOverlayOpened(false)}
                opened={mobileOverlayOpened}
            />

            {showLandscapePreview && <LandscapeBanner />}
        </div>
    )
}
