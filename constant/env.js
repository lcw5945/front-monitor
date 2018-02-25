export const conditionList = [{
        value: 'env',
        label: '环境',
        children: [{
                value: 'development',
                label: '开发'
            },
            {
                value: 'testing',
                label: '测试'
            },
            {
                value: 'prepare',
                label: '预上线'
            },
            {
                value: 'production',
                label: '线上'
            }
        ]
    },
    {
        value: 'status',
        label: '状态',
        children: [{
                value: 'open',
                label: '打开'
            },
            {
                value: 'resolved',
                label: '已解决'
            },
            {
                value: 'ignore',
                label: '忽略'
            }
        ]
    }
]

export const debugEnv = [{
        value: 'development',
        label: '开发'
    },
    {
        value: 'testing',
        label: '测试'
    },
    {
        value: 'prepare',
        label: '预上线'
    },
    {
        value: 'production',
        label: '线上'
    }
]