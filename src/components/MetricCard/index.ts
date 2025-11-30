export { MetricCardRoot } from './MetricCardRoot'
export { MetricCardIcon } from './MetricCardIcon'
export { MetricCardTextMuted } from './MetricCardTextMuted'
export { MetricCardTextEmphasis } from './MetricCardTextEmphasis'
export { MetricCardTextTrend } from './MetricCardTextTrend'
export { MetricCardRingProgress } from './MetricCardRingProgress'
export { MetricCardBarChart } from './MetricCardBarChart'
export type { MetricCardRootProps } from './MetricCardRoot'
export type { MetricCardIconProps } from './MetricCardIcon'
export type { MetricCardTextMutedProps } from './MetricCardTextMuted'
export type { MetricCardTextEmphasisProps } from './MetricCardTextEmphasis'
export type { MetricCardTextTrendProps } from './MetricCardTextTrend'
export type { MetricCardRingProgressProps } from './MetricCardRingProgress'
export type { MetricCardBarChartProps } from './MetricCardBarChart'

// Compound component
import { MetricCardRoot } from './MetricCardRoot'
import { MetricCardIcon } from './MetricCardIcon'
import { MetricCardTextMuted } from './MetricCardTextMuted'
import { MetricCardTextEmphasis } from './MetricCardTextEmphasis'
import { MetricCardTextTrend } from './MetricCardTextTrend'
import { MetricCardRingProgress } from './MetricCardRingProgress'
import { MetricCardBarChart } from './MetricCardBarChart'

export const MetricCard = {
    Root: MetricCardRoot,
    Icon: MetricCardIcon,
    TextMuted: MetricCardTextMuted,
    TextTrend: MetricCardTextTrend,
    TextEmphasis: MetricCardTextEmphasis,
    RingProgress: MetricCardRingProgress,
    BarChart: MetricCardBarChart
}

