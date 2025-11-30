import { BoxProps, createPolymorphicComponent, UnstyledButton } from '@mantine/core'
import clsx from 'clsx'

import classes from './HeaderControl.module.css'

export interface HeaderControlProps extends BoxProps {
    children: React.ReactNode
}

function _HeaderControl({ className, ...others }: HeaderControlProps) {
    return <UnstyledButton className={clsx(classes.control, className)} {...others} />
}

export const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(
    _HeaderControl
)

