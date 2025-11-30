import { TbHeartFilled } from 'react-icons/tb'

import classes from './SupportControl.module.css'
import { HeaderControl } from '../HeaderControl'

export interface SupportControlProps {
    link?: string
}

export function SupportControl({ link = 'https://example.com/donate', ...others }: SupportControlProps) {
    return (
        <HeaderControl
            className={classes.support}
            component="a"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            {...others}
        >
            <TbHeartFilled />
        </HeaderControl>
    )
}

