import { Text } from '@mantine/core'

import classes from './Sidebar.module.css'

export interface SidebarTitleProps {
    title?: string | Array<{ text: string; color?: string }>
}

export function SidebarTitle({ title }: SidebarTitleProps) {
    if (!title) {
        return null
    }

    const titleParts = typeof title === 'string' ? [{ text: title, color: 'white' }] : title

    return (
        <Text className={classes.logoTitle}>
            {titleParts.map((part, index) => (
                <Text c={part.color || 'white'} component="span" inherit key={index}>
                    {part.text}
                </Text>
            ))}
        </Text>
    )
}

