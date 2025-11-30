import { ActionIcon, CopyButton, Textarea } from '@mantine/core'
import { PiCheck, PiCopy } from 'react-icons/pi'

export interface CopyableAreaProps {
    label?: string
    value: number | string
}

export function CopyableArea({ label, value }: CopyableAreaProps) {
    return (
        <CopyButton timeout={2000} value={value.toString()}>
            {({ copied, copy }) => (
                <Textarea
                    label={label}
                    onClick={copy}
                    readOnly
                    rightSection={
                        <ActionIcon
                            color={copied ? 'teal' : 'gray'}
                            onClick={copy}
                            variant="subtle"
                        >
                            {copied ? <PiCheck size="16px" /> : <PiCopy size="16px" />}
                        </ActionIcon>
                    }
                    styles={{
                        input: {
                            cursor: 'copy',
                            fontFamily: 'monospace'
                        }
                    }}
                    value={value.toString()}
                />
            )}
        </CopyButton>
    )
}

