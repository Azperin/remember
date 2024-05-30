import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/remember/',
    title: "Remember Things",
    description: "Description to change later",
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/remember/assets/favicon.ico' }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B',
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' }
                        ]
                    },
                    { text: 'Item C', link: '/item-3' },
                ]
            },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ],
            }
        ],
        aside: true,
        outline: {
            level: 2,
            label: 'Config Outline Text',
        },
        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/JYuyHaQ' },
            { icon: 'github', link: 'https://github.com/Azperin/remember' }
        ]
    }
})
