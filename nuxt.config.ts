// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    postcss: {
        plugins: {
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            meta: [
                {name: 'robots', content: 'noindex, nofollow'}
            ]
        },
    },
    css: ['~/assets/css/main.css'],
    modules: [
        '@pinia/nuxt',
        '@nuxt/content',
        [
            '@nuxtjs/google-fonts',
            {
                download: true,
                inject: true,
                useStylesheet: false,
                families: {
                    Poppins: [400, 600, 700, 800, 900],
                }
            }
        ]
    ],
})
