import { Center, Stack, Text, Title } from '@mantine/core'
import { ReactNode } from 'react'

export interface EmptyPageProps {
    title?: string
    description?: string
    icon?: ReactNode
    action?: ReactNode
}

export function EmptyPage({ title, description, icon, action }: EmptyPageProps) {
    return (
        <Center h="100%" w="100%">
            <Stack align="center" gap="md" maw={400} p="xl">
                {icon && <div>{icon}</div>}
                {title && (
                    <Title order={3} ta="center">
                        {title}
                    </Title>
                )}
                {description && (
                    <Text c="dimmed" size="sm" ta="center">
                        {description}
                    </Text>
                )}
                {action && <div>{action}</div>}
            </Stack>
        </Center>
    )
}

