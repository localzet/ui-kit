import { Popover, Text } from '@mantine/core'
import { PiInfo } from 'react-icons/pi'
import { ReactNode } from 'react'

export interface PopoverWithInfoProps {
    position?: 'bottom' | 'left' | 'right' | 'top'
    text: ReactNode
}

export function PopoverWithInfo({ position = 'left', text }: PopoverWithInfoProps) {
    return (
        <Popover position={position} shadow="md" width={200} withArrow>
            <Popover.Target>
                <span
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <PiInfo size="20px" />
                </span>
            </Popover.Target>
            <Popover.Dropdown>
                <Text size="sm">{text}</Text>
            </Popover.Dropdown>
        </Popover>
    )
}

