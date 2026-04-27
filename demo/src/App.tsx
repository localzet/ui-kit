import { useEffect, useMemo, useState } from 'react'
import {
    ActionIcon,
    Badge,
    Box,
    Button,
    Divider,
    Drawer,
    Group,
    Menu,
    Modal,
    Paper,
    ScrollArea,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
    Title
} from '@mantine/core'
import {
    PiArrowClockwise,
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
    PiUsers
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

function DemoCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <Paper p="md" radius="md" withBorder>
            <Stack gap="md">
                <Title order={4}>{title}</Title>
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
    const [items, setItems] = useState<GridItem[]>([
        { uuid: 'node-1', title: 'Node Alpha', status: 'active' },
        { uuid: 'node-2', title: 'Node Beta', status: 'disabled' },
        { uuid: 'node-3', title: 'Node Gamma', status: 'active' },
        { uuid: 'node-4', title: 'Node Delta', status: 'active' },
        { uuid: 'node-5', title: 'Node Epsilon', status: 'disabled' },
        { uuid: 'node-6', title: 'Node Zeta', status: 'active' }
    ])

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

    return (
        <div className="demo-shell">
            <LoadingProgress start={loadingProgressActive} />

            <Page appName="Localzet UI Kit" title="Components Demo">
                <Stack gap="lg">
                    <PageHeader
                        actions={
                            <Group>
                                <Button onClick={() => setModalOpened(true)} size="xs" variant="light">
                                    Modal demo
                                </Button>
                                <Button onClick={() => setDrawerOpened(true)} size="xs" variant="light">
                                    Drawer demo
                                </Button>
                            </Group>
                        }
                        description="Каталог компонентов библиотеки"
                        icon={<PiSquaresFour size={18} />}
                        title="Localzet UI Kit"
                    />

                    <StickyHeader>
                        <Group justify="space-between" px="md" py="xs">
                            <Group>
                                <Text fw={700}>StickyHeader</Text>
                                <UnderlineShape c="cyan.4" size={64} />
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

                    <div className="demo-grid">
                        <DemoCard title="ActionCard / HelpActionIcon / PopoverWithInfo">
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

                        <DemoCard title="CopyableField / CopyableArea / CopyableCodeBlock">
                            <Stack>
                                <CopyableField label="Token" value="sk_live_xxx_123" />
                                <CopyableArea label="YAML" value={'proxy:\n  mode: rule\n  dns: true'} />
                                <CopyableCodeBlock
                                    inputWrapperProps={{ label: 'Command' }}
                                    value="npm run deploy"
                                />
                            </Stack>
                        </DemoCard>

                        <DemoCard title="CreateableTagInput / ChipMultiSelect / CheckboxCard">
                            <Stack>
                                <CreateableTagInput
                                    onChange={setTagValue}
                                    tags={['BASIC', 'PRO', 'ENTERPRISE']}
                                    value={tagValue}
                                />
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
                                <CheckboxCard
                                    checked={checkboxChecked}
                                    description="Feature flag for beta controls"
                                    label="Enable Beta"
                                    onClick={() => setCheckboxChecked((current) => !current)}
                                />
                            </Stack>
                        </DemoCard>

                        <DemoCard title="InfoField / CountryFlag / LanguagePicker">
                            <Stack>
                                <InfoField label="Current plan" value={<Badge color="teal">PRO</Badge>} />
                                <Group>
                                    <Text size="sm">Country:</Text>
                                    <CountryFlag countryCode="RU" />
                                    <CountryFlag countryCode="US" />
                                    <CountryFlag countryCode="DE" />
                                </Group>
                                <LanguagePicker />
                            </Stack>
                        </DemoCard>

                        <DemoCard title="MetricCard / MetricWithTrend">
                            <Stack>
                                <SimpleGrid cols={2}>
                                    <MetricWithTrend
                                        difference={+18}
                                        icon={<PiChartBar size={20} />}
                                        period="vs previous week"
                                        title="Requests"
                                        value="18.2k"
                                    />
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
                                </SimpleGrid>

                                <MetricCard.BarChart
                                    barProps={{ radius: 4 }}
                                    data={chartData}
                                    dataKey="month"
                                    h={180}
                                    series={[{ name: 'traffic', color: 'cyan.6' }]}
                                />

                                <Group justify="center">
                                    <MetricCard.RingProgress
                                        label="72%"
                                        sections={[{ value: 72, color: 'teal.6' }]}
                                        size={120}
                                        thickness={12}
                                    />
                                </Group>
                            </Stack>
                        </DemoCard>

                        <DemoCard title="SettingsCard / SectionCard">
                            <Stack>
                                <SettingsCardContainer>
                                    <SettingsCardHeader
                                        description="Reusable block for dashboard settings"
                                        icon={<PiGear size={18} />}
                                        title="SettingsCard"
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
                            </Stack>
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
                                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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

                        <DemoCard title="SidebarLogo / SidebarTitle / HeaderControl">
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

                        <DemoCard title="EntityCard">
                            <EntityCard.Root>
                                <EntityCard.Header>
                                    <EntityCard.Icon>
                                        <TbServer size={18} />
                                    </EntityCard.Icon>
                                    <EntityCard.Content
                                        subtitle="UUID: aa32-992f"
                                        title="Gateway Node"
                                    >
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
                                        <Menu.Item leftSection={<PiDatabase size={14} />}>
                                            Details
                                        </Menu.Item>
                                        <Menu.Item color="red" leftSection={<PiLightning size={14} />}>
                                            Restart
                                        </Menu.Item>
                                    </EntityCard.Menu>
                                </EntityCard.Actions>
                            </EntityCard.Root>
                        </DemoCard>

                        <DemoCard title="BaseOverlayHeader / ShimmerSkeleton">
                            <Stack>
                                <BaseOverlayHeader
                                    IconComponent={TbStack2}
                                    countryCode="DE"
                                    iconVariant="light"
                                    subtitle="overlay metadata"
                                    title="Overlay title"
                                    withCopy
                                />
                                <Group>
                                    <ShimmerSkeleton height={18} width="100%" />
                                </Group>
                                <Group>
                                    <ShimmerSkeleton height={14} width="60%" />
                                    <ShimmerSkeleton height={14} width="30%" />
                                </Group>
                            </Stack>
                        </DemoCard>

                        <DemoCard title="VirtualizedDndGrid">
                            <Box h={280}>
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
                                    style={{ height: 260 }}
                                    useWindowScroll={false}
                                />
                            </Box>
                        </DemoCard>

                        <DemoCard title="Layouts: Page / EmptyPage">
                            <Stack>
                                <Paper p="md" radius="md" withBorder>
                                    <Page appName="Demo" title="Layout preview">
                                        <Text size="sm">Page sets document title and wraps content.</Text>
                                    </Page>
                                </Paper>

                                <Paper h={220} withBorder>
                                    <EmptyPage
                                        action={<Button size="xs">Create entity</Button>}
                                        description="Use as a reusable empty-state layout."
                                        icon={<PiInfo size={24} />}
                                        title="No data yet"
                                    />
                                </Paper>
                            </Stack>
                        </DemoCard>

                        <DemoCard title="Loading components">
                            <Stack>
                                <Button
                                    leftSection={<PiArrowClockwise size={16} />}
                                    onClick={() => setLoadingProgressActive(true)}
                                    size="xs"
                                    variant="light"
                                >
                                    Trigger LoadingProgress
                                </Button>
                                <LoaderModal mih={110} text="Preparing request..." />
                                <LoadingScreen height="220px" text="Loading dashboard blocks..." value={66} />
                            </Stack>
                        </DemoCard>

                        <DemoCard title="Overlays: MobileWarningOverlay / LandscapeBanner">
                            <Stack>
                                <Button onClick={() => setMobileOverlayOpened(true)} size="xs" variant="light">
                                    Open MobileWarningOverlay
                                </Button>
                                <Button
                                    onClick={() => setShowLandscapePreview(true)}
                                    size="xs"
                                    variant="light"
                                >
                                    Preview LandscapeBanner (2.5s)
                                </Button>
                                <Text c="dimmed" size="xs">
                                    LandscapeBanner is fullscreen by design, preview auto-hides.
                                </Text>
                            </Stack>
                        </DemoCard>
                    </div>
                </Stack>
            </Page>

            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Modal + ModalFooter"
                size="lg"
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
                title="Drawer + DrawerFooter"
                position="right"
                size="md"
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
