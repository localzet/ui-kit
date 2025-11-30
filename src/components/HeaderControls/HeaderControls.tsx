import { BoxProps, Group } from '@mantine/core'
import { ReactNode } from 'react'

import { GithubControl } from './GithubControl'
import { TelegramControl } from './TelegramControl'
import { SupportControl } from './SupportControl'
import { LanguagePicker } from '../LanguagePicker'
import { HeaderControl } from '../HeaderControl'

export interface HeaderControlsProps extends BoxProps {
    githubLink?: string
    isGithubLoading?: boolean
    stars?: number
    telegramLink?: string
    supportLink?: string
    withGithub?: boolean
    withLanguage?: boolean
    withLogout?: boolean
    withRefresh?: boolean
    withSupport?: boolean
    withTelegram?: boolean
    withVersion?: boolean
    onRefresh?: () => void
    onLogout?: () => void
    version?: string
    versionComponent?: React.ReactNode
    refreshIcon?: React.ReactNode
    logoutIcon?: React.ReactNode
}

export function HeaderControls({
    githubLink,
    withGithub = true,
    withTelegram = true,
    withSupport = true,
    withLogout = false,
    withRefresh = false,
    withLanguage = true,
    withVersion = false,
    telegramLink = 'https://t.me/example',
    supportLink,
    stars,
    isGithubLoading,
    onRefresh,
    onLogout,
    version,
    versionComponent,
    refreshIcon,
    logoutIcon,
    ...others
}: HeaderControlsProps) {
    return (
        <Group gap="xs" {...others}>
            {withTelegram && telegramLink && <TelegramControl link={telegramLink} />}
            {withSupport && <SupportControl link={supportLink} />}
            {withVersion && (versionComponent || (version && <HeaderControl>{version}</HeaderControl>))}
            {withGithub && githubLink && (
                <GithubControl isLoading={isGithubLoading} link={githubLink} stars={stars} />
            )}
            {withLanguage && <LanguagePicker />}
            {withRefresh && onRefresh && (
                <HeaderControl onClick={onRefresh}>{refreshIcon || '↻'}</HeaderControl>
            )}
            {withLogout && onLogout && (
                <HeaderControl onClick={onLogout}>{logoutIcon || '🚪'}</HeaderControl>
            )}
        </Group>
    )
}

