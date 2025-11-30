import { Card, CardProps } from '@mantine/core'

export interface TableContainerProps extends CardProps {}

export function TableContainer({ children, ...props }: TableContainerProps) {
    return (
        <Card {...props} bg="var(--mantine-color-body)">
            {children}
        </Card>
    )
}

