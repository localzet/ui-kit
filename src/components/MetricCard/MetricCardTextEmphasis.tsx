import { ElementProps, Text, TextProps } from '@mantine/core'

import classes from './MetricCard.module.css'

export interface MetricCardTextEmphasisProps
    extends ElementProps<'p', keyof TextProps>,
        Omit<TextProps, 'fw' | 'fz'> {}

export function MetricCardTextEmphasis({ className, ...props }: MetricCardTextEmphasisProps) {
    return <Text className={`${classes.textEmphasis} ${className || ''}`} {...props} />
}

