import {
    Button,
    Center,
    Divider,
    Group,
    Modal,
    px,
    Stack,
    Text,
    ThemeIcon,
    Title
} from '@mantine/core'
import { TbBaselineDensitySmall, TbColumns, TbMaximize, TbRotate2 } from 'react-icons/tb'
import { PiDeviceMobile, PiMonitor, PiWarning } from 'react-icons/pi'

export interface MobileWarningOverlayProps {
    opened: boolean
    onClose: () => void
    title?: string
    descriptionLine1?: string
    descriptionLine2?: string
    showOrHideColumns?: string
    adjustRowSpacing?: string
    toggleFullscreen?: string
    desktopRecommended?: string
    or?: string
    rotateDevice?: string
    continueButtonText?: string
}

export function MobileWarningOverlay({
    opened,
    onClose,
    title = 'Mobile device detected',
    descriptionLine1 = 'This application is optimized for desktop use.',
    descriptionLine2 = 'Some features may not work correctly on mobile devices.',
    showOrHideColumns = 'Show or hide columns',
    adjustRowSpacing = 'Adjust row spacing density',
    toggleFullscreen = 'Toggle fullscreen table view',
    desktopRecommended = 'Desktop recommended',
    or = 'or',
    rotateDevice = 'Rotate device',
    continueButtonText = 'I understand, continue anyway'
}: MobileWarningOverlayProps) {
    return (
        <Modal
            centered
            onClose={onClose}
            opened={opened}
            padding="xl"
            size="sm"
            withCloseButton={false}
        >
            <Center>
                <Stack align="center" gap="lg" maw={320}>
                    <ThemeIcon
                        color="orange"
                        size="xl"
                        style={{
                            background: 'rgba(251, 146, 60, 0.1)',
                            border: '2px solid rgba(251, 146, 60, 0.3)'
                        }}
                        variant="light"
                    >
                        <PiWarning size="32px" />
                    </ThemeIcon>

                    <Stack align="center" gap="sm">
                        <Title c="orange.4" order={3} ta="center">
                            {title}
                        </Title>

                        <Text c="gray.4" fw={800} size="sm" ta="center">
                            {descriptionLine1}
                        </Text>

                        <Text c="gray.4" size="sm" ta="center">
                            {descriptionLine2}
                        </Text>

                        <Group gap="xs">
                            <TbColumns color="var(--mantine-color-gray-4)" size={px('1.2rem')} />
                            <Text c="gray.4" size="xs">
                                {showOrHideColumns}
                            </Text>
                        </Group>

                        <Group gap="xs">
                            <TbBaselineDensitySmall
                                color="var(--mantine-color-gray-4)"
                                size={px('1.2rem')}
                            />
                            <Text c="gray.4" size="xs">
                                {adjustRowSpacing}
                            </Text>
                        </Group>

                        <Group gap="xs">
                            <TbMaximize color="var(--mantine-color-gray-4)" size={px('1.2rem')} />
                            <Text c="gray.4" size="xs">
                                {toggleFullscreen}
                            </Text>
                        </Group>
                    </Stack>

                    <Divider color="cyan.4" mb={0} opacity={0.3} pb={0} variant="dashed" w="100%" />

                    <Stack gap="sm" w="100%">
                        <Group gap="md" justify="center">
                            <Group gap="xs">
                                <PiMonitor
                                    color="var(--mantine-color-blue-4)"
                                    size={px('1.2rem')}
                                />
                                <Text c="blue.4" size="xs">
                                    {desktopRecommended}
                                </Text>
                            </Group>

                            <Text c="gray.5" size="xs">
                                {or}
                            </Text>

                            <Group gap="xs">
                                <TbRotate2
                                    color="var(--mantine-color-teal-4)"
                                    size={px('1.2rem')}
                                />
                                <Text c="teal.4" size="xs">
                                    {rotateDevice}
                                </Text>
                            </Group>
                        </Group>
                    </Stack>

                    <Button
                        color="orange"
                        fullWidth
                        leftSection={<PiDeviceMobile size="16px" />}
                        onClick={onClose}
                        size="md"
                        variant="light"
                    >
                        {continueButtonText}
                    </Button>
                </Stack>
            </Center>
        </Modal>
    )
}

