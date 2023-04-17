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
            title: 'fischerFinder',
            meta: [
                {name: 'description', content: 'Mit dem fischerFinder findet jeder Kunde das richtige fischer Befestigungssystem für seinen konkreten Anwendungsfall.Mit dem fischerFinder findet jeder Kunde das richtige fischer Befestigungssystem für seinen konkreten Anwendungsfall.'},
                {name: 'robots', content: 'noindex, nofollow'}
            ]
        },
    },
    experimental: {
        noScripts: true
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
