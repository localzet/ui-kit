import { Image } from '@mantine/core'
import { ReactNode } from 'react'

import classes from './Sidebar.module.css'

export interface SidebarLogoProps {
    logoUrl?: string
    fallbackLogo?: string
    onClick?: () => void
    size?: number | string
    customLogo?: ReactNode
}

export function SidebarLogo({
    logoUrl,
    fallbackLogo = '/favicons/logo.svg',
    onClick,
    size = 30,
    customLogo
}: SidebarLogoProps) {
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }

    if (customLogo) {
        return (
            <div
                className={classes.fadeIn}
                onClick={handleClick}
                style={{
                    cursor: onClick ? 'pointer' : 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {customLogo}
            </div>
        )
    }

    if (logoUrl) {
        return (
            <Image
                alt="logo"
                className={classes.fadeIn}
                fallbackSrc={fallbackLogo}
                fit="contain"
                onClick={handleClick}
                src={logoUrl}
                style={{
                    maxWidth: `${size}px`,
                    maxHeight: `${size}px`,
                    width: `${size}px`,
                    height: `${size}px`,
                    cursor: onClick ? 'pointer' : 'default'
                }}
            />
        )
    }

    // Если нет ни logoUrl, ни customLogo, возвращаем пустой div
    return (
        <div
            className={classes.fadeIn}
            onClick={handleClick}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                cursor: onClick ? 'pointer' : 'default'
            }}
        />
    )
}

