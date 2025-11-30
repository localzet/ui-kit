import { ReactNode } from 'react'

export interface SettingsCardContentProps {
    children: ReactNode
}

export function SettingsCardContent({ children }: SettingsCardContentProps) {
    return <>{children}</>
}

