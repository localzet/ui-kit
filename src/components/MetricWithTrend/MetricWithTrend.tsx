import { Flex, Stack } from '@mantine/core'

import { MetricCard } from '../MetricCard'

export interface MetricWithTrendProps {
    difference: number | string
    icon: React.ReactNode
    period?: string
    title: string
    value: number | string
}

export function MetricWithTrend({ title, value, difference, period, icon }: MetricWithTrendProps) {
    return (
        <MetricCard.Root key={title}>
            <Stack gap="0" h="100%">
                <Flex align="flex-start" justify="space-between">
                    <MetricCard.TextMuted style={{ flex: 1 }} truncate>
                        {title}
                    </MetricCard.TextMuted>
                    <MetricCard.Icon style={{ flexShrink: 0, width: 56, height: 56 }}>
                        {icon}
                    </MetricCard.Icon>
                </Flex>

                <Stack gap={2} mt={-25}>
                    <MetricCard.TextEmphasis ff="monospace" truncate>
                        {value}
                    </MetricCard.TextEmphasis>
                    <MetricCard.TextTrend value={difference}>{period ?? 'last month'}</MetricCard.TextTrend>
                </Stack>
            </Stack>
        </MetricCard.Root>
    )
}

