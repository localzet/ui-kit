import { MdPhoneAndroid, MdScreenRotation } from 'react-icons/md'
import { Box, Paper, Stack, Text } from '@mantine/core'

export interface LandscapeBannerProps {
    title?: string
    description?: string
}

export function LandscapeBanner({
    title = 'Please rotate your device',
    description = 'This page works better in landscape orientation.'
}: LandscapeBannerProps) {
    return (
        <Box
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                zIndex: 9999
            }}
        >
            <Paper
                p="xl"
                radius="xl"
                shadow="xl"
                style={{
                    maxWidth: '300px',
                    width: '100%',
                    backgroundColor: 'var(--mantine-color-dark-6)',
                    textAlign: 'center',
                    border: '1px solid var(--mantine-color-dark-4)'
                }}
            >
                <Stack align="center" gap="lg">
                    <Box style={{ position: 'relative' }}>
                        <Box
                            style={{
                                animation: 'rotate 2s linear infinite',
                                transformOrigin: 'center'
                            }}
                        >
                            <MdPhoneAndroid color="var(--mantine-color-cyan-4)" size={60} />
                        </Box>

                        <Box
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                animation: 'scale 1.5s linear infinite'
                            }}
                        >
                            <MdScreenRotation color="var(--mantine-color-orange-4)" size={24} />
                        </Box>
                    </Box>

                    <Stack align="center" gap="xs">
                        <Text c="gray.1" fw={700} size="lg">
                            {title}
                        </Text>

                        <Text c="gray.4" size="sm" style={{ lineHeight: 1.4 }} ta="center">
                            {description}
                        </Text>
                    </Stack>

                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--mantine-color-gray-5)',
                            fontSize: '0.875rem'
                        }}
                    >
                        <Box
                            style={{
                                width: '30px',
                                height: '50px',
                                border: '2px solid var(--mantine-color-dark-3)',
                                borderRadius: '6px',
                                position: 'relative',
                                backgroundColor: 'var(--mantine-color-dark-7)'
                            }}
                        />

                        <Box
                            style={{
                                animation: 'move 1s ease-in-out infinite'
                            }}
                        >
                            <MdScreenRotation color="var(--mantine-color-cyan-4)" size={20} />
                        </Box>

                        <Box
                            style={{
                                width: '50px',
                                height: '30px',
                                border: '2px solid var(--mantine-color-cyan-6)',
                                borderRadius: '6px',
                                backgroundColor: 'var(--mantine-color-dark-5)'
                            }}
                        />
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
}

