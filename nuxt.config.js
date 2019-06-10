const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

export default {
    head: {
        title: 'Media-Data-APP',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                content: 'Nuxt.js project'
            },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge'
            },
            {
                name: 'theme-color',
                content: '#0ff5'
            },
            {
                name: 'fragment',
                content: '!'
            },
            {
                name: 'mobile-web-app-capable',
                content: 'yes'
            },
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            },
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black'
            },
            {
                name: 'msapplication-TileImage',
                content: 'wecan_logo.png'
            },
            {
                name: 'msapplication-TileColor',
                content: '#da532c'
            },
        ],
        link: [{
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: 'apple-touch-icon.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: 'favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: 'favicon-16x16.png'
            },
            {
                rel: 'mask-icon',
                href: 'safari-pinned-tab.svg',
                color: '#5bbad5'
            },
            {
                name: 'msapplication-TileColor',
                content: '#da532c'
            },
            {
                name: 'theme-color',
                content: '#ffffff'
            },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'iconfont/material-icons.css'
            },
            // { rel: 'stylesheet', type: 'text/css', href: 'iconfont/font-awesome.css' },
        ],
    },
    mode: 'spa',
    router: {
        mode: 'hash',
    },
    plugins: [
        '~/plugins/vuetify',
    ],
    build: {
        plugins: [
            new VuetifyLoaderPlugin(),
        ],
    },
    modules: [
        '@nuxtjs/proxy',
    ],

    // proxy: {
    //     '/api': 'https://api.cstc.ac.th',
    //     ws: true,
    // },
}