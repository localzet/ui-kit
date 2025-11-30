import { ActionIcon, Menu, Text, useDirection } from '@mantine/core'
import { TbLanguage } from 'react-icons/tb'
import { useEffect } from 'react'

export interface Language {
    label: string
    emoji: string
    value: string
}

export interface LanguagePickerProps {
    languages?: Language[]
    currentLanguage?: string
    onLanguageChange?: (language: string) => void
    defaultLanguages?: Language[]
}

const DEFAULT_LANGUAGES: Language[] = [
    { label: 'English', emoji: '🇬🇧', value: 'en' },
    { label: 'Русский', emoji: '🇷🇺', value: 'ru' },
    { label: 'فارسی', emoji: '🇮🇷', value: 'fa' },
    { label: '简体中文', emoji: '🇨🇳', value: 'zh' }
]

export function LanguagePicker({
    languages,
    currentLanguage,
    onLanguageChange,
    defaultLanguages = DEFAULT_LANGUAGES
}: LanguagePickerProps) {
    const { toggleDirection, dir } = useDirection()

    const data = languages || defaultLanguages

    const changeLanguage = (value: string) => {
        onLanguageChange?.(value)

        if (value === 'fa' && dir === 'ltr') {
            toggleDirection()
        }

        if (dir === 'rtl' && value !== 'fa') {
            toggleDirection()
        }
    }

    const items = data.map((item) => (
        <Menu.Item
            key={item.value}
            leftSection={<Text>{item.emoji}</Text>}
            onClick={() => changeLanguage(item.value)}
        >
            {item.label}
        </Menu.Item>
    ))

    return (
        <Menu position="bottom-end" width={150} withinPortal>
            <Menu.Target>
                <ActionIcon color="gray" size="xl" style={{ borderColor: 'transparent' }}>
                    <TbLanguage size={22} />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    )
}

