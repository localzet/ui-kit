import { PiTrendDown, PiTrendUp } from 'react-icons/pi'
import { px, Text } from '@mantine/core'

import classes from './MetricCard.module.css'

export interface MetricCardTextTrendProps {
    children: React.ReactNode
    value: number | string
    formatValue?: (value: number | string, sign: string) => string
}

function formatPercentage(value: number, options?: { prefix?: string; precision?: number }) {
    const { prefix = '', precision = 2 } = options || {}
    return `${prefix}${value.toFixed(precision)}%`
}

export function MetricCardTextTrend({ value, children, formatValue }: MetricCardTextTrendProps) {
    let sign = ''
    let color = ''
    let Icon = PiTrendUp
    let valuePrinted = value
    let isPositive = true

    if (typeof value === 'number') {
        if (Number(value) > 0) {
            sign = '+'
            color = 'var(--mantine-color-teal-6)'
            Icon = PiTrendUp
            isPositive = true
        } else if (Number(value) < 0) {
            sign = ''
            color = 'var(--mantine-color-red-6)'
            Icon = PiTrendDown
            isPositive = false
        }
        valuePrinted = formatValue
            ? formatValue(value, sign)
            : formatPercentage(value, {
                  prefix: sign,
                  precision: 0
              })
    } else if (typeof value === 'string') {
        if (value.startsWith('-')) {
            color = 'var(--mantine-color-red-6)'
            Icon = PiTrendDown
            isPositive = false
            sign = ''
        } else {
            color = 'var(--mantine-color-teal-6)'
            Icon = PiTrendUp
            isPositive = true
            sign = '+'
        }
        valuePrinted = value
    }

    const containerClass = `${classes.trendContainer} ${isPositive ? classes.trendPositive : classes.trendNegative}`

    return (
        <div className={containerClass}>
            <Icon color={color} size={px('0.9rem')} />
            <Text className={classes.trendValue} component="span" style={{ color }}>
                {valuePrinted}
            </Text>
            <Text className={classes.trendText}>{children}</Text>
        </div>
    )
}

