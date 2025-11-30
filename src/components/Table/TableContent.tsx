import { CardSection, CardSectionProps, ElementProps } from '@mantine/core'
import { forwardRef } from 'react'

export interface TableContentProps
    extends CardSectionProps,
        ElementProps<'div', keyof CardSectionProps> {}

export const TableContent = forwardRef<HTMLDivElement, TableContentProps>(
    ({ children, ...props }, ref) => (
        <CardSection bg="var(--mantine-color-body)" ref={ref} {...props}>
            {children}
        </CardSection>
    )
)

TableContent.displayName = 'TableContent'

