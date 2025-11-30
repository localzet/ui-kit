import { Card, CardProps, ElementProps } from '@mantine/core'

import classes from './MetricCard.module.css'

export interface MetricCardRootProps extends CardProps, ElementProps<'div', keyof CardProps> {}

export function MetricCardRoot({ className, ...props }: MetricCardRootProps) {
    return <Card className={`${classes.root} ${className || ''}`} withBorder {...props} />
}

