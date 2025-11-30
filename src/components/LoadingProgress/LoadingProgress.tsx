import { nprogress } from '@mantine/nprogress'
import { useEffect } from 'react'

export interface LoadingProgressProps {
    start?: boolean
}

export function LoadingProgress({ start = true }: LoadingProgressProps) {
    useEffect(() => {
        if (start) {
            nprogress.start()
            return () => nprogress.complete()
        }
        return undefined
    }, [start])

    return null
}

