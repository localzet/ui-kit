import { BarChart, BarChartProps } from '@mantine/charts'

export interface MetricCardBarChartProps extends BarChartProps {}

export function MetricCardBarChart(props: MetricCardBarChartProps) {
    return <BarChart {...props} style={{ flexShrink: 0, ...props.style }} />
}

