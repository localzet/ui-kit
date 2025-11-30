import { Center, CenterProps, Loader, Stack, Text } from '@mantine/core'

export interface LoaderModalProps extends Omit<CenterProps, 'children'> {
    text?: string
}

export function LoaderModal({ text, ...rest }: LoaderModalProps) {
    return (
        <Center {...rest}>
            <Stack align="center" gap="sm">
                <Loader size="lg" variant="bars" />
                {text && (
                    <Text c="dimmed" size="sm">
                        {text}
                    </Text>
                )}
            </Stack>
        </Center>
    )
}

