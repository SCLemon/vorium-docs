
export default [
    {
        group: 'GET STARTED',
        options: [
            {
                title: 'Overview',
                path: '/overview'
            },
            {
                title: 'Installation',
                path: '/installation'
            },
            {
                title: 'Quick Start',
                path: '/quick-start'
            }
        ]
    },
    {
        group: 'BASICS',
        options: [
            {
                title: 'Icons',
                path: '/icons'
            },
            {
                title: 'Button',
                path: '/button'
            },
            {
                title: 'Input',
                path: '/input',
                match: (path) =>
                    path.includes('/input') &&
                    !path.includes('/input-number')
            },
            {
                title: 'InputNumber',
                path: '/input-number'
            },
            {
                title: 'TextArea',
                path: '/text-area'
            },
            {
                title: 'Radio',
                path: '/radio'
            },
            {
                title: 'CheckBox',
                path: '/check-box'
            },
            {
                title: 'Select',
                path: '/select'
            },
            {
                title: 'Switch',
                path: '/switch'
            },
            {
                title: 'Slider',
                path: '/slider'
            },
            {
                title: 'Carousel',
                path: '/carousel'
            }
        ]
    },
    {
        group: 'ADVANCED',
        options: [
            {
                title: 'PdfViewer',
                path: '/pdf-viewer'
            },
            {
                title: 'VideoPlayer',
                path: '/video-player'
            },
            {
                title: 'CodeEditor',
                path: '/code-editor'
            }
        ]
    },
    {
        group: 'ANIMATIONS',
        options: [
            {
                title: 'Scan Light',
                path: '/scan-light'
            }
        ]
    },
    {
        group: 'OTHERS',
        options: [
            {
                title: 'Dropdown',
                path: '/dropdown'
            }
        ]
    }
]
