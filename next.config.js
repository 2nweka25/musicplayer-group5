//const path = require('path');
const withPWA = require('next-pwa');
//const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
//const WebpackPwaManifest = require('webpack-pwa-manifest');


/**
 * SW.js generation
 */

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        sw: 'sw.js',
    },
})

/**To generate manifest and icons
 */
/*
module.exports = {
    webpack(config, { isServer, buildId, dev }) {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        };

        const workboxOptions = {
            clientsClaim: true,
            skipWaiting: true,
            globPatterns: ['.next/static/*', '.next/static/commons/*'],
            modifyUrlPrefix: {
                '.next': '/_next',
            },
            runtimeCaching: [
                {
                    urlPattern: '/',
                    handler: 'networkFirst',
                    options: {
                        cacheName: 'html-cache',
                    },
                },
                {
                    urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
                    handler: 'cacheFirst',
                    options: {
                        cacheName: 'image-cache',
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
            ],
        };

        config.plugins.push(
            new NextWorkboxPlugin({
                buildId,
                ...workboxOptions,
            }),
            new WebpackPwaManifest({
                filename: 'static/manifest.json',
                name: 'Next PWA',
                short_name: 'Next-PWA',
                description: 'A Movie browsing PWA using Next.js and Google Workbox',
                background_color: '#ffffff',
                theme_color: '#5755d9',
                display: 'standalone',
                orientation: 'portrait',
                fingerprints: false,
                inject: false,
                start_url: '/',
                ios: {
                    'apple-mobile-web-app-title': 'Next-PWA',
                    'apple-mobile-web-app-status-bar-style': '#5755d9',
                },
                icons: [
                    {
                        src: path.resolve('./public/logo.png'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        ios: true
                    },
                    {
                        src: path.resolve('./public/logo.png'),
                        size: '1024x1024'
                    },
                    {
                        src: path.resolve('./public/logo.png'),
                        size: '1024x1024',
                        purpose: 'maskable'
                    },
                ],
                includeDirectory: true,
                publicPath: '..',
            })
        );
        return config;
    },
};
*/