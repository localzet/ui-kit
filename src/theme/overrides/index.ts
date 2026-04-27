import { MantineComponent } from '@mantine/core'
import loadingOverlay from './loading-overlay'
import ringProgress from './ring-progress'
import notification from './notification'
import breadcrumbs from './breadcrumbs'
import fieldset from './fieldset'
import buttons from './buttons'
import layouts from './layouts'
import tooltip from './tooltip'
import charts from './charts'
import drawer from './drawer'
import inputs from './inputs'
import badge from './badge'
import table from './table'
import modal from './modal'
import card from './card'
import menu from './menu'

const overrides: Record<string, MantineComponent<any>> = {
    ...fieldset,
    ...card,
    ...drawer,
    ...modal,
    ...badge,
    ...breadcrumbs,
    ...buttons,
    ...charts,
    ...inputs,
    ...loadingOverlay,
    ...menu,
    ...notification,
    ...ringProgress,
    ...table,
    ...tooltip,
    ...layouts
}

export default overrides

