import { ActionIcon, CopyButton, Input } from '@mantine/core'
import { PiCheck, PiCopy } from 'react-icons/pi'

import classes from './CopyableField.module.css'

export interface CopyableFieldProps {
    label?: string
    leftSection?: React.ReactNode
    size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
    value: number | string
}

export function CopyableField({ label, value, leftSection, size }: CopyableFieldProps) {
    return (
        <CopyButton timeout={2000} value={value.toString()}>
            {({ copied, copy }) => (
                <Input.Wrapper label={label}>
                    <div className={classes.inputWrapper}>
                        <Input
                            classNames={{
                                input: classes.input,
                                section: classes.section
                            }}
                            leftSection={leftSection}
                            onClick={copy}
                            readOnly
                            rightSection={
                                <ActionIcon
                                    className={classes.copyButton}
                                    color={copied ? 'teal' : 'gray'}
                                    onClick={copy}
                                    variant="subtle"
                                >
                                    {copied ? <PiCheck size="16px" /> : <PiCopy size="16px" />}
                                </ActionIcon>
                            }
                            size={size}
                            value={value.toString()}
                        />
                    </div>
                </Input.Wrapper>
            )}
        </CopyButton>
    )
}

