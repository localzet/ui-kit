import { Group, Text } from '@mantine/core'

export interface InfoFieldProps {
    label: string
    value: React.ReactNode
}

export function InfoField({ label, value }: InfoFieldProps) {
    return (
        <Group align="center" justify="flex-start">
            <Text c="dimmed" size="sm">
                {label}
            </Text>
            <Text size="sm">{value || '—'}</Text>
        </Group>
    )
}

