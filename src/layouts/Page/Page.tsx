import { forwardRef, ReactNode, useEffect } from 'react'
import { Box, BoxProps } from '@mantine/core'

export interface PageProps extends BoxProps {
    children: ReactNode
    meta?: ReactNode
    title?: string
    appName?: string
    onMount?: () => void
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
    ({ children, title = '', meta, appName, onMount, ...other }, ref) => {
        useEffect(() => {
            if (onMount) {
                onMount()
            }
            if (title && appName) {
                document.title = `${title} | ${appName}`
            } else if (title) {
                document.title = title
            }
        }, [title, appName, onMount])

        return (
            <>
                {meta}
                <Box ref={ref} {...other}>
                    {children}
                </Box>
            </>
        )
    }
)

Page.displayName = 'Page'

