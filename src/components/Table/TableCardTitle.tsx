import {
    ActionIcon,
    Box,
    CardSection,
    CardSectionProps,
    Group,
    Stack,
    Text,
    Title
} from '@mantine/core'
import { forwardRef, ReactNode } from 'react'

import classes from './Table.module.css'

export interface TableCardTitleProps extends Omit<CardSectionProps, 'c' | 'fw' | 'size' | 'tt'> {
    actions?: ReactNode
    description?: string
    icon: ReactNode
    title: ReactNode
}

export const TableCardTitle = forwardRef<HTMLDivElement, TableCardTitleProps>(
    ({ title, description, style, actions, withBorder = true, icon, ...props }, ref) => (
        <CardSection
            className={classes.card}
            inheritPadding
            py="md"
            ref={ref}
            style={{
                ...style
            }}
            withBorder={withBorder}
            {...props}
        >
            <Box className={classes.headerWrapper}>
                <Box className={classes.contentSection}>
                    <Group align="center" gap="md" wrap="nowrap">
                        <ActionIcon
                            className={classes.actionIcon}
                            color="cyan"
                            size="input-md"
                            variant="light"
                        >
                            {icon}
                        </ActionIcon>

                        <Stack gap={0}>
                            <Title order={4} pt={0}>
                                {title}
                            </Title>
                            {description && (
                                <Text c="dimmed" fz="sm">
                                    {description}
                                </Text>
                            )}
                        </Stack>
                    </Group>
                </Box>

                {actions && (
                    <Box className={classes.actionsSection}>
                        <Group align="flex-end" gap="sm" wrap="nowrap">
                            {actions}
                        </Group>
                    </Box>
                )}
            </Box>
        </CardSection>
    )
)

TableCardTitle.displayName = 'TableCardTitle'

