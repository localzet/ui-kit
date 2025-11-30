import { ActionIcon, Tooltip } from '@mantine/core'
import { TbQuestionMark } from 'react-icons/tb'

export interface HelpActionIconProps {
    hidden?: boolean
    onClick?: () => void
    tooltip?: string
    size?: string | number
    color?: string
}

export function HelpActionIcon({
    hidden,
    onClick,
    tooltip = 'Help article',
    size = 'input-md',
    color = 'lime'
}: HelpActionIconProps) {
    if (hidden) {
        return null
    }

    const icon = (
        <ActionIcon color={color} onClick={onClick} size={size} variant="light">
            <TbQuestionMark size={24} />
        </ActionIcon>
    )

    if (tooltip) {
        return <Tooltip label={tooltip}>{icon}</Tooltip>
    }

    return icon
}

