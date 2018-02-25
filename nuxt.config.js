var path = require('path')
var webpack = require('webpack')
module.exports = {
    debug: true,
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        // script: [
        //     { src: '/js/jquery-3.2.1.min.js' }, { src: '/js/jsonPaser.js' },

        // ]
    },
    /*
     ** Global CSS
     */
    css: [
        { src: '~assets/css/debug.scss', lang: 'scss' }, // 指定 scss 而非 sass
        { src: '~assets/css/main.scss', lang: 'scss' } // 指定 scss 而非 sass
    ],
    /**
     * 环境变量
     */
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost.hefantv.com'
    },
    router: {
        middleware: ['visits', 'user-agent', 'get-projects']
    },
    /*
     ** Add axios globally
     */
    build: {
        vendor: ['axios'],
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new webpack.DefinePlugin({
                'process.VERSION': require('./package.json').version,
                __DEV: true
            })
        ],
        /*
         ** Run ESLINT on save
         */
        extend(config, ctx) {
            if (ctx.isClient) {
                // config.module.rules.push({
                //   enforce: 'pre',
                //   test: /\.(js|vue)$/,
                //   loader: 'eslint-loader',
                //   exclude: /(node_modules)/
                // })
                config.module.rules.push({ test: /iview.src.*?js$/, loader: 'babel-loader' })
                config.watch = true
               
            }

             // 添加 alias 配置
             Object.assign(config.resolve.alias, {
                '~utils': path.resolve(__dirname, 'utils'),
                '~api': path.resolve(__dirname, 'api'),
                '~constant': path.resolve(__dirname, 'constant'),
                '~components': path.resolve(__dirname, 'components'),
                '~plugins': path.resolve(__dirname, 'plugins'),
            })
        }
    },
    plugins: [{ src: '~plugins/iview', ssr: true }, { src: '~plugins/infinite-scroll', ssr: false }, { src: '~plugins/charts', ssr: true }],
    loading: '~/components/loading.vue',
    watchers: {
        webpack: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 1000
        }
    }
}