import {
    alpha,
    ElementProps,
    RingProgress,
    RingProgressProps,
    Text,
    TextProps
} from '@mantine/core'

export interface MetricCardRingProgressProps
    extends ElementProps<'div', keyof RingProgressProps>,
        Omit<RingProgressProps, 'label' | 'rootColor'> {
    baseColor?: string
    label?: string
    labelProps?: Omit<TextProps, 'fw' | 'ta'>
}

export function MetricCardRingProgress({
    label,
    baseColor,
    labelProps,
    sections,
    ...props
}: MetricCardRingProgressProps) {
    const color = baseColor
        ? alpha(baseColor, 0.1)
        : sections && sections.length === 1
          ? alpha(sections[0].color, 0.1)
          : alpha('var(--rp-curve-root-color)', 0.6)

    return (
        <RingProgress
            label={
                label ? (
                    <Text fw={700} ta="center" {...labelProps}>
                        {label}
                    </Text>
                ) : undefined
            }
            rootColor={color}
            sections={sections}
            {...props}
        />
    )
}

