import { ActionIcon, Box, Card, CardProps, Group, Stack, Text, Title } from '@mantine/core'
import { forwardRef, ReactNode } from 'react'

import classes from './PageHeader.module.css'

export interface PageHeaderProps extends Omit<CardProps, 'c' | 'fw' | 'size' | 'tt'> {
    actions?: ReactNode
    description?: string
    icon: ReactNode
    title: ReactNode
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
    ({ icon, title, description, actions, withBorder = true, ...props }, ref) => (
        <Card
            className={classes.card}
            mb="md"
            padding="md"
            ref={ref}
            shadow="xl"
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
        </Card>
    )
)

PageHeader.displayName = 'PageHeader'

